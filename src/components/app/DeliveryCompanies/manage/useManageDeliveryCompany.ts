import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import DeliveryCompanyService from "@/services/delivery.company.service";
import { queryClient } from "@/utils/query.client";
import { showErrorMessage, showSuccessMessage } from "@/utils/show.message";
import { useRouter } from "next/navigation";
import { useQueryState } from "nuqs";
import { useState } from "react";
import { useForm } from "./useForm";

export const useManageDeliveryCompany = () => {
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
  const [, setActivateDeliveryCompany] = useQueryState(
    "activateDeliveryCompany",
  );
  const [, setDeactivateDeliveryCompany] = useQueryState(
    "deactivateDeliveryCompany",
  );
  const createDeliveryCompany = async () => {
    setBusy(true);
    try {
      const response = await DeliveryCompanyService.createDeliveryCompany({
        ...form,
      });
      if (response) {
        queryClient.invalidateQueries({
          queryKey: ["deliveryCompanies"],
        });
        queryClient.invalidateQueries({
          queryKey: ["deliveryCompany", response.id],
        });
        showSuccessMessage(dict.delivery_companies_page.messages.createSuccess);
        resetForm();
        router.push("/delivery-companies");
      }
    } catch (error) {
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
    }
  };

  const updateDeliveryCompany = async (id: string) => {
    setBusy(true);
    try {
      const response = await DeliveryCompanyService.updateDeliveryCompany({
        id,
        ...form,
      });
      if (response) {
        showSuccessMessage(dict.delivery_companies_page.messages.updateSuccess);
        queryClient.invalidateQueries({
          queryKey: ["deliveryCompany", id],
        });
        queryClient.invalidateQueries({
          queryKey: ["deliveryCompanies"],
        });
        router.push("/delivery-companies");
      }
    } catch (error) {
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
    }
  };

  const deleteDeliveryCompany = async (id: string) => {
    setBusy(true);
    try {
      const success = await DeliveryCompanyService.removeDeliveryCompany(id);
      if (success) {
        showSuccessMessage(dict.delivery_companies_page.messages.deleteSuccess);
        queryClient.invalidateQueries({
          queryKey: ["deliveryCompanies"],
        });
        queryClient.invalidateQueries({
          queryKey: ["deliveryCompany", id],
        });
        router.push("/delivery-companies");
      } else {
        showErrorMessage("Failed to delete delivery_companies.");
      }
    } catch (error) {
      console.error("Delete deliveryCompany error:", error);
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
      setIsDeleteWarningOpen(null);
    }
  };

  const activateDeliveryCompany = async (id: string) => {
    setBusy(true);
    try {
      const success = await DeliveryCompanyService.activateDeliveryCompany(id);
      if (success) {
        showSuccessMessage(
          dict.delivery_companies_page.messages.activateSuccess,
        );
        queryClient.invalidateQueries({
          queryKey: ["deliveryCompanies"],
        });
        queryClient.invalidateQueries({
          queryKey: ["deliveryCompany", id],
        });
        setActivateDeliveryCompany(null);
      } else {
        showErrorMessage("Failed to activate delivery_companies.");
      }
    } catch (error) {
      console.error("Activate delivery_companies error:", error);
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
    }
  };

  const deactivateDeliveryCompany = async (id: string, reason: string) => {
    setBusy(true);
    try {
      const success = await DeliveryCompanyService.deactivateDeliveryCompany(
        id,
        { reason },
      );
      if (success) {
        showSuccessMessage(
          dict.delivery_companies_page.messages.deactivateSuccess,
        );
        queryClient.invalidateQueries({
          queryKey: ["deliveryCompanies"],
        });
        queryClient.invalidateQueries({
          queryKey: ["deliveryCompany", id],
        });
        setDeactivateDeliveryCompany(null);
      } else {
        showErrorMessage("Failed to deactivate delivery_companies.");
      }
    } catch (error) {
      console.error("Deactivate delivery_companies error:", error);
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
    }
  };

  return {
    busy,
    createDeliveryCompany,
    updateDeliveryCompany,
    deleteDeliveryCompany,
    activateDeliveryCompany,
    deactivateDeliveryCompany,
  };
};
