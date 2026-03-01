import { useAppRouter } from "@/hooks/useAppRouter";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import ListingService from "@/services/listing.service";
import { queryClient } from "@/utils/query.client";
import { showErrorMessage, showSuccessMessage } from "@/utils/show.message";
import { useQueryState } from "nuqs";
import { useState } from "react";

export const useManageListing = () => {
  const [busy, setBusy] = useState(false);
  const router = useAppRouter();
  const dict = useDict();
  const lang = useLang();
  const [isDeleteWarningOpen, setIsDeleteWarningOpen] = useQueryState(
    "isDeleteWarningOpen",
  );
  const [, setActivateListing] = useQueryState("activateListing");
  const [, setDeactivateListing] = useQueryState("deactivateListing");

  const deleteListing = async (id: string) => {
    setBusy(true);
    try {
      const success = await ListingService.removeListing(id);
      if (success) {
        showSuccessMessage(dict.listings_page.messages.deleteSuccess);
        queryClient.invalidateQueries({
          queryKey: ["listings"],
        });
        queryClient.invalidateQueries({
          queryKey: ["listing", id],
        });
        router.push("/listings");
      } else {
        showErrorMessage("Failed to delete listing.");
      }
    } catch (error) {
      console.error("Delete listing error:", error);
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
      setIsDeleteWarningOpen(null);
    }
  };

  const activateListing = async (id: string) => {
    setBusy(true);
    try {
      const success = await ListingService.activateListing(id);
      if (success) {
        showSuccessMessage(dict.listings_page.messages.activateSuccess);
        queryClient.invalidateQueries({
          queryKey: ["listings"],
        });
        queryClient.invalidateQueries({
          queryKey: ["listing", id],
        });
        setActivateListing(null);
      } else {
        showErrorMessage("Failed to activate listing.");
      }
    } catch (error) {
      console.error("Activate listing error:", error);
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
    }
  };

  const deactivateListing = async (id: string, reason: string) => {
    setBusy(true);
    try {
      const success = await ListingService.deactivateListing(id, reason);
      if (success) {
        showSuccessMessage(dict.listings_page.messages.deactivateSuccess);
        queryClient.invalidateQueries({
          queryKey: ["listings"],
        });
        queryClient.invalidateQueries({
          queryKey: ["listing", id],
        });
        setDeactivateListing(null);
      } else {
        showErrorMessage("Failed to deactivate listing.");
      }
    } catch (error) {
      console.error("Deactivate listing error:", error);
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
    }
  };

  return {
    busy,
    deleteListing,
    activateListing,
    deactivateListing,
  };
};
