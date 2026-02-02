import { NoData, NoDataType } from "@/components/app/shared/NoData";

import { useManageProvider } from "@/components/app/Providers/Detail/useManageProvider";
import {
  DeleteWarning,
  DeleteWarningType,
} from "@/components/app/shared/DeleteWarning";
import { useDict } from "@/hooks/useDict";
import { DateTimeHelpers } from "@/utils/date.time.helpers";
import { usePathname, useRouter } from "next/navigation";
import { parseAsInteger, useQueryState } from "nuqs";
import { Key, ReactNode } from "react";
import { AppTable, ColumnType, RowType } from "../shared/tables/AppTable";
import { AppTableSkeleton } from "../shared/tables/AppTableSkeleton";
import { ActivateProvider } from "./ActivateProvider";
import { DeactivateProvider } from "./DeactivateProvider";
import { renderCell } from "./renderCell";
import { useProviders } from "./useProvider";

export const ProvidersList = () => {
  const dict = useDict();
  const { data, isLoading } = useProviders();
  const { deleteProvider, busy } = useManageProvider();
  const [isDeleteWarningOpen, setIsDeleteWarningOpen] = useQueryState(
    "isDeleteWarningOpen",
  );
  const [activateProvider, setActivateProvider] =
    useQueryState("activateProvider");
  const [deactivateProvider, setDeactivateProvider] =
    useQueryState("deactivateProvider");
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  // const { approveRequest, rejectRequest, busy } = useManageRequest();
  const [showRejectModal, setShowRejectModal] =
    useQueryState("showRejectModal");
  const router = useRouter();
  const pathname = usePathname();
  const columns: ColumnType[] = [
    {
      key: "number",
      label: dict.providers_page.table_headers.number,
    },
    {
      key: "name",
      label: dict.providers_page.table_headers.name,
    },
    {
      key: "phone",
      label: dict.providers_page.table_headers.phone_number,
    },
    {
      key: "email",
      label: dict.providers_page.table_headers.email,
    },
    {
      key: "date",
      label: dict.providers_page.table_headers.registration_date,
      align: "center",
    },
    {
      key: "status",
      label: dict.providers_page.table_headers.status,
      align: "center",
    },
    {
      key: "action",
      label: dict.providers_page.table_headers.actions,
      align: "center",
    },
  ];

  return isLoading ? (
    <AppTableSkeleton columns={columns.length} rows={10} />
  ) : !data || data.items.length === 0 ? (
    <NoData type={NoDataType.Providers} />
  ) : (
    <>
      <AppTable
        label="Providers"
        columns={columns}
        rows={data.items.map((provider) => ({
          key: provider.id,
          number: `${provider.publicId ?? "-"}`,
          name: provider.name ?? "-",
          phone: provider.phone,
          email: provider.email,
          date: DateTimeHelpers.formatDate(provider.createdAt),
          status: provider.status,
        }))}
        renderCell={(row: RowType, column: Key): ReactNode =>
          renderCell(row, column, dict, {
            onView: () => {
              router.push(`${pathname}/${row.key}`);
            },
            onDelete: () => {
              setIsDeleteWarningOpen(row.key as string, { history: "push" });
            },
            onActivate: (value: boolean) => {
              if (value) {
                setActivateProvider(row.key as string, { history: "push" });
              } else {
                setDeactivateProvider(row.key as string, { history: "push" });
              }
            },
          })
        }
        pagination={{
          page: data.meta.page,
          total: data.meta.totalPages,
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
            deleteProvider(isDeleteWarningOpen);
          }
        }}
        busy={busy}
        type={DeleteWarningType.PROVIDER}
      />
      <ActivateProvider />
      <DeactivateProvider />
    </>
  );
};
