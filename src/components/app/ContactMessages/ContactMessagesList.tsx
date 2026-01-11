import { NoData, NoDataType } from "@/components/app/shared/NoData";

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
import { useContactMessages } from "./useContactMessage";
import { useManageContactMessage } from "./useManageContactMessage";

export const ContactMessagesList = () => {
  const dict = useDict();
  const { data, isLoading } = useContactMessages();
  const { deleteContactMessage, busy } = useManageContactMessage();
  const [isDeleteWarningOpen, setIsDeleteWarningOpen] = useQueryState(
    "isDeleteWarningOpen",
  );
  const router = useRouter();
  const pathname = usePathname();
  const columns: ColumnType[] = [
    {
      key: "name",
      label: dict.contact_message_page.table_headers.name,
    },
    {
      key: "email",
      label: dict.contact_message_page.table_headers.email,
    },
    {
      key: "phone",
      label: dict.contact_message_page.table_headers.phone,
    },
    {
      key: "messageType",
      label: dict.contact_message_page.table_headers.messageType,
    },
    {
      key: "messageContent",
      label: dict.contact_message_page.table_headers.messageContent,
    },
    {
      key: "date",
      label: dict.contact_message_page.table_headers.createdAt,
      align: "center",
    },
    {
      key: "status",
      label: dict.contact_message_page.table_headers.status,
      align: "center",
    },
    {
      key: "action",
      label: dict.contact_message_page.table_headers.actions,
      align: "end",
    },
  ];

  return isLoading ? (
    <AppTableSkeleton columns={columns.length} rows={10} />
  ) : !data || data.items.length === 0 ? (
    <NoData type={NoDataType.ContactMessages} />
  ) : (
    <>
      <AppTable
        label="Contact Messages"
        columns={columns}
        rows={data.items.map((contactMessage) => ({
          key: contactMessage.id,
          name: contactMessage.name ?? "-",
          email: contactMessage.email,
          phone: `${contactMessage.dialCode}${contactMessage.phone}`,
          messageType: contactMessage.messageType,
          messageContent: contactMessage.messageContent,
          date: DateTimeHelpers.formatDate(contactMessage.createdAt),
          status: contactMessage.isRead
            ? dict.contact_message_page.status.read
            : dict.contact_message_page.status.unread,
        }))}
        renderCell={(row: RowType, column: Key): ReactNode =>
          renderCell(row, column, dict, {
            onView: () => {
              router.push(`${pathname}/${row.key}`);
            },
            onDelete: () => {
              setIsDeleteWarningOpen(row.key as string, { history: "push" });
            },
            onChangeStatus: (value: boolean) => {
              // updateContactMessageStatus(row.key as string, value);
            },
          })
        }
      />
      <DeleteWarning
        isOpen={!!isDeleteWarningOpen}
        onClose={() => setIsDeleteWarningOpen(null)}
        onConfirm={() => {
          if (isDeleteWarningOpen) {
            deleteContactMessage(isDeleteWarningOpen);
          }
        }}
        busy={busy}
        type={DeleteWarningType.CONTACT_MESSAGE}
      />
    </>
  );
};
