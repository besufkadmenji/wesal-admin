import { ActionsCell } from "@/components/app/shared/tables/ActionsCell";
import { RowType } from "@/components/app/shared/tables/AppTable";
import Dictionary from "@/config/i18n/types";
import { SignedContractStatus, UserRole } from "@/gql/graphql";
import { Key } from "react";
import { twMerge } from "tailwind-merge";

export const typeMap = (dict: Dictionary) => ({
  [UserRole.Provider]: dict.common.serviceProvider,
  [UserRole.User]: dict.common.user,
});
export const statusMap = (dict: Dictionary) => ({
  [SignedContractStatus.Active]: dict.common.active,
  [SignedContractStatus.Expired]: dict.common.expired,
  [SignedContractStatus.TerminatedByAdmin]: dict.common.terminatedByAdmin,
  [SignedContractStatus.TerminatedByUser]: dict.common.terminatedByUser,
});
export const renderCell = (
  row: RowType,
  column: Key,
  dict: Dictionary,
  action: {
    onView: () => void;
  },
) => {
  if (column === "number") {
    return <p className="text-primary font-semibold">{row.number}</p>;
  } else if (column === "action") {
    return <ActionsCell onView={action.onView} />;
  } else if (column === "status") {
    return (
      <div
        className={twMerge(
          "text-title rounded-full text-xs leading-8 tracking-tight dark:text-white",
          row.status === SignedContractStatus.Active &&
            "bg-green-50 text-green-600",
          row.status === SignedContractStatus.Expired &&
            "bg-red-50 text-red-600",
          row.status === SignedContractStatus.TerminatedByAdmin &&
            "bg-purple-50 text-purple-600",
          row.status === SignedContractStatus.TerminatedByUser &&
            "bg-orange-50 text-orange-600",
        )}
      >
        {statusMap(dict)[row.status as keyof typeof statusMap] ?? row.status}
      </div>
    );
  }
  return row[column as string];
};
