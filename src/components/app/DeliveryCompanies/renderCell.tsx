import { ActionsCell } from "@/components/app/shared/tables/ActionsCell";
import { RowType } from "@/components/app/shared/tables/AppTable";
import Dictionary from "@/config/i18n/types";
import { DeliveryCompany, DeliveryCompanyStatus } from "@/gql/graphql";
import { Key } from "react";
import { AppSwitch } from "../shared/AppSwitch";
export const statusMap = (
  dict: Dictionary,
): {
  [key: string]: string;
} => ({
  ACTIVE: dict.common.statuses.ACTIVE,
  INACTIVE: dict.common.statuses.INACTIVE,
});

export const renderCell = (
  row: RowType,
  column: Key,
  {
    deliveryCompany,
    dict,
    action,
  }: {
    deliveryCompany: DeliveryCompany;
    dict: Dictionary;
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
    console.log("row status:", row.status);
    return (
      <AppSwitch
        isSelected={row.status === DeliveryCompanyStatus.Active}
        onValueChange={(checked) => {
          action.onActivate(checked);
        }}
      />
    );
  }
  return <p className="w-max">{row[column as string]}</p>;
};
