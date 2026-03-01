import { NoData, NoDataType } from "@/components/app/shared/NoData";
import { useDict } from "@/hooks/useDict";
import { DateTimeHelpers } from "@/utils/date.time.helpers";
import { usePathname } from "next/navigation";
import { parseAsInteger, useQueryState } from "nuqs";
import { Key, ReactNode } from "react";
import { DeleteWarning, DeleteWarningType } from "../shared/DeleteWarning";
import { AppTable, ColumnType, RowType } from "../shared/tables/AppTable";
import { AppTableSkeleton } from "../shared/tables/AppTableSkeleton";
import { ActivateDeliveryCompany } from "./manage/ActivateDeliveryCompany";
import { DeactivateDeliveryCompany } from "./manage/DeactivateDeliveryCompany";
import { useManageDeliveryCompany } from "./manage/useManageDeliveryCompany";
import { renderCell } from "./renderCell";
import { useDeliveryCompanies } from "./useDeliveryCompanies";
import { useAppRouter } from "@/hooks/useAppRouter";

export const DeliveryCompaniesList = () => {
  const dict = useDict();
  const { deliveryCompanies, pagination, isLoading } = useDeliveryCompanies();
  const { deleteDeliveryCompany, busy } = useManageDeliveryCompany();
  const [isDeleteWarningOpen, setIsDeleteWarningOpen] = useQueryState(
    "isDeleteWarningOpen",
  );
  const [activateDeliveryCompany, setActivateDeliveryCompany] = useQueryState(
    "activateDeliveryCompany",
  );
  const [deactivateDeliveryCompany, setDeactivateDeliveryCompany] =
    useQueryState("deactivateDeliveryCompany");
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));

  const router = useAppRouter();
  const pathname = usePathname();
  const columns: ColumnType[] = [
    {
      key: "nameAr",
      label: dict.delivery_companies_page.table_headers.nameAr,
    },
    {
      key: "nameEn",
      label: dict.delivery_companies_page.table_headers.nameEn,
    },
    {
      key: "status",
      label: dict.delivery_companies_page.table_headers.status,
    },
    {
      key: "date",
      label: dict.delivery_companies_page.table_headers.created_date,
    },
    {
      key: "action",
      label: dict.delivery_companies_page.table_headers.actions,
    },
  ];

  return isLoading ? (
    <AppTableSkeleton columns={columns.length} rows={10} />
  ) : !deliveryCompanies || deliveryCompanies.length === 0 ? (
    <NoData type={NoDataType.DeliveryCompanies} />
  ) : (
    <>
      <AppTable
        label="Requests"
        columns={columns}
        rows={deliveryCompanies.map((deliveryCompany) => ({
          key: deliveryCompany.id,
          nameAr: deliveryCompany.nameAr,
          nameEn: deliveryCompany.nameEn,
          status: deliveryCompany.status,
          date: DateTimeHelpers.formatDate(deliveryCompany.createdAt),
        }))}
        renderCell={(row: RowType, column: Key): ReactNode =>
          renderCell(row, column, {
            deliveryCompany: deliveryCompanies.find(
              (deliveryCompany) => deliveryCompany.id === row.key,
            )!,
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
                console.log("onActivate called with value:", value);
                if (value) {
                  setActivateDeliveryCompany(row.key, { history: "push" });
                } else {
                  setDeactivateDeliveryCompany(row.key, { history: "push" });
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
            deleteDeliveryCompany(isDeleteWarningOpen);
          }
        }}
        busy={busy}
        type={DeleteWarningType.DELIVERY_COMPANY}
      />
      <ActivateDeliveryCompany />
      <DeactivateDeliveryCompany />
    </>
  );
};
