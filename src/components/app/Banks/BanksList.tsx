import { ActivateBank } from "@/components/app/Banks/manage/ActivateBank";
import { DeactivateBank } from "@/components/app/Banks/manage/DeactivateBank";
import { NoData, NoDataType } from "@/components/app/shared/NoData";
import { useDict } from "@/hooks/useDict";
import { useCanAccess } from "@/hooks/useCanAccess";
import { DateTimeHelpers } from "@/utils/date.time.helpers";
import { usePathname } from "next/navigation";
import { parseAsInteger, useQueryState } from "nuqs";
import { Key, ReactNode } from "react";
import { DeleteWarning, DeleteWarningType } from "../shared/DeleteWarning";
import { AppTable, ColumnType, RowType } from "../shared/tables/AppTable";
import { AppTableSkeleton } from "../shared/tables/AppTableSkeleton";
import { useManageBank } from "./manage/useManageBank";
import { renderCell } from "./renderCell";
import { useBanks } from "./useBanks";
import { useAppRouter } from "@/hooks/useAppRouter";

export const BanksList = () => {
  const dict = useDict();
  const { banks, pagination, isLoading } = useBanks();
  const { deleteBank, busy } = useManageBank();
  const canUpdate = useCanAccess("bank", "update");
  const canDelete = useCanAccess("bank", "delete");
  const [isDeleteWarningOpen, setIsDeleteWarningOpen] = useQueryState(
    "isDeleteWarningOpen",
  );
  const [activateBank, setActivateBank] = useQueryState("activateBank");
  const [deactivateBank, setDeactivateBank] = useQueryState("deactivateBank");

  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));

  const router = useAppRouter();
  const pathname = usePathname();
  const columns: ColumnType[] = [
    {
      key: "nameAr",
      label: dict.banks_page.table_headers.nameAr,
    },
    {
      key: "nameEn",
      label: dict.banks_page.table_headers.nameEn,
    },
    {
      key: "status",
      label: dict.banks_page.table_headers.status,
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
  ) : !banks || banks.length === 0 ? (
    <NoData type={NoDataType.Banks} />
  ) : (
    <>
      <AppTable
        label="Requests"
        columns={columns}
        rows={banks.map((bank) => ({
          key: bank.id,
          nameAr: bank.nameAr,
          nameEn: bank.nameEn,
          status: bank.status,
          date: DateTimeHelpers.formatDate(bank.createdAt),
        }))}
        renderCell={(row: RowType, column: Key): ReactNode =>
          renderCell(row, column, {
            bank: banks.find((bank) => bank.id === row.key)!,
            dict,
            action: {
              onView: () => {
                router.push(`${pathname}/${row.key}`);
              },
              onEdit: canUpdate
                ? () => {
                    router.push(`${pathname}/${row.key}/edit`);
                  }
                : undefined,
              onDelete: canDelete
                ? () => {
                    setIsDeleteWarningOpen(row.key, { history: "push" });
                  }
                : undefined,
              onActivate: canUpdate
                ? (value: boolean) => {
                    if (value) {
                      setActivateBank(row.key, { history: "push" });
                    } else {
                      setDeactivateBank(row.key, { history: "push" });
                    }
                  }
                : undefined,
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
            deleteBank(isDeleteWarningOpen);
          }
        }}
        busy={busy}
        type={DeleteWarningType.BANK}
      />
      <ActivateBank />
      <DeactivateBank />
    </>
  );
};
