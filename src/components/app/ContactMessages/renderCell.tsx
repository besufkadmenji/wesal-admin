import { ActionsCell } from "@/components/app/shared/tables/ActionsCell";
import { RowType } from "@/components/app/shared/tables/AppTable";
import Dictionary from "@/config/i18n/types";
import { Button } from "@heroui/react";
import { Key } from "react";
import ReplyIcon from "@/assets/icons/app/reply.svg";

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
  if (column === "action") {
    return (
      <div className="flex gap-2 justify-end">
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
  }
  return row[column as string];
};
