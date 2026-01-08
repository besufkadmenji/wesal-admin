import { NoData, NoDataType } from "@/components/app/shared/NoData";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import { DateTimeHelpers } from "@/utils/date.time.helpers";
import { usePathname, useRouter } from "next/navigation";
import { parseAsInteger, useQueryState } from "nuqs";
import { Key, ReactNode } from "react";
import { DeleteWarning, DeleteWarningType } from "../shared/DeleteWarning";
import { AppTable, ColumnType, RowType } from "../shared/tables/AppTable";
import { AppTableSkeleton } from "../shared/tables/AppTableSkeleton";
import { useManageCity } from "./manage/useManageCity";
import { renderCell } from "./renderCell";
import { useCities } from "./useCities";

export const CitiesList = () => {
  const dict = useDict();
  const { cities, pagination, isLoading } = useCities();
  const { deleteCity, busy } = useManageCity();
  const [isDeleteWarningOpen, setIsDeleteWarningOpen] = useQueryState(
    "isDeleteWarningOpen",
  );
  const [activateCity, setActivateCity] = useQueryState("activateCity");
  const [deactivateCity, setDeactivateCity] = useQueryState("deactivateCity");

  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const lng = useLang();
  const router = useRouter();
  const pathname = usePathname();
  const columns: ColumnType[] = [
    {
      key: "nameAr",
      label: dict.cities_page.table_headers.nameAr,
    },
    {
      key: "nameEn",
      label: dict.cities_page.table_headers.nameEn,
    },
    {
      key: "country",
      label: dict.cities_page.table_headers.country,
    },
    {
      key: "date",
      label: dict.cities_page.table_headers.created_date,
    },
    {
      key: "action",
      label: dict.cities_page.table_headers.actions,
    },
  ];

  return isLoading ? (
    <AppTableSkeleton columns={columns.length} rows={10} />
  ) : !cities || cities.length === 0 ? (
    <NoData type={NoDataType.Cities} />
  ) : (
    <>
      <AppTable
        label="Requests"
        columns={columns}
        rows={cities.map((city) => ({
          key: city.id,
          nameAr: city.nameAr,
          nameEn: city.nameEn,
          country: lng === "ar" ? city.country!.nameAr : city.country!.nameEn,
          date: DateTimeHelpers.formatDate(city.createdAt),
        }))}
        renderCell={(row: RowType, column: Key): ReactNode =>
          renderCell(row, column, {
            onView: () => {
              router.push(`${pathname}/${row.key}`);
            },
            onEdit: () => {
              router.push(`${pathname}/${row.key}/edit`);
            },
            onDelete: () => {
              setIsDeleteWarningOpen(row.key, { history: "push" });
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
            deleteCity(isDeleteWarningOpen);
          }
        }}
        busy={busy}
        type={DeleteWarningType.CITY}
      />
    </>
  );
};
