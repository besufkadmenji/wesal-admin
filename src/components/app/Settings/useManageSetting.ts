import { useChangePasswordForm } from "@/components/app/Settings/useChangePasswordForm";
import { useManageSettingsForm } from "@/components/app/Settings/useForm";
import { AdminChangePasswordInput } from "@/gql/graphql";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import { useMe } from "@/hooks/useMe";
import AdminService from "@/services/admin.service";
import { AuthService } from "@/services/auth.service";
import { SettingService } from "@/services/setting.service";
import { uploadFile } from "@/utils/file.upload";
import { queryClient } from "@/utils/query.client";
import { showErrorMessage, showSuccessMessage } from "@/utils/show.message";
import { useQueryState } from "nuqs";
import { useState } from "react";

export const useManageSetting = () => {
  const [busy, setBusy] = useState(false);
  const [changingPassword, setChangingPassword] = useState(false);
  const lang = useLang();
  const dict = useDict();
  const [, setChangePassword] = useQueryState("changePassword");
  const { reset } = useChangePasswordForm();
  const { me } = useMe();
  const { avatarFile, updateProfile, signatureFile } = useManageSettingsForm();
  const updateSetting = async () => {
    setBusy(true);
    try {
      let avatarFilename = updateProfile.avatarFilename;
      let signature = updateProfile.platformManagerSignature;
      if (avatarFile) {
        const uploadResult = await uploadFile(avatarFile);
        avatarFilename = uploadResult.filename;
      }
      if (signatureFile) {
        const uploadResult = await uploadFile(signatureFile);
        signature = uploadResult.filename;
      }
      await AdminService.updateAdmin(me?.id ?? "", {
        ...updateProfile,
        avatarFilename,
        platformManagerSignature: signature,
      });
      queryClient.invalidateQueries({
        queryKey: ["me"],
      });
      showSuccessMessage(dict.settings_page.messages.updateSuccess);
    } catch (error) {
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
    }
  };
  const updateRules = async (rulesAr: string, rulesEn: string) => {
    setBusy(true);
    try {
      await SettingService.setSetting({
        rulesAr,
        rulesEn,
      });
      queryClient.invalidateQueries({
        queryKey: ["setting"],
      });
      showSuccessMessage(dict.settings.messages.updateSuccess);
    } catch (error) {
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
    }
  };
  const changePassword = async (data: AdminChangePasswordInput) => {
    setChangingPassword(true);
    try {
      await AuthService.changePassword(data);

      showSuccessMessage(dict.settings_page.messages.passwordChangeSuccess);
      setChangePassword(null);
      reset();
    } catch (error) {
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setChangingPassword(false);
    }
  };

  return {
    busy,
    changingPassword,
    updateSetting,
    changePassword,
    updateRules,
  };
};
