import { ActionsCell } from "@/components/app/shared/tables/ActionsCell";
import { RowType } from "@/components/app/shared/tables/AppTable";
import Dictionary from "@/config/i18n/types";
import type { ListingListItem } from "@/graphql/listing/types";
import { Key } from "react";
import { AppSwitch } from "../shared/AppSwitch";
export const statusMap = (
  dict: Dictionary,
): {
  [key: string]: string;
} => ({
  ACTIVE: dict.common.statuses.ACTIVE,
  INACTIVE: dict.common.statuses.INACTIVE,
  EXPIRED: dict.common.statuses.EXPIRED,
});

export const renderCell = (
  row: RowType,
  column: Key,
  {
    listing,
    dict,
    action,
  }: {
    listing: ListingListItem;
    dict: Dictionary;
    action: {
      onView: () => void;
      onDelete: () => void;
      onActivate: (value: boolean) => void;
    };
  },
) => {
  if (column === "action") {
    return <ActionsCell onView={action.onView} onDelete={action.onDelete} />;
  } else if (column === "status") {
    // S4-59: an expired ad reads "Expired"; switching it on re-activates it
    // for a fresh free period.
    return (
      <div className="flex w-max items-center gap-2">
        <AppSwitch
          isSelected={row.status === "ACTIVE"}
          onValueChange={(checked) => {
            action.onActivate(checked);
          }}
        />
        {row.status === "EXPIRED" && (
          <span className="rounded-full bg-red-50 px-2 py-0.5 text-xs font-medium text-red-700">
            {statusMap(dict).EXPIRED}
          </span>
        )}
      </div>
    );
  }
  return <p className="w-max">{row[column as string]}</p>;
};
