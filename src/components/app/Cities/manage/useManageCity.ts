import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import CityService from "@/services/city.service";
import { queryClient } from "@/utils/query.client";
import { showErrorMessage, showSuccessMessage } from "@/utils/show.message";
import { useRouter } from "next/navigation";
import { useQueryState } from "nuqs";
import { useState } from "react";
import { useForm } from "./useForm";

export const useManageCity = () => {
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

  const createCity = async () => {
    setBusy(true);
    try {
      const response = await CityService.createCity({
        ...form,
      });
      if (response) {
        showSuccessMessage(dict.cities_page.messages.createSuccess);

        queryClient.invalidateQueries({
          queryKey: ["cities"],
        });
        router.push("/cities");
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

  const updateCity = async (id: string) => {
    setBusy(true);
    try {
      const response = await CityService.updateCity({
        ...form,
        id,
      });
      if (response) {
        showSuccessMessage(dict.cities_page.messages.updateSuccess);
        queryClient.invalidateQueries({
          queryKey: ["city", id],
        });
        queryClient.invalidateQueries({
          queryKey: ["cities"],
        });
        router.push("/cities");
      }
    } catch (error) {
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
    }
  };

  const deleteCity = async (id: string) => {
    setBusy(true);
    try {
      const success = await CityService.removeCity(id);
      if (success) {
        showSuccessMessage(dict.cities_page.messages.deleteSuccess);
        queryClient.invalidateQueries({
          queryKey: ["cities"],
        });
        queryClient.invalidateQueries({
          queryKey: ["city", id],
        });
        router.push("/cities");
      } else {
        showErrorMessage("Failed to delete city.");
      }
    } catch (error) {
      console.error("Delete city error:", error);
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
    createCity,
    updateCity,
    deleteCity,
  };
};
