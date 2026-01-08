import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import CategoryService from "@/services/category.service";
import { queryClient } from "@/utils/query.client";
import { showErrorMessage, showSuccessMessage } from "@/utils/show.message";
import { useRouter } from "next/navigation";
import { useQueryState } from "nuqs";
import { useState } from "react";
import { useForm } from "./useForm";

export const useManageCategory = () => {
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

  const createCategory = async () => {
    setBusy(true);
    try {
      const response = await CategoryService.createCategory({
        ...form,
      });
      if (response) {
        showSuccessMessage(dict.categories_page.messages.createSuccess);

        queryClient.invalidateQueries({
          queryKey: ["categories"],
        });
        router.push("/categories");
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

  const updateCategory = async (id: string) => {
    setBusy(true);
    try {
      const response = await CategoryService.updateCategory({
        ...form,
        id,
      });
      if (response) {
        showSuccessMessage(dict.categories_page.messages.updateSuccess);
        queryClient.invalidateQueries({
          queryKey: ["category", id],
        });
        queryClient.invalidateQueries({
          queryKey: ["categories"],
        });
        router.push("/categories");
      }
    } catch (error) {
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
    }
  };

  const deleteCategory = async (id: string) => {
    setBusy(true);
    try {
      const success = await CategoryService.removeCategory(id);
      if (success) {
        showSuccessMessage(dict.categories_page.messages.deleteSuccess);
        queryClient.invalidateQueries({
          queryKey: ["categories"],
        });
        queryClient.invalidateQueries({
          queryKey: ["category", id],
        });
        router.push("/categories");
      } else {
        showErrorMessage("Failed to delete category.");
      }
    } catch (error) {
      console.error("Delete category error:", error);
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
    createCategory,
    updateCategory,
    deleteCategory,
  };
};
