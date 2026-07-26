"use client";

import { DateRangeFilter } from "@/components/app/ContactMessages/DateRangeFilter";
import { SearchInput } from "@/components/app/shared/filter/SearchInput";
import { FilterSelect } from "@/components/app/shared/filter/FilterSelect";
import { Button } from "@heroui/react";
import { lifecycleEnumOptions } from "./lifecycle-enum-labels";
import {
  ReportKind,
  financialReportCopy,
  reportConfig,
  reportStatuses,
} from "./financial-report-helpers";

type CategoryOption = { id: string; nameAr: string; nameEn: string };

export const ReportFiltersSection = ({
  kind,
  lang,
  search,
  status,
  categoryId,
  from,
  to,
  categories,
  onSearchChange,
  onStatusChange,
  onCategoryChange,
  onFromChange,
  onToChange,
  onClear,
}: {
  kind: ReportKind;
  lang: string;
  search: string;
  status: string;
  categoryId: string;
  from: string | null;
  to: string | null;
  categories: CategoryOption[];
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onFromChange: (value: string | null) => void;
  onToChange: (value: string | null) => void;
  onClear: () => void;
}) => {
  const copy = financialReportCopy(lang);
  const config = reportConfig[kind];
  const hasFilters = Boolean(search || status || categoryId || from || to);

  return (
    <section className="grid grid-cols-2 items-center gap-4 lg:flex">
      <SearchInput
        className="w-full md:w-max"
        noSubmit
        noClear
        value={search}
        onChange={onSearchChange}
      />
      <FilterSelect
        options={lifecycleEnumOptions(reportStatuses[kind], lang)}
        placeholder={copy.status}
        className="w-full md:w-max"
        values={status ? [status] : []}
        onValueChange={(values) => onStatusChange(values[0] ?? "")}
      />
      {config.showCategoryFilter && (
        <FilterSelect
          options={categories.map((category) => ({
            key: category.id,
            label: lang === "ar" ? category.nameAr : category.nameEn,
          }))}
          placeholder={copy.category}
          className="w-full md:w-max"
          values={categoryId ? [categoryId] : []}
          onValueChange={(values) => onCategoryChange(values[0] ?? "")}
        />
      )}
      <DateRangeFilter
        key={`${from}${to}`}
        dateFrom={from}
        dateTo={to}
        setDateFrom={onFromChange}
        setDateTo={onToChange}
      />
      {hasFilters && (
        <Button
          className="bg-app-primary/10 text-app-primary font-medium"
          onPress={onClear}
        >
          {copy.clearFilters}
        </Button>
      )}
    </section>
  );
};
