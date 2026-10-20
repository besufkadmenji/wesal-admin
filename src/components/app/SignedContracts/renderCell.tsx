import { StatusChip } from "@/components/app/shared/StatusChip";
import {
  SIGNED_CONTRACT_TONES,
  signedContractStatusLabels,
} from "./signedContractStatus";
import { ActionsCell } from "@/components/app/shared/tables/ActionsCell";
import { RowType } from "@/components/app/shared/tables/AppTable";
import Dictionary from "@/config/i18n/types";
import { SignedContractStatus } from "@/gql/graphql";
import { Key } from "react";

export const statusMap = signedContractStatusLabels;
export const renderCell = (
  row: RowType,
  column: Key,
  dict: Dictionary,
  action: {
    onView: () => void;
  },
) => {
  if (column === "number") {
    return <p className="text-primary font-semibold dark:text-white">{row.number}</p>;
  } else if (column === "action") {
    return <ActionsCell onView={action.onView} />;
  } else if (column === "status") {
    return (
      <StatusChip
        tone={
          SIGNED_CONTRACT_TONES[row.status as SignedContractStatus] ?? "neutral"
        }
        label={
          statusMap(dict)[row.status as keyof typeof statusMap] ?? row.status
        }
      />
    );
  }
  return row[column as string];
};
