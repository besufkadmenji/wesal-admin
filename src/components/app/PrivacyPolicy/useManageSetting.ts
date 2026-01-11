import { useDict } from "@/hooks/useDict";
import { SettingService } from "@/services/setting.service";
import { showErrorMessage, showSuccessMessage } from "@/utils/show.message";
import { useState } from "react";
import { useManageSettingsForm } from "./useForm";

export const useManageSetting = () => {
  const [busy, setBusy] = useState(false);
  const dict = useDict();
  const { valueAr, valueEn } = useManageSettingsForm();
  const updateSetting = async () => {
    setBusy(true);
    try {
      await SettingService.setSetting({
        privacyPolicyAr: valueAr,
        privacyPolicyEn: valueEn,
      });

      showSuccessMessage(dict.privacy_policy.messages.updateSuccess);
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
