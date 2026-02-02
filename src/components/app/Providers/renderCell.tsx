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
    onView: () => void;
    onDelete: () => void;
    onActivate: (value: boolean) => void;
  },
) => {
  if (column === "number") {
    return <p className="text-primary font-semibold">{row.number}</p>;
  } else if (column === "action") {
    return (
      <ActionsCell
        onView={action.onView}
        onDelete={row.status === "DELETED" ? undefined : action.onDelete}
      />
    );
  } else if (column === "name") {
    return (
      <div className="grid w-max grid-cols-1 gap-1">
        <p className="text-title text-xs leading-4 tracking-tight dark:text-white">
          {row.name}
        </p>
        <p className="text-subTitle text-xs leading-4 tracking-tight dark:text-white/80">
          {row.description}
        </p>
      </div>
    );
  } else if (column === "sku") {
    return (
      <p className="text-app-primary dark:text-app-primary text-xs leading-8 tracking-tight">
        {row.sku}
      </p>
    );
  } else if (column === "baseline") {
    return (
      <p className="text-xs leading-8 tracking-tight text-[#1A938B] dark:text-[#1A938B]">
        {row.baseline}
      </p>
    );
  } else if (column === "status") {
    console.log("row status:", row.status);
    return (
      <AppSwitch
        isSelected={row.status === "ACTIVE"}
        onValueChange={(checked) => {
          action.onActivate(checked);
        }}
        isDisabled={row.status === "DELETED"}
      />
    );
  }
  return row[column as string];
};
