import { useDict } from "@/hooks/useDict";
import UserService from "@/services/user.service";
import { queryClient } from "@/utils/query.client";
import { showErrorMessage, showSuccessMessage } from "@/utils/show.message";
import { useState } from "react";

export const useSignSignature = () => {
  const [busy, setBusy] = useState(false);
  const dict = useDict();
  const saveSignature = async (userId: string) => {
    setBusy(true);
    try {
      const result = await UserService.signContact({
        userId,
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
      const result = await UserService.terminateContact(userId, reason);
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
