import { ActivateAdmin } from "@/components/app/Admins/manage/ActivateAdmin";
import { DeactivateAdmin } from "@/components/app/Admins/manage/DeactivateAdmin";
import { roleMap } from "@/components/app/Admins/renderCell";
import { NoData, NoDataType } from "@/components/app/shared/NoData";
import { useDict } from "@/hooks/useDict";
import { DateTimeHelpers } from "@/utils/date.time.helpers";
import { usePathname, useRouter } from "next/navigation";
import { parseAsInteger, useQueryState } from "nuqs";
import { Key, ReactNode } from "react";
import { DeleteWarning, DeleteWarningType } from "../shared/DeleteWarning";
import { AppTable, ColumnType, RowType } from "../shared/tables/AppTable";
import { AppTableSkeleton } from "../shared/tables/AppTableSkeleton";
import { useManageAdmin } from "./manage/useManageAdmin";
import { renderCell } from "./renderCell";
import { useUsers } from "./useAdmins";
import { Admin } from "@/gql/graphql";

export const AdminsList = () => {
  const dict = useDict();
  const { admins, pagination, isLoading } = useUsers();
  const { deleteAdmin, busy } = useManageAdmin();
  const [isDeleteWarningOpen, setIsDeleteWarningOpen] = useQueryState(
    "isDeleteWarningOpen",
  );
  const [activateAdmin, setActivateAdmin] = useQueryState("activateAdmin");
  const [deactivateAdmin, setDeactivateAdmin] =
    useQueryState("deactivateAdmin");

  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));

  const router = useRouter();
  const pathname = usePathname();
  const columns: ColumnType[] = [
    {
      key: "name",
      label: dict.system_managers_page.table_headers.name,
    },
    {
      key: "phone",
      label: dict.system_managers_page.table_headers.phone_number,
    },
    {
      key: "email",
      label: dict.system_managers_page.table_headers.email,
    },
    {
      key: "role",
      label: dict.system_managers_page.table_headers.role,
    },
    {
      key: "status",
      label: dict.system_managers_page.table_headers.status,
    },
    {
      key: "date",
      label: dict.system_managers_page.table_headers.created_date,
    },
    {
      key: "action",
      label: dict.system_managers_page.table_headers.actions,
    },
  ];

  return isLoading ? (
    <AppTableSkeleton columns={columns.length} rows={10} />
  ) : !admins || admins.length === 0 ? (
    <NoData type={NoDataType.Admins} />
  ) : (
    <>
      <AppTable
        label="Requests"
        columns={columns}
        rows={admins.map((admin) => ({
          key: admin.id,
          name: admin.fullName,
          phone: admin.phoneNumber,
          email: admin.email,
          role: roleMap(dict)[admin.permissionType],
          status: admin.status,
          date: DateTimeHelpers.formatDate(admin.createdAt),
        }))}
        renderCell={(row: RowType, column: Key): ReactNode =>
          renderCell(row, column, {
            admin: admins.find((admin) => admin.id === row.key)!,
            dict,
            action: {
              onView: () => {
                router.push(`${pathname}/${row.key}`);
              },
              onEdit: () => {
                router.push(`${pathname}/${row.key}/edit`);
              },
              onDelete: () => {
                setIsDeleteWarningOpen(row.key, { history: "push" });
              },
              onActivate: (value: boolean) => {
                if (value) {
                  setActivateAdmin(row.key, { history: "push" });
                } else {
                  setDeactivateAdmin(row.key, { history: "push" });
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
            deleteAdmin(isDeleteWarningOpen);
          }
        }}
        busy={busy}
        type={DeleteWarningType.ADMIN}
      />
      <ActivateAdmin />
      <DeactivateAdmin />
    </>
  );
};
