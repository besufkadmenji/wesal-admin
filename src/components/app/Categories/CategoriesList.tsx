import { ActivateCategory } from "@/components/app/Categories/manage/ActivateCategory";
import { DeactivateCategory } from "@/components/app/Categories/manage/DeactivateCategory";
import { NoData, NoDataType } from "@/components/app/shared/NoData";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import { DateTimeHelpers } from "@/utils/date.time.helpers";
import { usePathname } from "next/navigation";
import { parseAsInteger, useQueryState } from "nuqs";
import { Key, ReactNode } from "react";
import { DeleteWarning, DeleteWarningType } from "../shared/DeleteWarning";
import { AppTable, ColumnType, RowType } from "../shared/tables/AppTable";
import { AppTableSkeleton } from "../shared/tables/AppTableSkeleton";
import { useManageCategory } from "./manage/useManageCategory";
import { renderCell } from "./renderCell";
import { useCategories } from "./useCategories";
import { useAppRouter } from "@/hooks/useAppRouter";

export const CategoriesList = () => {
  const dict = useDict();
  const { categories, pagination, isLoading } = useCategories();
  const { deleteCategory, busy } = useManageCategory();
  const [isDeleteWarningOpen, setIsDeleteWarningOpen] = useQueryState(
    "isDeleteWarningOpen",
  );
  const [activateCategory, setActivateCategory] =
    useQueryState("activateCategory");
  const [deactivateCategory, setDeactivateCategory] =
    useQueryState("deactivateCategory");

  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const lng = useLang();
  const router = useAppRouter();
  const pathname = usePathname();
  const columns: ColumnType[] = [
    {
      key: "id",
      label: dict.categories_page.table_headers.id,
    },
    {
      key: "image",
      label: dict.categories_page.table_headers.image,
    },
    {
      key: "nameAr",
      label: dict.categories_page.table_headers.nameAr,
    },
    {
      key: "nameEn",
      label: dict.categories_page.table_headers.nameEn,
    },
    {
      key: "status",
      label: dict.categories_page.table_headers.status,
    },
    {
      key: "date",
      label: dict.categories_page.table_headers.created_date,
    },
    {
      key: "action",
      label: dict.categories_page.table_headers.actions,
    },
  ];

  return isLoading ? (
    <AppTableSkeleton columns={columns.length} rows={10} />
  ) : !categories || categories.length === 0 ? (
    <NoData type={NoDataType.Categories} />
  ) : (
    <>
      <AppTable
        label="Requests"
        columns={columns}
        rows={categories.map((category) => ({
          key: category.id,
          id: `${category.publicId || "-"}`,
          image: category.image,
          nameAr: category.nameAr,
          nameEn: category.nameEn,
          status: category.status,
          descriptionAr: category.descriptionAr,
          descriptionEn: category.descriptionEn,
          date: DateTimeHelpers.formatDate(category.createdAt),
        }))}
        renderCell={(row: RowType, column: Key): ReactNode =>
          renderCell(row, column, {
            category: categories.find((cat) => cat.id === row.key)!,
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
                  setActivateCategory(row.key, { history: "push" });
                } else {
                  setDeactivateCategory(row.key, { history: "push" });
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
            deleteCategory(isDeleteWarningOpen);
          }
        }}
        busy={busy}
        type={DeleteWarningType.CATEGORY}
      />
      <ActivateCategory />
      <DeactivateCategory />
    </>
  );
};
