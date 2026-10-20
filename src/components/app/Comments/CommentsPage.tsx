"use client";

import { PermissionGate } from "@/components/app/admin-lifecycle/PermissionGate";
import { CommentStars } from "@/components/app/Comments/CommentStars";
import { CommentStatusBadge } from "@/components/app/Comments/CommentStatusBadge";
import {
  CommentStatusModal,
  PendingStatusChange,
} from "@/components/app/Comments/CommentStatusModal";
import {
  COMMENTS_PAGE_SIZE,
  useComments,
} from "@/components/app/Comments/useComments";
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
import { RatingStatus } from "@/gql/graphql";
import { useCanAccess } from "@/hooks/useCanAccess";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import { Button } from "@heroui/react";
import { parseAsInteger, useQueryState } from "nuqs";
import { Key, ReactNode, useState } from "react";

const COLUMN_KEYS = [
  "index",
  "customer",
  "mobile",
  "status",
  "contract",
  "listing",
  "provider",
  "rating",
  "comment",
  "date",
  "action",
] as const;

/** Comments management (BRD 4.3.19): review, publish and hide ratings. */
export const CommentsPage = () => {
  const dict = useDict();
  const lang = useLang();
  const canRead = useCanAccess("rating", "read");
  const canUpdate = useCanAccess("rating", "update");
  const { query, page, search, status, setStatus } = useComments(canRead);
  const [, setSearch] = useQueryState("search", { defaultValue: "" });
  const [, setStatusFilter] = useQueryState("status", { defaultValue: "" });
  const [, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [pending, setPending] = useState<PendingStatusChange | null>(null);
  const copy = dict.comments_page;

  const columns: ColumnType[] = COLUMN_KEYS.filter(
    (key) => key !== "action" || canUpdate,
  ).map((key) => ({
    key,
    label: copy.columns[key],
    align: key === "action" ? "center" : undefined,
  }));
  const items = query.data?.items ?? [];
  const rows: RowType[] = items.map((item, index) => ({
    key: item.id,
    index: `${(page - 1) * COMMENTS_PAGE_SIZE + index + 1}`,
    customer: item.user?.name ?? "—",
    mobile: item.user?.phone ?? "—",
    status: item.status,
    contract: item.contract?.publicId ? `#${item.contract.publicId}` : "—",
    listing: item.listing?.name ?? "—",
    provider: item.provider?.commercialName ?? "—",
    rating: `${item.rating}`,
    comment: item.comment ?? "—",
    date: new Date(item.createdAt as string).toLocaleDateString(
      lang === "ar" ? "ar-SA" : "en-SA",
    ),
  }));

  return (
    <PermissionGate resource="rating">
      <PageWrapper>
        <PageBar title={dict.navigation.comments} />
        <div className="grid grid-cols-1 gap-5 py-8">
          {query.isLoading ? (
            <SummaryCardSkeleton />
          ) : (
            <SummaryCard
              type={SummaryCardType.MESSAGES}
              value={query.data?.meta.total ?? 0}
              title={copy.summary.title}
              subTitle={copy.summary.subTitle}
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
              options={[RatingStatus.Published, RatingStatus.Hidden].map(
                (value) => ({ key: value, label: copy.status[value] }),
              )}
              placeholder={copy.columns.status}
              className="w-full md:w-max"
              values={status ? [status] : []}
              onValueChange={(values) => {
                void setStatusFilter(values[0] || null, { history: "push" });
                void setPage(1, { history: "push" });
              }}
            />
            {(search || status) && (
              <Button
                className="bg-app-primary/10 text-app-link font-medium"
                onPress={() => {
                  void setSearch(null, { history: "push" });
                  void setStatusFilter(null, { history: "push" });
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
              label={dict.navigation.comments}
              columns={columns}
              rows={rows}
              renderCell={(row: RowType, column: Key): ReactNode => {
                if (column === "status") {
                  return (
                    <CommentStatusBadge status={row.status as RatingStatus} />
                  );
                }
                if (column === "mobile") {
                  return <span dir="ltr">{row.mobile}</span>;
                }
                if (column === "rating") {
                  return <CommentStars rating={Number(row.rating)} />;
                }
                if (column === "comment") {
                  return (
                    <p className="max-w-72 text-sm leading-6 whitespace-normal">
                      {row.comment}
                    </p>
                  );
                }
                if (column === "action") {
                  const hidden = row.status === RatingStatus.Hidden;
                  return (
                    <Button
                      size="sm"
                      className={
                        hidden
                          ? "bg-app-primary font-medium text-white"
                          : "bg-red-50 font-medium text-red-600"
                      }
                      onPress={() =>
                        setPending({
                          id: String(row.key),
                          status: hidden
                            ? RatingStatus.Published
                            : RatingStatus.Hidden,
                        })
                      }
                    >
                      {hidden ? copy.actions.publish : copy.actions.hide}
                    </Button>
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
        <CommentStatusModal
          pending={pending}
          busy={setStatus.isPending}
          onCancel={() => setPending(null)}
          onConfirm={(change) =>
            setStatus.mutate(change, { onSettled: () => setPending(null) })
          }
        />
      </PageWrapper>
    </PermissionGate>
  );
};
