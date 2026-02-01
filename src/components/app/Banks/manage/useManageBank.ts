import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import BankService from "@/services/bank.service";
import { DeactivateUserDto } from "@/types/user";
import { queryClient } from "@/utils/query.client";
import { showErrorMessage, showSuccessMessage } from "@/utils/show.message";
import { useRouter } from "next/navigation";
import { useQueryState } from "nuqs";
import { useState } from "react";
import { useForm } from "./useForm";
import { DeactivateBankInput } from "@/gql/graphql";

export const useManageBank = () => {
  const [busy, setBusy] = useState(false);
  const form = useForm((state) => state.form);
  const resetForm = useForm((state) => state.reset);
  const router = useRouter();
  const dict = useDict();
  const lang = useLang();
  const [isDeleteWarningOpen, setIsDeleteWarningOpen] = useQueryState(
    "isDeleteWarningOpen",
  );
  const [showSuccess, setShowSuccess] = useQueryState("showSuccess");
  const [, setActivateBank] = useQueryState("activateBank");
  const [, setDeactivateBank] = useQueryState("deactivateBank");

  const createBank = async () => {
    setBusy(true);
    try {
      const response = await BankService.createBank({
        ...form,
      });
      if (response) {
        queryClient.invalidateQueries({
          queryKey: ["banks"],
        });
        queryClient.invalidateQueries({
          queryKey: ["bank", response.id],
        });
        showSuccessMessage(dict.banks_page.messages.createSuccess);
        resetForm();
        router.push("/banks");
      }
    } catch (error) {
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
    }
  };

  const updateBank = async (id: string) => {
    setBusy(true);
    try {
      const response = await BankService.updateBank({
        id,
        ...form,
      });
      if (response) {
        showSuccessMessage(dict.banks_page.messages.updateSuccess);
        queryClient.invalidateQueries({
          queryKey: ["bank", id],
        });
        queryClient.invalidateQueries({
          queryKey: ["banks"],
        });
        router.push("/banks");
      }
    } catch (error) {
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
    }
  };

  const deleteBank = async (id: string) => {
    setBusy(true);
    try {
      const success = await BankService.removeBank(id);
      if (success) {
        showSuccessMessage(dict.banks_page.messages.deleteSuccess);
        queryClient.invalidateQueries({
          queryKey: ["banks"],
        });
        queryClient.invalidateQueries({
          queryKey: ["bank", id],
        });
        router.push("/banks");
      } else {
        showErrorMessage("Failed to delete bank.");
      }
    } catch (error) {
      console.error("Delete bank error:", error);
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
      setIsDeleteWarningOpen(null);
    }
  };

  const activateBank = async (id: string) => {
    setBusy(true);
    try {
      const success = await BankService.activateBank(id);
      if (success) {
        showSuccessMessage(dict.banks_page.messages.activateSuccess);
        queryClient.invalidateQueries({
          queryKey: ["banks"],
        });
        queryClient.invalidateQueries({
          queryKey: ["bank", id],
        });
        setActivateBank(null);
      } else {
        showErrorMessage("Failed to activate bank.");
      }
    } catch (error) {
      console.error("Activate bank error:", error);
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
    }
  };

  const deactivateBank = async (id: string, reason: string) => {
    setBusy(true);
    try {
      const success = await BankService.deactivateBank(id, { reason });
      if (success) {
        showSuccessMessage(dict.banks_page.messages.deactivateSuccess);
        queryClient.invalidateQueries({
          queryKey: ["banks"],
        });
        queryClient.invalidateQueries({
          queryKey: ["bank", id],
        });
        setDeactivateBank(null);
      } else {
        showErrorMessage("Failed to deactivate bank.");
      }
    } catch (error) {
      console.error("Deactivate bank error:", error);
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
    }
  };

  return {
    busy,
    createBank,
    updateBank,
    deleteBank,
    activateBank,
    deactivateBank,
  };
};
