import { useDict } from "@/hooks/useDict";
import ProviderService from "@/services/provider.service";
import { queryClient } from "@/utils/query.client";
import { showErrorMessage, showSuccessMessage } from "@/utils/show.message";
import { useState } from "react";

const invalidateContractQueries = () => {
  queryClient.invalidateQueries({ queryKey: ["signedContracts"] });
  queryClient.invalidateQueries({ queryKey: ["signedContract"] });
  queryClient.invalidateQueries({ queryKey: ["me"] });
};

export const useSignSignature = () => {
  const [busy, setBusy] = useState(false);
  const dict = useDict();
  // Each action returns false on failure so its dialog stays open.
  const run = async (action: () => Promise<unknown>, success: string) => {
    setBusy(true);
    try {
      if (!(await action())) return false;
      showSuccessMessage(success);
      invalidateContractQueries();
      return true;
    } catch (error) {
      showErrorMessage(
        error instanceof Error ? error.message : dict.common.unexpectedError,
      );
      return false;
    } finally {
      setBusy(false);
    }
  };

  const terminateContract = async (userId: string, reason: string) => {
    if (reason.trim().length === 0) {
      showErrorMessage(dict.contract.error.cancelReasonRequired);
      return false;
    }
    return run(
      () => ProviderService.terminateContact(userId, reason.trim()),
      dict.contract.contractTerminatedSuccessfully,
    );
  };

  // S4-58: the admin's decision on a provider's termination request.
  const approveTermination = (providerId: string) =>
    run(
      () => ProviderService.approveContractTermination(providerId),
      dict.contract.terminationRequest.approved,
    );

  const rejectTermination = async (providerId: string, reason: string) => {
    if (reason.trim().length === 0) {
      showErrorMessage(dict.contract.terminationRequest.rejectReasonRequired);
      return false;
    }
    return run(
      () =>
        ProviderService.rejectContractTermination(providerId, reason.trim()),
      dict.contract.terminationRequest.rejected,
    );
  };

  const reactivateProvider = async (providerId: string) => {
    setBusy(true);
    try {
      const result = await ProviderService.reactivateProvider(providerId);
      if (result) {
        showSuccessMessage(dict.contract.reactivateProviderSuccessfully);
        invalidateContractQueries();
      }
    } catch (error) {
      console.error("Reactivation error:", error);
      showErrorMessage(
        error instanceof Error ? error.message : dict.common.unexpectedError,
      );
    } finally {
      setBusy(false);
    }
    return true;
  };

  return {
    terminateContract,
    approveTermination,
    rejectTermination,
    reactivateProvider,
    busy,
  };
};
