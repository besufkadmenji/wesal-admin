"use client";

import { PageBar } from "@/components/app/shared/PageBar";
import { PageWrapper } from "@/components/app/shared/PageWrapper";
import { AdminLifecycleService } from "@/services/admin-lifecycle.service";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@heroui/react";
import { Key, ReactNode } from "react";
import { PermissionGate } from "./PermissionGate";
import { useCanAccess } from "@/hooks/useCanAccess";
import CategoryService from "@/services/category.service";
import { useLang } from "@/hooks/useLang";
import {
  ComplaintStatus,
  ContractStatus,
  ConversationStatus,
} from "@/gql/graphql";
import {
  AppTable,
  ColumnType,
  RowType,
} from "@/components/app/shared/tables/AppTable";
import { AppTableSkeleton } from "@/components/app/shared/tables/AppTableSkeleton";
import {
  SummaryCard,
  SummaryCardType,
} from "@/components/app/shared/summary/SummaryCard";
import { SummaryCardSkeleton } from "@/components/app/shared/summary/SummaryCardSkeleton";
import { SearchInput } from "@/components/app/shared/filter/SearchInput";
import { FilterSelect } from "@/components/app/shared/filter/FilterSelect";
import { DateRangeFilter } from "@/components/app/ContactMessages/DateRangeFilter";
import {
  lifecycleDateFrom,
  lifecycleDateTo,
  lifecycleEnumLabel,
  lifecycleEnumOptions,
} from "./lifecycle-enum-labels";
import { LifecycleStatusBadge } from "./LifecycleStatusBadge";
import { ActionsCell } from "@/components/app/shared/tables/ActionsCell";
import { parseAsInteger, useQueryState } from "nuqs";
import { usePathname } from "next/navigation";
import { useAppRouter } from "@/hooks/useAppRouter";

type Kind = "contracts" | "conversations" | "complaints";
const summaryTypes: Record<Kind, SummaryCardType> = {
  contracts: SummaryCardType.CONTRACTS,
  conversations: SummaryCardType.CONVERSATIONS,
  complaints: SummaryCardType.COMPLAINTS,
};
const summaryCopy: Record<
  Kind,
  { en: [string, string]; ar: [string, string] }
> = {
  contracts: {
    en: ["Total contracts", "contracts"],
    ar: ["إجمالي التعاقدات", "تعاقد"],
  },
  conversations: {
    en: ["Total conversations", "conversations"],
    ar: ["إجمالي المحادثات", "محادثة"],
  },
  complaints: {
    en: ["Total complaints", "complaints"],
    ar: ["إجمالي الشكاوى", "شكوى"],
  },
};

type LifecycleRow = {
  id: string;
  publicId?: number | null;
  title?: string;
  reporterType?: string;
  status: string;
  createdAt: string;
  client?: { name?: string | null } | null;
  user?: { name?: string | null } | null;
  provider?: { commercialName?: string | null } | null;
  listing?: { name?: string | null } | null;
  conversation?: { listing?: { name?: string | null } | null } | null;
};

const labels = {
  contracts: {
    title: "Contracts",
    columns: [
      "Number",
      "Customer",
      "Provider",
      "Listing",
      "Status",
      "Date",
      "Actions",
    ],
  },
  conversations: {
    title: "Conversations",
    columns: [
      "Number",
      "Customer",
      "Provider",
      "Listing",
      "Status",
      "Date",
      "Actions",
    ],
  },
  complaints: {
    title: "Complaints",
    columns: [
      "Number",
      "Title",
      "Listing",
      "Reporter",
      "Status",
      "Date",
      "Actions",
    ],
  },
} satisfies Record<Kind, { title: string; columns: string[] }>;
const arabicLabels: Record<Kind, { title: string; columns: string[] }> = {
  contracts: {
    title: "إدارة التعاقدات",
    columns: [
      "الرقم",
      "العميل",
      "مقدم الخدمة",
      "الإعلان",
      "الحالة",
      "التاريخ",
      "الإجراءات",
    ],
  },
  conversations: {
    title: "إدارة المحادثات",
    columns: [
      "الرقم",
      "العميل",
      "مقدم الخدمة",
      "الإعلان",
      "الحالة",
      "التاريخ",
      "الإجراءات",
    ],
  },
  complaints: {
    title: "قسم الشكاوى",
    columns: [
      "الرقم",
      "العنوان",
      "الإعلان",
      "مقدم الشكوى",
      "الحالة",
      "التاريخ",
      "الإجراءات",
    ],
  },
};

const statuses: Record<Kind, string[]> = {
  contracts: [
    "DRAFT",
    "PENDING",
    "ACCEPTED",
    "IN_PROGRESS",
    "AWAITING_CUSTOMER_CONFIRMATION",
    "DELIVERY_IN_PROGRESS",
    "CANCELLATION_REQUESTED",
    "DISPUTED",
    "COMPLETED",
    "REJECTED",
    "CANCELLED",
  ],
  conversations: ["ACTIVE", "CLOSED"],
  complaints: ["PENDING", "UNDER_REVIEW", "RESOLVED", "REJECTED", "CLOSED"],
};

export const LifecycleListPage = ({ kind }: { kind: Kind }) => {
  const [search, setSearch] = useQueryState("search", { defaultValue: "" });
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [status, setStatus] = useQueryState("status", { defaultValue: "" });
  const [from, setFrom] = useQueryState("dateFrom");
  const [to, setTo] = useQueryState("dateTo");
  const [categoryId, setCategoryId] = useQueryState("categoryId", {
    defaultValue: "",
  });
  const pathname = usePathname();
  const router = useAppRouter();
  const lang = useLang();
  const copy = lang === "ar" ? arabicLabels[kind] : labels[kind];
  const resource = kind.slice(0, -1);
  const allowed = useCanAccess(resource, "read");
  const query = useQuery({
    queryKey: [
      "admin-lifecycle",
      kind,
      search,
      status,
      categoryId,
      from,
      to,
      page,
    ],
    queryFn: async (): Promise<{
      items: LifecycleRow[];
      meta: { total: number; totalPages: number };
    }> => {
      if (kind === "contracts") {
        return AdminLifecycleService.contracts({
          search,
          status: (status as ContractStatus) || undefined,
          categoryId: categoryId || undefined,
          from: lifecycleDateFrom(from),
          to: lifecycleDateTo(to),
          page,
          limit: 10,
        }) as Promise<{
          items: LifecycleRow[];
          meta: { total: number; totalPages: number };
        }>;
      }
      if (kind === "conversations") {
        return AdminLifecycleService.conversations({
          search,
          status: (status as ConversationStatus) || undefined,
          from: lifecycleDateFrom(from),
          to: lifecycleDateTo(to),
          page,
          limit: 10,
        }) as Promise<{
          items: LifecycleRow[];
          meta: { total: number; totalPages: number };
        }>;
      }
      return AdminLifecycleService.complaints({
        search,
        status: (status as ComplaintStatus) || undefined,
        from: lifecycleDateFrom(from),
        to: lifecycleDateTo(to),
        page,
        limit: 10,
      }) as Promise<{
        items: LifecycleRow[];
        meta: { total: number; totalPages: number };
      }>;
    },
    enabled: allowed,
  });
  const categories = useQuery({
    queryKey: ["admin-lifecycle-categories"],
    queryFn: () => CategoryService.categories({ page: 1, limit: 100 }),
    enabled: allowed && kind === "contracts",
  });
  const data = query.data as
    | {
        items: LifecycleRow[];
        meta: { total: number; totalPages: number };
      }
    | undefined;
  const [summaryTitle, summarySubTitle] =
    summaryCopy[kind][lang === "ar" ? "ar" : "en"];
  const columnKeys =
    kind === "complaints"
      ? ["number", "title", "listing", "reporter", "status", "date", "action"]
      : [
          "number",
          "customer",
          "provider",
          "listing",
          "status",
          "date",
          "action",
        ];
  const columns: ColumnType[] = columnKeys.map((key, index) => ({
    key,
    label: copy.columns[index],
    align: key === "action" ? "center" : undefined,
  }));
  const rows: RowType[] = (data?.items ?? []).map((item) => ({
    key: item.id,
    number: `${item.publicId ?? "—"}`,
    customer: item.client?.name ?? item.user?.name ?? "—",
    provider: item.provider?.commercialName ?? "—",
    title: item.title ?? "—",
    listing: item.conversation?.listing?.name ?? item.listing?.name ?? "—",
    reporter: item.reporterType
      ? lifecycleEnumLabel(item.reporterType, lang)
      : "—",
    status: item.status,
    date: new Date(item.createdAt).toLocaleDateString(),
  }));

  return (
    <PermissionGate resource={resource}>
      <PageWrapper>
        <PageBar title={copy.title} />
        <div className="grid gap-5 py-8">
          {query.isLoading ? (
            <SummaryCardSkeleton />
          ) : (
            <SummaryCard
              type={summaryTypes[kind]}
              value={data?.meta.total ?? 0}
              title={summaryTitle}
              subTitle={summarySubTitle}
            />
          )}
          <section className="grid grid-cols-2 items-center gap-4 lg:flex">
            <SearchInput
              key={search}
              className="w-full md:w-max"
              noClear
              onSubmit={() => {
                void setPage(1, { history: "push" });
              }}
            />
            <FilterSelect
              options={lifecycleEnumOptions(statuses[kind], lang)}
              placeholder={lang === "ar" ? "الحالة" : "Status"}
              className="w-full md:w-max"
              values={status ? [status] : []}
              onValueChange={(values) => {
                void setStatus(values[0] || null, { history: "push" });
                void setPage(1, { history: "push" });
              }}
            />
            {kind === "contracts" && (
              <FilterSelect
                options={(categories.data?.items ?? []).map((category) => ({
                  key: category.id,
                  label: lang === "ar" ? category.nameAr : category.nameEn,
                }))}
                placeholder={lang === "ar" ? "القسم" : "Category"}
                className="w-full md:w-max"
                values={categoryId ? [categoryId] : []}
                onValueChange={(values) => {
                  void setCategoryId(values[0] || null, {
                    history: "push",
                  });
                  void setPage(1, { history: "push" });
                }}
              />
            )}
            <DateRangeFilter
              key={`${from}${to}`}
              dateFrom={from}
              dateTo={to}
              setDateFrom={(value) => {
                void setFrom(value, { history: "push" });
                void setPage(1, { history: "push" });
              }}
              setDateTo={(value) => {
                void setTo(value, { history: "push" });
                void setPage(1, { history: "push" });
              }}
            />
            {(search || status || categoryId || from || to) && (
              <Button
                className="bg-app-primary/10 text-app-primary font-medium"
                onPress={() => {
                  void setSearch(null, { history: "push" });
                  void setStatus(null, { history: "push" });
                  void setCategoryId(null, { history: "push" });
                  void setFrom(null, { history: "push" });
                  void setTo(null, { history: "push" });
                  void setPage(1, { history: "push" });
                }}
              >
                {lang === "ar" ? "مسح عوامل التصفية" : "Clear filters"}
              </Button>
            )}
          </section>
          {query.isLoading ? (
            <AppTableSkeleton columns={columns.length} rows={10} />
          ) : (
            <AppTable
              label={copy.title}
              columns={columns}
              rows={rows}
              renderCell={(row: RowType, column: Key): ReactNode => {
                if (column === "number") {
                  return (
                    <p className="text-app-primary font-semibold">
                      #{row.number}
                    </p>
                  );
                }
                if (column === "status") {
                  return (
                    <LifecycleStatusBadge status={row.status} lang={lang} />
                  );
                }
                if (column === "action") {
                  return (
                    <ActionsCell
                      onView={() => router.push(`${pathname}/${row.key}`)}
                    />
                  );
                }
                return row[String(column)];
              }}
              pagination={{
                page,
                total: data?.meta.totalPages ?? 1,
                onChange: (nextPage) => {
                  void setPage(nextPage, { history: "push" });
                },
              }}
              emptyContent={
                lang === "ar" ? "لا توجد نتائج" : "No records found"
              }
              disableSelect
            />
          )}
        </div>
      </PageWrapper>
    </PermissionGate>
  );
};
