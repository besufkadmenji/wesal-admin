import { NoData, NoDataType } from "@/components/app/shared/NoData";

import { useDict } from "@/hooks/useDict";
import { DateTimeHelpers } from "@/utils/date.time.helpers";
import { usePathname, useRouter } from "next/navigation";
import { parseAsInteger, useQueryState } from "nuqs";
import { Key, ReactNode } from "react";
import { AppTable, ColumnType, RowType } from "../shared/tables/AppTable";
import { AppTableSkeleton } from "../shared/tables/AppTableSkeleton";
import { renderCell } from "./renderCell";
import { useUsers } from "./useUser";

export const SignedContractsList = () => {
  const dict = useDict();
  const { data, isLoading } = useUsers();
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const router = useRouter();
  const pathname = usePathname();
  const columns: ColumnType[] = [
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
      key: "type",
      label: dict.users_page.table_headers.type,
      align: "center",
    },
    {
      key: "date",
      label: dict.users_page.table_headers.registration_date,
      align: "center",
    },
    {
      key: "status",
      label: dict.users_page.table_headers.contactStatus,
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
    <AppTable
      label="Users"
      columns={columns}
      rows={data.items.map((user) => ({
        key: user.id,
        name: user.name ?? "-",
        phone: user.phone,
        email: user.email,
        type: user.role,
        date: DateTimeHelpers.formatDate(user.createdAt),
        status: user.signedContract?.status || "",
      }))}
      renderCell={(row: RowType, column: Key): ReactNode =>
        renderCell(row, column, dict, {
          onView: () => {
            router.push(`${pathname}/${row.key}`);
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
  );
};
