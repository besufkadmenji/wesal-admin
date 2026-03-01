import { NoData, NoDataType } from "@/components/app/shared/NoData";

import { useSignedContracts } from "@/components/app/SignedContracts/useSignedContract";
import { useDict } from "@/hooks/useDict";
import { DateTimeHelpers } from "@/utils/date.time.helpers";
import { usePathname } from "next/navigation";
import { parseAsInteger, useQueryState } from "nuqs";
import { Key, ReactNode } from "react";
import { AppTable, ColumnType, RowType } from "../shared/tables/AppTable";
import { AppTableSkeleton } from "../shared/tables/AppTableSkeleton";
import { renderCell } from "./renderCell";
import { useAppRouter } from "@/hooks/useAppRouter";

export const SignedContractsList = () => {
  const dict = useDict();
  const { data, isLoading } = useSignedContracts();
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const router = useAppRouter();
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
      rows={data.items.map((signedContract) => ({
        key: signedContract.id,
        number: `${signedContract.publicId ?? "-"}`,
        name: signedContract.provider?.name ?? "-",
        phone: signedContract.provider?.phone ?? "-",
        email: signedContract.provider?.email ?? "-",
        date: DateTimeHelpers.formatDate(signedContract.createdAt),
        status: signedContract.status || "",
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
