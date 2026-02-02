import { AppSwitch } from "@/components/app/shared/AppSwitch";
import { ActionsCell } from "@/components/app/shared/tables/ActionsCell";
import { RowType } from "@/components/app/shared/tables/AppTable";
import Dictionary from "@/config/i18n/types";
import { Key } from "react";

export const renderCell = (
  row: RowType,
  column: Key,
  dict: Dictionary,
  action: {
    onEdit: () => void;
    onDelete: () => void;
    onChangeStatus: (value: boolean) => void;
  },
) => {
  if (column === "action") {
    return <ActionsCell onEdit={action.onEdit} onDelete={action.onDelete} />;
  } else if (column === "status") {
    console.log("row status:", row.status);
    return (
      <AppSwitch
        isSelected={row.status === "ACTIVE"}
        onValueChange={(checked) => {
          action.onChangeStatus(checked);
        }}
      />
    );
  }
  return row[column as string];
};
