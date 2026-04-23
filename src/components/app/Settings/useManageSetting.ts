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

const ASCII_EMAIL_REGEX =
  /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;
const SAUDI_MOBILE_REGEX = /^05\d{8}$/;

export const useManageSetting = () => {
  const [busy, setBusy] = useState(false);
  const [changingPassword, setChangingPassword] = useState(false);
  const [profileErrors, setProfileErrors] = useState<{
    email?: string;
    phoneNumber?: string;
  }>({});
  const lang = useLang();
  const dict = useDict();
  const [, setChangePassword] = useQueryState("changePassword");
  const { reset } = useChangePasswordForm();
  const { me } = useMe();
  const {
    updateProfile,
    avatarFile,
    signatureFile,
    platformManagerName,
    platformManagerSignature,
  } = useManageSettingsForm();

  const validateProfileEmail = (email: string): boolean => {
    const trimmedEmail = email.trim();
    if (!trimmedEmail || !ASCII_EMAIL_REGEX.test(trimmedEmail)) {
      setProfileErrors({
        email:
          lang === "ar"
            ? "يرجى إدخال بريد إلكتروني صالح."
            : "Please enter a valid email address.",
      });
      return false;
    }

    setProfileErrors((errors) => {
      const nextErrors = { ...errors };
      delete nextErrors.email;
      return nextErrors;
    });
    return true;
  };

  const validateProfilePhoneNumber = (phoneNumber: string): boolean => {
    const trimmedPhoneNumber = phoneNumber.trim();
    if (!SAUDI_MOBILE_REGEX.test(trimmedPhoneNumber)) {
      setProfileErrors((errors) => ({
        ...errors,
        phoneNumber:
          lang === "ar"
            ? "يرجى إدخال رقم جوال سعودي صحيح يبدأ بـ 05 ويتكون من 10 أرقام."
            : "Please enter a valid Saudi mobile number starting with 05 and containing 10 digits.",
      }));
      return false;
    }

    setProfileErrors((errors) => {
      const nextErrors = { ...errors };
      delete nextErrors.phoneNumber;
      return nextErrors;
    });
    return true;
  };

  const clearProfileError = (field: keyof typeof profileErrors) => {
    setProfileErrors((errors) => {
      const nextErrors = { ...errors };
      delete nextErrors[field];
      return nextErrors;
    });
  };

  const updateProfileInfo = async () => {
    if (!me) return;
    const isEmailValid = validateProfileEmail(updateProfile.email ?? "");
    const isPhoneValid = validateProfilePhoneNumber(
      updateProfile.phoneNumber ?? "",
    );
    if (!isEmailValid || !isPhoneValid) return;
    setBusy(true);
    try {
      let avatarFilename = updateProfile.avatarFilename ?? "";
      if (avatarFile) {
        const uploadResult = await uploadFile(avatarFile);
        avatarFilename = uploadResult.filename;
      }
      await AdminService.updateAdmin(me.id, {
        ...updateProfile,
        avatarFilename,
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
  const updateSetting = async () => {
    setBusy(true);
    try {
      let signature = platformManagerSignature;
      if (signatureFile) {
        const uploadResult = await uploadFile(signatureFile);
        signature = uploadResult.filename;
      }
      await SettingService.setSetting({
        platformManagerName,
        platformManagerSignature: signature,
      });
      queryClient.invalidateQueries({
        queryKey: ["me"],
      });
      queryClient.invalidateQueries({
        queryKey: ["setting"],
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
    profileErrors,
    validateProfileEmail,
    validateProfilePhoneNumber,
    clearProfileError,
    updateProfileInfo,
    updateSetting,
    changePassword,
    updateRules,
  };
};
