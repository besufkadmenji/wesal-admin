import { useDict } from "@/hooks/useDict";
import FaqService from "@/services/faq.service";
import { queryClient } from "@/utils/query.client";
import { showErrorMessage, showSuccessMessage } from "@/utils/show.message";
import { useQueryState } from "nuqs";
import { useState } from "react";
import { useForm } from "./useForm";
import { useAppRouter } from "@/hooks/useAppRouter";

export const useManageFaq = () => {
  const [busy, setBusy] = useState(false);
  const form = useForm((state) => state.form);
  const resetForm = useForm((state) => state.reset);
  const router = useAppRouter();
  const dict = useDict();
  const [isDeleteWarningOpen, setIsDeleteWarningOpen] = useQueryState(
    "isDeleteWarningOpen",
  );

  const createFaq = async () => {
    setBusy(true);
    try {
      const response = await FaqService.createFaq({
        ...form,
      });
      if (response) {
        showSuccessMessage(dict.faq_page.messages.createSuccess);

        queryClient.invalidateQueries({
          queryKey: ["faqs"],
        });
        router.push("/content/faq");
      }
      resetForm();
    } catch (error) {
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
    }
  };

  const updateFaq = async (id: string) => {
    setBusy(true);
    try {
      const response = await FaqService.updateFaq({
        ...form,
        id,
      });
      if (response) {
        showSuccessMessage(dict.faq_page.messages.updateSuccess);
        queryClient.invalidateQueries({
          queryKey: ["faq", id],
        });
        queryClient.invalidateQueries({
          queryKey: ["faqs"],
        });
        router.push("/content/faq");
      }
    } catch (error) {
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
    }
  };

  const updateFaqStatus = async (id: string, isActive: boolean) => {
    setBusy(true);
    try {
      const response = await FaqService.updateFaq({
        isActive,
        id,
      });
      if (response) {
        showSuccessMessage(dict.faq_page.messages.updateSuccess);
        queryClient.invalidateQueries({
          queryKey: ["faq", id],
        });
        queryClient.invalidateQueries({
          queryKey: ["faqs"],
        });
      }
    } catch (error) {
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
    }
  };

  const deleteFaq = async (id: string) => {
    setBusy(true);
    try {
      const success = await FaqService.removeFaq(id);
      if (success) {
        showSuccessMessage(dict.faq_page.messages.deleteSuccess);
        queryClient.invalidateQueries({
          queryKey: ["faqs"],
        });
        queryClient.invalidateQueries({
          queryKey: ["faq", id],
        });
        router.push("/content/faq");
      } else {
        showErrorMessage("Failed to delete faq.");
      }
    } catch (error) {
      console.error("Delete faq error:", error);
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
      setIsDeleteWarningOpen(null);
    }
  };

  return {
    busy,
    createFaq,
    updateFaq,
    deleteFaq,
    updateFaqStatus,
  };
};
