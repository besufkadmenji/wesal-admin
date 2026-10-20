"use client";

import { PermissionGate } from "@/components/app/admin-lifecycle/PermissionGate";
import {
  AddButton,
  AddButtonType,
} from "@/components/app/shared/button/AddButton";
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
import { RECIPIENT_TYPES, recipientTypesLabel } from "./recipientTypes";
import { BROADCASTS_PAGE_SIZE, useBroadcasts } from "./useBroadcasts";

const COLUMN_KEYS = [
  "index",
  "title",
  "content",
  "recipient_type",
  "recipients",
  "date",
] as const;

/** Notification management list (BRD 4.3.24). */
export const NotificationsPage = () => {
  const dict = useDict();
  const lang = useLang();
  const router = useAppRouter();
  const canRead = useCanAccess("notification", "read");
  const canCreate = useCanAccess("notification", "create");
  const { query, page, search, recipientType } = useBroadcasts(canRead);
  const [, setSearch] = useQueryState("search", { defaultValue: "" });
  const [, setRecipientType] = useQueryState("recipientType", {
    defaultValue: "",
  });
  const [, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const copy = dict.notifications_page;

  const columns: ColumnType[] = COLUMN_KEYS.map((key) => ({
    key,
    label: copy.columns[key],
  }));
  const rows: RowType[] = (query.data?.items ?? []).map((item, index) => ({
    key: item.id,
    index: `${(page - 1) * BROADCASTS_PAGE_SIZE + index + 1}`,
    title: item.title,
    content: item.message,
    recipient_type: recipientTypesLabel(dict, item.recipientTypes),
    recipients: `${item.recipientCount} (${copy.audience[item.audience]})`,
    date: new Date(item.createdAt).toLocaleString(
      lang === "ar" ? "ar-SA" : "en-SA",
    ),
  }));

  return (
    <PermissionGate resource="notification">
      <PageWrapper>
        <PageBar title={copy.title}>
          {canCreate && (
            <AddButton
              type={AddButtonType.Notification}
              onPress={() => router.push(`/${lang}/notifications/add`)}
            />
          )}
        </PageBar>
        <div className="grid grid-cols-1 gap-5 py-8">
          {query.isLoading ? (
            <SummaryCardSkeleton />
          ) : (
            <SummaryCard
              type={SummaryCardType.NOTIFICATIONS}
              value={query.data?.meta.total ?? 0}
            />
          )}
          <section className="grid grid-cols-2 items-center gap-4 lg:flex lg:flex-wrap">
            <SearchInput
              key={search}
              className="w-full md:w-max"
              noClear
              onSubmit={() => {
                void setPage(1, { history: "push" });
              }}
            />
            <FilterSelect
              options={RECIPIENT_TYPES.map((type) => ({
                key: type,
                label: copy.recipient_types[type],
              }))}
              placeholder={copy.filter_recipient_type}
              className="w-full md:w-max"
              values={recipientType ? [recipientType] : []}
              onValueChange={(values) => {
                void setRecipientType(values[0] || null, { history: "push" });
                void setPage(1, { history: "push" });
              }}
            />
            {(search || recipientType) && (
              <Button
                className="bg-app-primary/10 text-app-link font-medium"
                onPress={() => {
                  void setSearch(null, { history: "push" });
                  void setRecipientType(null, { history: "push" });
                  void setPage(1, { history: "push" });
                }}
              >
                {dict.common.actions.clearFilters}
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
              rowClick={(row) =>
                router.push(`/${lang}/notifications/${row.key}`)
              }
              renderCell={(row: RowType, column: Key): ReactNode => {
                if (column === "content") {
                  return (
                    <p
                      dir="auto"
                      className="text-page-start line-clamp-2 max-w-96 text-sm leading-6 whitespace-normal"
                    >
                      {row.content}
                    </p>
                  );
                }
                // Broadcasts are typed in one language (D-11).
                if (column === "title") {
                  return (
                    <span dir="auto" className="text-page-start block">
                      {row.title}
                    </span>
                  );
                }
                return row[String(column)];
              }}
              pagination={{
                page,
                total: query.data?.meta.totalPages ?? 1,
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
