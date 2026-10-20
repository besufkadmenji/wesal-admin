import {
  StatusChip,
  type StatusTone,
} from "@/components/app/shared/StatusChip";
import { ActionsCell } from "@/components/app/shared/tables/ActionsCell";
import { RowType } from "@/components/app/shared/tables/AppTable";
import Dictionary from "@/config/i18n/types";
import { SignedContractStatus } from "@/gql/graphql";
import { Key } from "react";

export const statusMap = (dict: Dictionary) => ({
  [SignedContractStatus.Active]: dict.common.active,
  [SignedContractStatus.Expired]: dict.common.expired,
  [SignedContractStatus.TerminatedByAdmin]: dict.common.terminatedByAdmin,
  [SignedContractStatus.TerminatedByProvider]: dict.common.terminatedByUser,
  [SignedContractStatus.Pending]: dict.common.waitingForResigning,
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
    const tones: Record<string, StatusTone> = {
      [SignedContractStatus.Active]: "success",
      [SignedContractStatus.Expired]: "danger",
      [SignedContractStatus.TerminatedByAdmin]: "purple",
      [SignedContractStatus.TerminatedByProvider]: "orange",
      [SignedContractStatus.Pending]: "warning",
    };
    return (
      <StatusChip
        tone={tones[row.status] ?? "neutral"}
        label={
          statusMap(dict)[row.status as keyof typeof statusMap] ?? row.status
        }
      />
    );
  }
  return row[column as string];
};
