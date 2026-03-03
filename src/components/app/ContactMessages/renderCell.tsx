import { ActionsCell } from "@/components/app/shared/tables/ActionsCell";
import { RowType } from "@/components/app/shared/tables/AppTable";
import Dictionary from "@/config/i18n/types";
import { Button } from "@heroui/react";
import { Key } from "react";
import ReplyIcon from "@/assets/icons/app/reply.svg";
import { ContactMessageStatus, MessageType, SenderType } from "@/gql/graphql";
import { twMerge } from "tailwind-merge";

export const renderCell = (
  row: RowType,
  column: Key,
  dict: Dictionary,
  action: {
    onView: () => void;
    onDelete: () => void;
    onReply: () => void;
  },
) => {
  const statusMap = {
    [ContactMessageStatus.Read]: dict.contact_message_page.status.read,
    [ContactMessageStatus.Sent]: dict.contact_message_page.status.unread,
    [ContactMessageStatus.Replied]: dict.contact_message_page.status.replied,
  };
  const senderMap = {
    [SenderType.Guest]: dict.contact_message_page.sender_types.guest,
    [SenderType.User]: dict.contact_message_page.sender_types.user,
    [SenderType.Provider]: dict.contact_message_page.sender_types.provider,
  };
  const messageTypeMap = {
    [MessageType.Request]: dict.contact_message_page.message_types.REQUEST,
    [MessageType.Inquiry]: dict.contact_message_page.message_types.INQUIRY,
    [MessageType.Complaint]: dict.contact_message_page.message_types.COMPLAINT,
    [MessageType.Suggestion]:
      dict.contact_message_page.message_types.SUGGESTION,
    [MessageType.Other]: dict.contact_message_page.message_types.OTHER,
  };
  if (column === "action") {
    return (
      <div className="flex justify-end gap-2">
        {row.reply === "" && (
          <Button
            size="sm"
            className="bg-primary text-white"
            onPress={action.onReply}
          >
            <ReplyIcon className="size-4 shrink-0" />
            {dict.contact_messages_page.buttons.send_reply}
          </Button>
        )}
        <ActionsCell onView={action.onView} onDelete={action.onDelete} />
      </div>
    );
  } else if (column === "name") {
    return <p className="w-20">{row.name}</p>;
  } else if (column === "status") {
    return (
      <div
        className={twMerge(
          "rounded-xl px-2 py-1 text-sm font-medium",
          row.status === ContactMessageStatus.Read &&
            "bg-green-50 text-green-600",
          row.status === ContactMessageStatus.Sent &&
            "bg-yellow-50 text-yellow-600",
          row.status === ContactMessageStatus.Replied &&
            "bg-purple-50 text-purple-600",
        )}
      >
        {statusMap[row.status as ContactMessageStatus]}
      </div>
    );
  } else if (column === "senderType") {
    return (
      <div
        className={twMerge(
          "justify-self-start rounded-xl px-2 py-1 text-sm font-medium",
          row.senderType === SenderType.Guest && "bg-teal-50 text-teal-600",
          row.senderType === SenderType.User && "bg-orange-50 text-orange-600",
          row.senderType === SenderType.Provider &&
            "bg-indigo-50 text-indigo-600",
        )}
      >
        {senderMap[row.senderType as SenderType]}
      </div>
    );
  } else if (column === "messageType") {
    return (
      <div
        className={twMerge(
          "justify-self-start rounded-xl px-2 py-1 text-sm font-medium",
          row.messageType === MessageType.Request && "bg-teal-50 text-teal-600",
          row.messageType === MessageType.Inquiry &&
            "bg-orange-50 text-orange-600",
          row.messageType === MessageType.Complaint &&
            "bg-indigo-50 text-indigo-600",
          row.messageType === MessageType.Suggestion &&
            "bg-purple-50 text-purple-600",
          row.messageType === MessageType.Other && "bg-gray-50 text-gray-600",
        )}
      >
        {messageTypeMap[row.messageType as MessageType]}
      </div>
    );
  }
  return <p className="line-clamp-2 text-ellipsis">{row[column as string]}</p>;
};
