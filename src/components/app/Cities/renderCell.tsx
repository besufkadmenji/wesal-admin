import { ActionsCell } from "@/components/app/shared/tables/ActionsCell";
import { RowType } from "@/components/app/shared/tables/AppTable";
import { City } from "@/gql/graphql";
import { Key } from "react";
import { AppSwitch } from "../shared/AppSwitch";

export const renderCell = (
  row: RowType,
  column: Key,
  {
    city,
    action,
  }: {
    city: City;
    action: {
      onView: () => void;
      onEdit: () => void;
      onDelete: () => void;
      onActivate: (value: boolean) => void;
    };
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
  } else if (column === "status") {
    return (
      <AppSwitch
        isSelected={city.status === "ACTIVE"}
        onValueChange={(checked) => {
          action.onActivate(checked);
        }}
      />
    );
  }
  return <p className="w-max">{row[column as string]}</p>;
};
