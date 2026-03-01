import { ActivateListing } from "@/components/app/Listings/manage/ActivateListing";
import { DeactivateListing } from "@/components/app/Listings/manage/DeactivateListing";
import { NoData, NoDataType } from "@/components/app/shared/NoData";
import { useDict } from "@/hooks/useDict";
import { DateTimeHelpers } from "@/utils/date.time.helpers";
import { usePathname } from "next/navigation";
import { parseAsInteger, useQueryState } from "nuqs";
import { Key, ReactNode } from "react";
import { DeleteWarning, DeleteWarningType } from "../shared/DeleteWarning";
import { AppTable, ColumnType, RowType } from "../shared/tables/AppTable";
import { AppTableSkeleton } from "../shared/tables/AppTableSkeleton";
import { useManageListing } from "./manage/useManageListing";
import { renderCell } from "./renderCell";
import { useListings } from "./useListings";
import { useAppRouter } from "@/hooks/useAppRouter";

export const ListingsList = () => {
  const dict = useDict();
  const { listings, pagination, isLoading } = useListings();
  const { deleteListing, busy } = useManageListing();
  const [isDeleteWarningOpen, setIsDeleteWarningOpen] = useQueryState(
    "isDeleteWarningOpen",
  );
  const [activateListing, setActivateListing] =
    useQueryState("activateListing");
  const [deactivateListing, setDeactivateListing] =
    useQueryState("deactivateListing");

  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));

  const router = useAppRouter();
  const pathname = usePathname();
  const columns: ColumnType[] = [
    {
      key: "provider",
      label: dict.listings_page.table_headers.service_provider,
    },
    {
      key: "name",
      label: dict.listings_page.table_headers.name,
    },
    {
      key: "type",
      label: dict.listings_page.table_headers.type,
    },
    {
      key: "status",
      label: dict.listings_page.table_headers.status,
    },
    {
      key: "date",
      label: dict.listings_page.table_headers.created_date,
    },
    {
      key: "action",
      label: dict.listings_page.table_headers.actions,
    },
  ];

  return isLoading ? (
    <AppTableSkeleton columns={columns.length} rows={10} />
  ) : !listings || listings.length === 0 ? (
    <NoData type={NoDataType.Listings} />
  ) : (
    <>
      <AppTable
        label="Requests"
        columns={columns}
        rows={listings.map((listing) => ({
          key: listing.id,
          provider: listing.provider?.name ?? "-",
          name: listing.name,
          type: listing.type,
          status: listing.status,
          date: DateTimeHelpers.formatDate(listing.createdAt),
        }))}
        renderCell={(row: RowType, column: Key): ReactNode =>
          renderCell(row, column, {
            listing: listings.find((listing) => listing.id === row.key)!,
            dict,
            action: {
              onView: () => {
                router.push(`${pathname}/${row.key}`);
              },
              onDelete: () => {
                setIsDeleteWarningOpen(row.key, { history: "push" });
              },
              onActivate: (value: boolean) => {
                if (value) {
                  setActivateListing(row.key, { history: "push" });
                } else {
                  setDeactivateListing(row.key, { history: "push" });
                }
              },
            },
          })
        }
        pagination={{
          page: pagination?.page ?? 0,
          total: pagination?.totalPages ?? 0,
          onChange: (p) => {
            setPage(p, { history: "push" });
          },
        }}
      />
      <DeleteWarning
        isOpen={!!isDeleteWarningOpen}
        onClose={() => setIsDeleteWarningOpen(null)}
        onConfirm={() => {
          if (isDeleteWarningOpen) {
            deleteListing(isDeleteWarningOpen);
          }
        }}
        busy={busy}
        type={DeleteWarningType.LISTING}
      />
      <ActivateListing />
      <DeactivateListing />
    </>
  );
};
