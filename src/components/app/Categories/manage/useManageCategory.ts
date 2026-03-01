import { useAppRouter } from "@/hooks/useAppRouter";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import CategoryService from "@/services/category.service";
import { uploadFile } from "@/utils/file.upload";
import { queryClient } from "@/utils/query.client";
import { showErrorMessage, showSuccessMessage } from "@/utils/show.message";
import { useQueryState } from "nuqs";
import { useState } from "react";
import { useForm } from "./useForm";

export const useManageCategory = () => {
  const [busy, setBusy] = useState(false);
  const form = useForm((state) => state.form);
  const imageFile = useForm((state) => state.imageFile);
  const resetForm = useForm((state) => state.reset);
  const router = useAppRouter();
  const dict = useDict();
  const lang = useLang();
  const [isDeleteWarningOpen, setIsDeleteWarningOpen] = useQueryState(
    "isDeleteWarningOpen",
  );
  const [, setActivateCategory] = useQueryState("activateCategory");
  const [, setDeactivateCategory] = useQueryState("deactivateCategory");

  const createCategory = async () => {
    setBusy(true);
    try {
      const image = await uploadFile(imageFile!);
      const response = await CategoryService.createCategory({
        ...form,
        image: image.filename,
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
      const image = imageFile
        ? await uploadFile(imageFile)
        : { filename: form.image };

      const response = await CategoryService.updateCategory({
        ...form,
        image: image.filename,
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

  const activateCategory = async (id: string) => {
    setBusy(true);
    try {
      const success = await CategoryService.activateCategory(id);
      if (success) {
        showSuccessMessage(dict.categories_page.messages.activateSuccess);
        queryClient.invalidateQueries({ queryKey: ["categories"] });
        queryClient.invalidateQueries({ queryKey: ["category", id] });
        setActivateCategory(null);
      } else {
        showErrorMessage("Failed to activate category.");
      }
    } catch (error) {
      console.error("Activate category error:", error);
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
    }
  };

  const deactivateCategory = async (id: string) => {
    setBusy(true);
    try {
      const success = await CategoryService.deactivateCategory(id);
      if (success) {
        showSuccessMessage(dict.categories_page.messages.deactivateSuccess);
        queryClient.invalidateQueries({ queryKey: ["categories"] });
        queryClient.invalidateQueries({ queryKey: ["category", id] });
        setDeactivateCategory(null);
      } else {
        showErrorMessage("Failed to deactivate category.");
      }
    } catch (error) {
      console.error("Deactivate category error:", error);
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
    }
  };

  return {
    busy,
    createCategory,
    updateCategory,
    deleteCategory,
    activateCategory,
    deactivateCategory,
  };
};
