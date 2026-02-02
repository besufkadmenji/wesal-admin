import { useDict } from "@/hooks/useDict";
import ProviderService from "@/services/provider.service";
import { queryClient } from "@/utils/query.client";
import { showErrorMessage, showSuccessMessage } from "@/utils/show.message";
import { useState } from "react";

export const useSignSignature = () => {
  const [busy, setBusy] = useState(false);
  const dict = useDict();
  const saveSignature = async (providerId: string) => {
    setBusy(true);
    try {
      const result = await ProviderService.signContact({
        providerId,
        platformManagerName: "",
        platformManagerSignature: "",
      });
      if (result) {
        showSuccessMessage(dict.contract.signatureSavedSuccessfully);
        queryClient.invalidateQueries({
          queryKey: ["signedContracts"],
        });
        queryClient.invalidateQueries({
          queryKey: ["signedContract"],
        });
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
  };

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
        queryClient.invalidateQueries({
          queryKey: ["me"],
        });
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

  return {
    saveSignature,
    terminateContract,
    busy,
  };
};
