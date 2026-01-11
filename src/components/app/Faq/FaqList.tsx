import { NoData, NoDataType } from "@/components/app/shared/NoData";

import { useManageUser } from "@/components/app/Users/Detail/useManageUser";
import {
  DeleteWarning,
  DeleteWarningType,
} from "@/components/app/shared/DeleteWarning";
import { useDict } from "@/hooks/useDict";
import { DateTimeHelpers } from "@/utils/date.time.helpers";
import { usePathname, useRouter } from "next/navigation";
import { useQueryState } from "nuqs";
import { Key, ReactNode } from "react";
import { AppTable, ColumnType, RowType } from "../shared/tables/AppTable";
import { AppTableSkeleton } from "../shared/tables/AppTableSkeleton";
import { renderCell } from "./renderCell";
import { useFaqs } from "./useFaq";
import { useManageFaq } from "./manage/useManageFaq";

export const FaqList = () => {
  const dict = useDict();
  const { data, isLoading } = useFaqs();
  const { deleteFaq, busy } = useManageFaq();
  const [isDeleteWarningOpen, setIsDeleteWarningOpen] = useQueryState(
    "isDeleteWarningOpen",
  );
  const router = useRouter();
  const pathname = usePathname();
  const { updateFaqStatus } = useManageFaq();
  const columns: ColumnType[] = [
    {
      key: "questionEn",
      label: dict.faq_page.table_headers.questionEn,
    },
    {
      key: "questionAr",
      label: dict.faq_page.table_headers.questionAr,
    },
    {
      key: "answerEn",
      label: dict.faq_page.table_headers.answerEn,
    },
    {
      key: "answerAr",
      label: dict.faq_page.table_headers.answerAr,
    },
    {
      key: "date",
      label: dict.faq_page.table_headers.createdAt,
      align: "center",
    },
    {
      key: "status",
      label: dict.faq_page.table_headers.status,
      align: "center",
    },
    {
      key: "action",
      label: dict.faq_page.table_headers.actions,
      align: "end",
    },
  ];

  return isLoading ? (
    <AppTableSkeleton columns={columns.length} rows={10} />
  ) : !data || data.length === 0 ? (
    <NoData type={NoDataType.Faqs} />
  ) : (
    <>
      <AppTable
        label="Faqs"
        columns={columns}
        rows={data.map((faq) => ({
          key: faq.id,
          questionEn: faq.questionEn ?? "-",
          questionAr: faq.questionAr,
          answerEn: faq.answerEn,
          answerAr: faq.answerAr,
          date: DateTimeHelpers.formatDate(faq.createdAt),
          status: faq.isActive ? "ACTIVE" : "INACTIVE",
        }))}
        renderCell={(row: RowType, column: Key): ReactNode =>
          renderCell(row, column, dict, {
            onEdit: () => {
              router.push(`${pathname}/${row.key}/edit`);
            },
            onDelete: () => {
              setIsDeleteWarningOpen(row.key as string, { history: "push" });
            },
            onChangeStatus: (value: boolean) => {
              updateFaqStatus(row.key as string, value);
            },
          })
        }
      />
      <DeleteWarning
        isOpen={!!isDeleteWarningOpen}
        onClose={() => setIsDeleteWarningOpen(null)}
        onConfirm={() => {
          if (isDeleteWarningOpen) {
            deleteFaq(isDeleteWarningOpen);
          }
        }}
        busy={busy}
        type={DeleteWarningType.FAQ}
      />
    </>
  );
};
