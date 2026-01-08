import { ActionsCell } from "@/components/app/shared/tables/ActionsCell";
import { RowType } from "@/components/app/shared/tables/AppTable";
import { Key } from "react";

export const renderCell = (
  row: RowType,
  column: Key,
  action: {
    onView: () => void;
    onEdit: () => void;
    onDelete: () => void;
  },
) => {
  if (column === "action") {
    return (
      <ActionsCell
        onView={action.onView}
        onEdit={action.onEdit}
        onDelete={action.onDelete}
      />
    );
  }
  return <p className="w-max">{row[column as string]}</p>;
};
