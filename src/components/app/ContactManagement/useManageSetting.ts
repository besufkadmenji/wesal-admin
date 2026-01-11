import { useDict } from "@/hooks/useDict";
import { SettingService } from "@/services/setting.service";
import { showErrorMessage, showSuccessMessage } from "@/utils/show.message";
import { useState } from "react";
import { useManageSettingsForm } from "./useForm";

export const useManageSetting = () => {
  const [busy, setBusy] = useState(false);
  const dict = useDict();
  const { setting } = useManageSettingsForm();
  const updateSetting = async () => {
    setBusy(true);
    try {
      const cleanedSetting = Object.entries(setting).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]:
            value === "" || value === null || value === undefined
              ? null
              : value,
        }),
        {} as typeof setting,
      );
      await SettingService.setSetting(cleanedSetting);
      showSuccessMessage(dict.contact_settings.messages.updateSuccess);
    } catch (error) {
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
    }
  };

  return {
    busy,
    updateSetting,
  };
};
