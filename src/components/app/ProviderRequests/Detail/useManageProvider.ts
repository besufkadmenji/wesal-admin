import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import ProviderService from "@/services/provider.service";
import { queryClient } from "@/utils/query.client";
import { showErrorMessage, showSuccessMessage } from "@/utils/show.message";
import { useRouter } from "next/navigation";
import { useQueryState } from "nuqs";
import { useState } from "react";

export const useManageProvider = () => {
  const [busy, setBusy] = useState(false);
  const router = useRouter();
  const dict = useDict();
  const lang = useLang();
  const [isDeleteWarningOpen, setIsDeleteWarningOpen] = useQueryState(
    "isDeleteWarningOpen",
  );
  const [, setActivateProvider] = useQueryState("activateProvider");
  const [, setDeactivateProvider] = useQueryState("deactivateProvider");
  const [showRejectModal, setShowRejectModal] =
    useQueryState("showRejectModal");
  const activateProvider = async (id: string) => {
    setBusy(true);
    try {
      const response = await ProviderService.activateProvider(id);
      if (response) {
        showSuccessMessage(dict.providers_page.messages.activateSuccess);
        queryClient.invalidateQueries({
          queryKey: ["providerRequests"],
        });
        queryClient.invalidateQueries({
          queryKey: ["providerRequest", id],
        });
      }
    } catch (error) {
      console.error("Activate provider error:", error);
      showErrorMessage(
        error instanceof Error
          ? error
          : (error as string) || "An error occurred.",
      );
    } finally {
      setBusy(false);
      setActivateProvider(null);
    }
  };

  const deactivateProvider = async (id: string, reason?: string) => {
    setBusy(true);
    try {
      const response = await ProviderService.deactivateProvider(
        id,
        reason ?? "",
      );
      if (response) {
        showSuccessMessage(dict.providers_page.messages.deactivateSuccess);
        queryClient.invalidateQueries({
          queryKey: ["providerRequests"],
        });
        queryClient.invalidateQueries({
          queryKey: ["providerRequest", id],
        });
      }
      setShowRejectModal(null);
    } catch (error) {
      console.error("Deactivate provider error:", error);
      showErrorMessage(
        error instanceof Error
          ? error
          : (error as string) || "An error occurred.",
      );
    } finally {
      setBusy(false);
      setDeactivateProvider(null);
    }
  };

  const rejectProvider = async (id: string, reason: string) => {
    setBusy(true);
    try {
      const response = await ProviderService.rejectJoinRequest(id, reason);
      if (response) {
        showSuccessMessage(dict.providers_page.messages.rejectSuccess);
        queryClient.invalidateQueries({
          queryKey: ["providerRequests"],
        });
        queryClient.invalidateQueries({
          queryKey: ["providerRequest", id],
        });
      }
      setShowRejectModal(null);
    } catch (error) {
      console.error("Reject provider error:", error);
      showErrorMessage(
        error instanceof Error
          ? error
          : (error as string) || "An error occurred.",
      );
    } finally {
      setBusy(false);
    }
  };

  return {
    busy,
    activateProvider,
    deactivateProvider,
    rejectProvider,
  };
};
