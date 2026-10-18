import {
  lifecycleDateFrom,
  lifecycleDateTo,
} from "@/components/app/admin-lifecycle/lifecycle-enum-labels";
import { ContractStatus } from "@/gql/graphql";
import CategoryService from "@/services/category.service";
import CharityService from "@/services/charity.service";
import { useQuery } from "@tanstack/react-query";
import { parseAsInteger, useQueryState } from "nuqs";

export const CHARITY_PAGE_SIZE = 10;

/** BRD 4.3.11 status filter: pending acceptance, in progress, completed. */
export const CHARITY_STATUSES: ContractStatus[] = [
  ContractStatus.Pending,
  ContractStatus.InProgress,
  ContractStatus.Completed,
];

/** List, totals and filter state for the admin charity page. */
export const useCharity = (enabled: boolean) => {
  const [search] = useQueryState("search", { defaultValue: "" });
  const [status] = useQueryState("status", { defaultValue: "" });
  const [categoryId] = useQueryState("categoryId", { defaultValue: "" });
  const [dateFrom] = useQueryState("dateFrom");
  const [dateTo] = useQueryState("dateTo");
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const from = lifecycleDateFrom(dateFrom);
  const to = lifecycleDateTo(dateTo);

  const list = useQuery({
    queryKey: ["admin-charity", search, status, categoryId, from, to, page],
    queryFn: () =>
      CharityService.contracts({
        search: search || undefined,
        status: (status as ContractStatus) || undefined,
        categoryId: categoryId || undefined,
        from,
        to,
        page,
        limit: CHARITY_PAGE_SIZE,
      }),
    enabled,
  });
  const summary = useQuery({
    queryKey: ["admin-charity-summary", from, to],
    queryFn: () => CharityService.summary(from, to),
    enabled,
  });
  const categories = useQuery({
    queryKey: ["admin-lifecycle-categories"],
    queryFn: () => CategoryService.categories({ page: 1, limit: 100 }),
    enabled,
  });

  return {
    list,
    summary,
    categories: categories.data?.items ?? [],
    page,
    search,
    status,
    categoryId,
    dateFrom,
    dateTo,
  };
};
