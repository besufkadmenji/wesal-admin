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
  const terminateContract = async (userId: string, reason: string) => {
    if (reason.trim().length === 0) {
      showErrorMessage(dict.contract.error.cancelReasonRequired);
      return false;
    }
    setBusy(true);
    try {
      const result = await ProviderService.terminateContact(userId, reason);
      if (result) {
        showSuccessMessage(dict.contract.contractTerminatedSuccessfully);
        invalidateContractQueries();
      }
      // Handle successful login (e.g., redirect, show message)
    } catch (error) {
      console.error("Login error:", error);
      showErrorMessage(
        error instanceof Error ? error.message : dict.common.unexpectedError,
      );
    } finally {
      setBusy(false);
    }
    return true;
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
    reactivateProvider,
    busy,
  };
};
