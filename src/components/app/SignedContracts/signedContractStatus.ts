import type { StatusTone } from "@/components/app/shared/StatusChip";
import Dictionary from "@/config/i18n/types";
import { SignedContractStatus } from "@/gql/graphql";

/** E-contract status labels (list wording) and tones, shared by the admin. */
export const signedContractStatusLabels = (
  dict: Dictionary,
): Record<SignedContractStatus, string> => ({
  [SignedContractStatus.Active]: dict.common.active,
  [SignedContractStatus.Expired]: dict.common.expired,
  [SignedContractStatus.TerminatedByAdmin]: dict.common.terminatedByAdmin,
  [SignedContractStatus.TerminatedByProvider]: dict.common.terminatedByUser,
  [SignedContractStatus.Pending]: dict.common.waitingForResigning,
  [SignedContractStatus.TerminationRequested]: dict.common.terminationRequested,
});

export const SIGNED_CONTRACT_TONES: Record<SignedContractStatus, StatusTone> = {
  [SignedContractStatus.Active]: "success",
  [SignedContractStatus.Expired]: "danger",
  [SignedContractStatus.TerminatedByAdmin]: "purple",
  [SignedContractStatus.TerminatedByProvider]: "orange",
  [SignedContractStatus.Pending]: "warning",
  [SignedContractStatus.TerminationRequested]: "orange",
};
