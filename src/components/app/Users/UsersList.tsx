import { NoData, NoDataType } from "@/components/app/shared/NoData";

import { useManageUser } from "@/components/app/Users/Detail/useManageUser";
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
import { ActivateUser } from "./ActivateUser";
import { DeactivateUser } from "./DeactivateUser";
import { renderCell } from "./renderCell";
import { useUsers } from "./useUser";

export const UsersList = () => {
  const dict = useDict();
  const { data, isLoading } = useUsers();
  const { deleteUser, busy } = useManageUser();
  const [isDeleteWarningOpen, setIsDeleteWarningOpen] = useQueryState(
    "isDeleteWarningOpen",
  );
  const [activateUser, setActivateUser] = useQueryState("activateUser");
  const [deactivateUser, setDeactivateUser] = useQueryState("deactivateUser");
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  // const { approveRequest, rejectRequest, busy } = useManageRequest();
  const [showRejectModal, setShowRejectModal] =
    useQueryState("showRejectModal");
  const router = useRouter();
  const pathname = usePathname();
  const columns: ColumnType[] = [
    {
      key: "number",
      label: dict.users_page.table_headers.number,
    },
    {
      key: "name",
      label: dict.users_page.table_headers.name,
    },
    {
      key: "phone",
      label: dict.users_page.table_headers.phone_number,
    },
    {
      key: "email",
      label: dict.users_page.table_headers.email,
    },
    {
      key: "date",
      label: dict.users_page.table_headers.registration_date,
      align: "center",
    },
    {
      key: "status",
      label: dict.users_page.table_headers.status,
      align: "center",
    },
    {
      key: "action",
      label: dict.users_page.table_headers.actions,
      align: "center",
    },
  ];

  return isLoading ? (
    <AppTableSkeleton columns={columns.length} rows={10} />
  ) : !data || data.items.length === 0 ? (
    <NoData type={NoDataType.Users} />
  ) : (
    <>
      <AppTable
        label="Users"
        columns={columns}
        rows={data.items.map((user) => ({
          key: user.id,
          number: `${user.publicId ?? "-"}`,
          name: user.name ?? "-",
          phone: user.phone,
          email: user.email,
          date: DateTimeHelpers.formatDate(user.createdAt),
          status: user.status,
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
                setActivateUser(row.key as string, { history: "push" });
              } else {
                setDeactivateUser(row.key as string, { history: "push" });
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
        disableSelect
      />
      <ActivateUser />
      <DeactivateUser />
    </>
  );
};
