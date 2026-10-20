import { CircleCheck as ApproveIcon } from "lucide-react";
import { CircleX as RejectIcon } from "lucide-react";
import { Eye as ViewIcon } from "lucide-react";
import { ActionCell } from "@/components/app/shared/tables/ActionsCell";
import { RowType } from "@/components/app/shared/tables/AppTable";
import Dictionary from "@/config/i18n/types";
import { Key } from "react";
import { twMerge } from "tailwind-merge";
export const renderCell = (
  row: RowType,
  column: Key,
  dict: Dictionary,
  action: {
    onView: () => void;
    onApprove: () => void;
    onReject: () => void;
  },
) => {
  if (column === "number") {
    return <p className="text-primary font-semibold dark:text-white">{row.number}</p>;
  } else if (column === "action") {
    return (
      <div className="flex items-center justify-center gap-2">
        <ActionCell
          label={dict.common.actions.approve}
          icon={<ApproveIcon aria-hidden className="text-success size-5" />}
          onClick={action.onApprove}
        />
        <ActionCell
          label={dict.common.actions.reject}
          tone="danger"
          icon={<RejectIcon aria-hidden className="text-danger size-5" />}
          onClick={action.onReject}
        />
        <ActionCell
          label={dict.common.actions.view}
          icon={<ViewIcon aria-hidden className="size-5" />}
          onClick={action.onView}
        />
      </div>
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
      <p className="text-app-link dark:text-app-link text-xs leading-8 tracking-tight">
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
    const typeMap = {
      WAREHOUSE_OWNER: dict.common.warehouseOwner,
      SUPPLIER: dict.common.supplier,
    };
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
          {typeMap[row.type as keyof typeof typeMap] ?? row.type}
        </p>
      </div>
    );
  }
  return row[column as string];
};
