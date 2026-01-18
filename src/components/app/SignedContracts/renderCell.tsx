import { ActionsCell } from "@/components/app/shared/tables/ActionsCell";
import { RowType } from "@/components/app/shared/tables/AppTable";
import Dictionary from "@/config/i18n/types";
import { ContractStatus, SignedContractStatus, UserRole } from "@/gql/graphql";
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
  if (column === "action") {
    return <ActionsCell onView={action.onView} />;
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
  } else if (column === "type") {
    return (
      <div className="grid justify-items-center">
        <p
          className={twMerge(
            "grid h-6 items-center rounded-full px-3",
            row.type === "WAREHOUSE_OWNER" &&
              "text-green-main dark:text-green-main bg-[#E7F4EE] dark:bg-[#E7F4EE]",
            row.type === "SUPPLIER" &&
              "bg-[#FDF1E8] text-[#E46A11] dark:bg-[#FDF1E8] dark:text-[#E46A11]",
          )}
        >
          {typeMap(dict)[row.type as keyof typeof typeMap] ?? row.type}
        </p>
      </div>
    );
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
