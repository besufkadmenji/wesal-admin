"use client";

import { DateRangeFilter } from "@/components/app/ContactMessages/DateRangeFilter";
import { PermissionGate } from "@/components/app/admin-lifecycle/PermissionGate";
import { lifecycleEnumOptions } from "@/components/app/admin-lifecycle/lifecycle-enum-labels";
import { LifecycleStatusBadge } from "@/components/app/admin-lifecycle/LifecycleStatusBadge";
import { FilterSelect } from "@/components/app/shared/filter/FilterSelect";
import { SearchInput } from "@/components/app/shared/filter/SearchInput";
import { PageBar } from "@/components/app/shared/PageBar";
import { PageWrapper } from "@/components/app/shared/PageWrapper";
import {
  SummaryCard,
  SummaryCardType,
} from "@/components/app/shared/summary/SummaryCard";
import { SummaryCardSkeleton } from "@/components/app/shared/summary/SummaryCardSkeleton";
import {
  AppTable,
  ColumnType,
  RowType,
} from "@/components/app/shared/tables/AppTable";
import { AppTableSkeleton } from "@/components/app/shared/tables/AppTableSkeleton";
import { useAppRouter } from "@/hooks/useAppRouter";
import { useCanAccess } from "@/hooks/useCanAccess";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import { Button } from "@heroui/react";
import { parseAsInteger, useQueryState } from "nuqs";
import { Key, ReactNode } from "react";
import { CHARITY_PAGE_SIZE, CHARITY_STATUSES, useCharity } from "./useCharity";

const COLUMN_KEYS = [
  "index",
  "contract",
  "customer",
  "customer_mobile",
  "provider",
  "provider_mobile",
  "category",
  "status",
  "amount",
] as const;

const money = (value: number, lang: string) =>
  `${value.toLocaleString(lang === "ar" ? "ar-SA" : "en-SA", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} ${lang === "ar" ? "ر.س" : "SAR"}`;

/** Wesal Al-Khair charity list (BRD 4.3.11; PO 2026-10-18). View only. */
export const CharityPage = () => {
  const dict = useDict();
  const lang = useLang();
  const router = useAppRouter();
  const canRead = useCanAccess("charity", "read");
  const charity = useCharity(canRead);
  const [, setSearch] = useQueryState("search", { defaultValue: "" });
  const [, setStatus] = useQueryState("status", { defaultValue: "" });
  const [, setCategoryId] = useQueryState("categoryId", { defaultValue: "" });
  const [, setDateFrom] = useQueryState("dateFrom");
  const [, setDateTo] = useQueryState("dateTo");
  const [, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const copy = dict.charity_page;

  const columns: ColumnType[] = COLUMN_KEYS.map((key) => ({
    key,
    label: copy.columns[key],
  }));
  const rows: RowType[] = (charity.list.data?.items ?? []).map(
    (item, index) => {
      const category = item.conversation?.listing?.category;
      return {
        key: item.id,
        index: `${(charity.page - 1) * CHARITY_PAGE_SIZE + index + 1}`,
        contract: item.publicId ? `#${item.publicId}` : "—",
        customer: item.client?.name ?? "—",
        customer_mobile: item.client?.phone ?? "—",
        provider: item.provider?.commercialName ?? "—",
        provider_mobile: item.provider?.phone ?? "—",
        category: category
          ? lang === "ar"
            ? category.nameAr
            : category.nameEn
          : "—",
        status: item.status,
        amount: money(item.charityAmount, lang),
      };
    },
  );
  const summary = charity.summary.data;
  const hasFilters =
    charity.search ||
    charity.status ||
    charity.categoryId ||
    charity.dateFrom ||
    charity.dateTo;

  return (
    <PermissionGate resource="charity">
      <PageWrapper>
        <PageBar title={copy.title} />
        <p className="text-subTitle pt-2 text-sm dark:text-white/70">
          {copy.description}
        </p>
        <div className="grid gap-5 py-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {charity.summary.isLoading ? (
              <>
                <SummaryCardSkeleton />
                <SummaryCardSkeleton />
                <SummaryCardSkeleton />
              </>
            ) : (
              <>
                <SummaryCard
                  type={SummaryCardType.CONTRACTS}
                  title={copy.summary.contracts}
                  subTitle=""
                  value={summary?.contracts ?? 0}
                />
                <SummaryCard
                  type={SummaryCardType.SIGNED_CONTRACTS}
                  title={copy.summary.completed}
                  subTitle=""
                  value={summary?.completedContracts ?? 0}
                />
                <SummaryCard
                  type={SummaryCardType.REPORTS}
                  title={copy.summary.total}
                  subTitle=""
                  value={money(summary?.totalAmount ?? 0, lang)}
                />
              </>
            )}
          </div>
          <section className="grid grid-cols-2 items-center gap-4 lg:flex">
            <SearchInput
              key={charity.search}
              className="w-full md:w-max"
              noClear
              onSubmit={() => {
                void setPage(1, { history: "push" });
              }}
            />
            <FilterSelect
              options={lifecycleEnumOptions(CHARITY_STATUSES, lang)}
              placeholder={copy.filters.status}
              className="w-full md:w-max"
              values={charity.status ? [charity.status] : []}
              onValueChange={(values) => {
                void setStatus(values[0] || null, { history: "push" });
                void setPage(1, { history: "push" });
              }}
            />
            <FilterSelect
              options={charity.categories.map((category) => ({
                key: category.id,
                label: lang === "ar" ? category.nameAr : category.nameEn,
              }))}
              placeholder={copy.filters.category}
              className="w-full md:w-max"
              values={charity.categoryId ? [charity.categoryId] : []}
              onValueChange={(values) => {
                void setCategoryId(values[0] || null, { history: "push" });
                void setPage(1, { history: "push" });
              }}
            />
            <DateRangeFilter
              key={`${charity.dateFrom}${charity.dateTo}`}
              dateFrom={charity.dateFrom}
              dateTo={charity.dateTo}
              setDateFrom={(value) => {
                void setDateFrom(value, { history: "push" });
                void setPage(1, { history: "push" });
              }}
              setDateTo={(value) => {
                void setDateTo(value, { history: "push" });
                void setPage(1, { history: "push" });
              }}
            />
            {hasFilters && (
              <Button
                className="bg-app-primary/10 text-app-primary font-medium"
                onPress={() => {
                  void setSearch(null, { history: "push" });
                  void setStatus(null, { history: "push" });
                  void setCategoryId(null, { history: "push" });
                  void setDateFrom(null, { history: "push" });
                  void setDateTo(null, { history: "push" });
                  void setPage(1, { history: "push" });
                }}
              >
                {dict.common.actions.clearFilters}
              </Button>
            )}
          </section>
          {charity.list.isLoading ? (
            <AppTableSkeleton columns={columns.length} rows={10} />
          ) : (
            <AppTable
              label={copy.title}
              columns={columns}
              rows={rows}
              rowClick={(row) => router.push(`/${lang}/contracts/${row.key}`)}
              renderCell={(row: RowType, column: Key): ReactNode => {
                if (column === "status") {
                  return <LifecycleStatusBadge status={row.status} lang={lang} />;
                }
                if (column === "customer_mobile" || column === "provider_mobile") {
                  return <span dir="ltr">{row[column]}</span>;
                }
                return row[String(column)];
              }}
              pagination={{
                page: charity.page,
                total: charity.list.data?.meta.totalPages ?? 1,
                onChange: (nextPage) => {
                  void setPage(nextPage, { history: "push" });
                },
              }}
              emptyContent={copy.empty}
              disableSelect
            />
          )}
        </div>
      </PageWrapper>
    </PermissionGate>
  );
};
