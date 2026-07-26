"use client";

import { Gap } from "@/components/app/shared/Gap";
import { PageBar } from "@/components/app/shared/PageBar";
import { PageWrapper } from "@/components/app/shared/PageWrapper";
import { AppLink } from "@/components/app/shared/NoPrefetchLink";
import { AdminLifecycleService } from "@/services/admin-lifecycle.service";
import { showErrorMessage } from "@/utils/show.message";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@heroui/react";
import { Key, ReactNode, useEffect, useState } from "react";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";
import { PermissionGate } from "./PermissionGate";
import { useCanAccess } from "@/hooks/useCanAccess";
import CategoryService from "@/services/category.service";
import { useLang } from "@/hooks/useLang";
import {
  AppTable,
  ColumnType,
  RowType,
} from "@/components/app/shared/tables/AppTable";
import { AppTableSkeleton } from "@/components/app/shared/tables/AppTableSkeleton";
import {
  lifecycleDateFrom,
  lifecycleDateTo,
} from "./lifecycle-enum-labels";
import { LifecycleStatusBadge } from "./LifecycleStatusBadge";
import { conversationStatusLabel } from "./conversation-detail-helpers";
import {
  ReportData,
  ReportKind,
  ReportPeriod,
  ReportPeriodSelection,
  financialReportCopy,
  formatReportCell,
  periodToDateRange,
  reportConfig,
} from "./financial-report-helpers";
import { ReportPeriodFilter } from "./ReportPeriodFilter";
import { ReportSummarySection } from "./ReportSummarySection";
import { ReportFiltersSection } from "./ReportFiltersSection";

export const FinancialReportPage = ({ kind }: { kind: ReportKind }) => {
  const config = reportConfig[kind];
  const lang = useLang();
  const copy = financialReportCopy(lang);
  const allowed = useCanAccess("report", "read");

  const [search, setSearch] = useQueryState(
    "search",
    parseAsString.withDefault(""),
  );
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [status, setStatus] = useQueryState(
    "status",
    parseAsString.withDefault(""),
  );
  const [from, setFrom] = useQueryState("dateFrom");
  const [to, setTo] = useQueryState("dateTo");
  const [categoryId, setCategoryId] = useQueryState(
    "categoryId",
    parseAsString.withDefault(""),
  );
  const [period, setPeriod] = useQueryState("period");
  const [searchInput, setSearchInput] = useState(search);
  const [exporting, setExporting] = useState<"pdf" | "xlsx" | null>(null);
  const [filterKey, setFilterKey] = useState(0);

  const activePeriod: ReportPeriodSelection =
    period === "today" ||
    period === "week" ||
    period === "month" ||
    period === "12months" ||
    period === "all"
      ? period
      : period == null && !from && !to
        ? "all"
        : null;

  useEffect(() => {
    setSearchInput(search);
  }, [search]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (searchInput === search) return;
      void setSearch(searchInput);
      void setPage(1);
    }, 300);
    return () => window.clearTimeout(timer);
  }, [searchInput, search, setSearch, setPage]);

  const query = useQuery({
    queryKey: [
      "admin-report",
      kind,
      search,
      status,
      categoryId,
      from,
      to,
      page,
    ],
    queryFn: async () =>
      (await AdminLifecycleService.report(kind, {
        search,
        status: status || undefined,
        categoryId: categoryId || undefined,
        from: lifecycleDateFrom(from),
        to: lifecycleDateTo(to),
        page,
        limit: 10,
      })) as ReportData,
    enabled: allowed,
  });

  const categories = useQuery({
    queryKey: ["admin-report-categories"],
    queryFn: () => CategoryService.categories({ page: 1, limit: 100 }),
    enabled: allowed && config.showCategoryFilter,
  });

  const columns: ColumnType[] = config.columns.map((key) => ({
    key,
    label: copy.columns[key] ?? key,
  }));

  const rows: RowType[] = (query.data?.items ?? []).map((item, index) => {
    const row: RowType = {
      key: String(
        item.paymentId ?? item.contractId ?? item.conversationId ?? index,
      ),
    };
    if (config.idField) {
      row.detailId = String(item[config.idField] ?? "");
    }
    for (const column of config.columns) {
      row[column] = formatReportCell(column, item[column], lang);
      if (column === "status") {
        row.status = String(item.status ?? "");
      }
    }
    return row;
  });

  const applyPeriod = (next: ReportPeriod) => {
    const range = periodToDateRange(next);
    void setPeriod(next === "all" ? null : next);
    void setFrom(range.from);
    void setTo(range.to);
    void setPage(1);
    setFilterKey((value) => value + 1);
  };

  const onCustomFromChange = (value: string | null) => {
    void setPeriod(null);
    void setFrom(value);
    void setPage(1);
  };

  const onCustomToChange = (value: string | null) => {
    void setPeriod(null);
    void setTo(value);
    void setPage(1);
  };

  const clearFilters = () => {
    void setSearch("");
    void setStatus("");
    void setCategoryId("");
    void setFrom(null);
    void setTo(null);
    void setPeriod(null);
    void setPage(1);
    setSearchInput("");
    setFilterKey((value) => value + 1);
  };

  const exportReport = async (format: "pdf" | "xlsx") => {
    try {
      setExporting(format);
      const blob = await AdminLifecycleService.download(config.endpoint, {
        search: search || undefined,
        status: status || undefined,
        categoryId: categoryId || undefined,
        language: lang,
        from: lifecycleDateFrom(from),
        to: lifecycleDateTo(to),
        format,
      });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `${kind}-report.${format}`;
      anchor.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      showErrorMessage(
        error instanceof Error ? error.message : String(error),
      );
    } finally {
      setExporting(null);
    }
  };

  const renderCell = (row: RowType, column: Key): ReactNode => {
    const columnKey = String(column);
    if (columnKey === "status") {
      const label =
        kind === "conversations"
          ? conversationStatusLabel(row.status, lang)
          : undefined;
      return (
        <LifecycleStatusBadge
          status={row.status}
          lang={lang}
          label={label}
        />
      );
    }
    if (
      config.linkColumn &&
      config.detailPath &&
      columnKey === config.linkColumn &&
      row.detailId
    ) {
      return (
        <AppLink
          href={`${config.detailPath}/${row.detailId}`}
          className="text-app-primary font-medium"
        >
          {row[columnKey]}
        </AppLink>
      );
    }
    return row[columnKey];
  };

  return (
    <PermissionGate resource="report">
      <PageWrapper>
        <PageBar
          title={copy.titles[kind]}
          className="grid grid-cols-1 gap-2 md:flex"
        >
          <Button
            variant="bordered"
            className="border-app-primary text-app-primary"
            isLoading={exporting === "pdf"}
            isDisabled={exporting != null}
            onPress={() => exportReport("pdf")}
          >
            {copy.exportPdf}
          </Button>
          <Button
            className="bg-app-primary text-white"
            isLoading={exporting === "xlsx"}
            isDisabled={exporting != null}
            onPress={() => exportReport("xlsx")}
          >
            {copy.exportXlsx}
          </Button>
        </PageBar>
        <Gap className="h-8" />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <ReportPeriodFilter value={activePeriod} onChange={applyPeriod} />
        </div>
        <Gap className="h-6" />
        <ReportSummarySection
          kind={kind}
          lang={lang}
          loading={query.isLoading}
          data={query.data}
        />
        <Gap className="h-6" />
        <div className="grid grid-cols-1 gap-4">
          <ReportFiltersSection
            key={filterKey}
            kind={kind}
            lang={lang}
            search={searchInput}
            status={status}
            categoryId={categoryId}
            from={from}
            to={to}
            categories={categories.data?.items ?? []}
            onSearchChange={setSearchInput}
            onStatusChange={(value) => {
              void setStatus(value);
              void setPage(1);
            }}
            onCategoryChange={(value) => {
              void setCategoryId(value);
              void setPage(1);
            }}
            onFromChange={onCustomFromChange}
            onToChange={onCustomToChange}
            onClear={clearFilters}
          />
          {query.isLoading ? (
            <AppTableSkeleton columns={columns.length} rows={10} />
          ) : (
            <AppTable
              label={copy.titles[kind]}
              columns={columns}
              rows={rows}
              renderCell={renderCell}
              pagination={{
                page,
                total: Math.ceil((query.data?.meta.total ?? 0) / 10),
                onChange: (next) => {
                  void setPage(next);
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
