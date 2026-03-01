import { useCountries } from "@/components/app/Cities/useCities";
import { useAppRouter } from "@/hooks/useAppRouter";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import CityService from "@/services/city.service";
import { queryClient } from "@/utils/query.client";
import { showErrorMessage, showSuccessMessage } from "@/utils/show.message";
import { useQueryState } from "nuqs";
import { useState } from "react";
import { useForm } from "./useForm";

export const useManageCity = () => {
  const { countries } = useCountries();
  const [busy, setBusy] = useState(false);
  const form = useForm((state) => state.form);
  const resetForm = useForm((state) => state.reset);
  const router = useAppRouter();
  const dict = useDict();
  const lang = useLang();
  const [isDeleteWarningOpen, setIsDeleteWarningOpen] = useQueryState(
    "isDeleteWarningOpen",
  );
  const [showSuccess, setShowSuccess] = useQueryState("showSuccess");
  const [, setActivateCity] = useQueryState("activateCity");
  const [, setDeactivateCity] = useQueryState("deactivateCity");

  const createCity = async () => {
    setBusy(true);
    try {
      const response = await CityService.createCity({
        ...form,
        countryId: countries![0]?.id || "",
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

  const activateCity = async (id: string) => {
    setBusy(true);
    try {
      const success = await CityService.activateCity(id);
      if (success) {
        showSuccessMessage(dict.cities_page.messages.activateSuccess);
        queryClient.invalidateQueries({ queryKey: ["cities"] });
        queryClient.invalidateQueries({ queryKey: ["city", id] });
        setActivateCity(null);
      } else {
        showErrorMessage("Failed to activate city.");
      }
    } catch (error) {
      console.error("Activate city error:", error);
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
    }
  };

  const deactivateCity = async (id: string) => {
    setBusy(true);
    try {
      const success = await CityService.deactivateCity(id);
      if (success) {
        showSuccessMessage(dict.cities_page.messages.deactivateSuccess);
        queryClient.invalidateQueries({ queryKey: ["cities"] });
        queryClient.invalidateQueries({ queryKey: ["city", id] });
        setDeactivateCity(null);
      } else {
        showErrorMessage("Failed to deactivate city.");
      }
    } catch (error) {
      console.error("Deactivate city error:", error);
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
    }
  };

  return {
    busy,
    createCity,
    updateCity,
    deleteCity,
    activateCity,
    deactivateCity,
  };
};
