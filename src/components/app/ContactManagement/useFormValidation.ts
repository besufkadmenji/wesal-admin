import { SettingInput } from "@/gql/graphql";
import { useDict } from "@/hooks/useDict";
import { useCallback, useMemo, useState } from "react";

// Saudi phone: 5XXXXXXXX (9 digits starting with 5)
// or with country code: +9665XXXXXXXX / 009665XXXXXXXX
const SAUDI_PHONE_LOCAL_REGEX = /^5\d{8}$/;
const SAUDI_PHONE_INTL_REGEX = /^(?:\+966|00966)5\d{8}$/;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_REGEX = /^https?:\/\/.+/;

const isSaudiPhone = (value: string): boolean => {
  const cleaned = value.replace(/[\s\-()]/g, "");
  return (
    SAUDI_PHONE_LOCAL_REGEX.test(cleaned) ||
    SAUDI_PHONE_INTL_REGEX.test(cleaned)
  );
};

export const useFormValidation = (setting: SettingInput) => {
  const dict = useDict();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validatePhoneNumber = useCallback(
    (value: string): string | null => {
      if (!value || value.trim() === "") {
        return dict.contact_settings.validation.phoneNumberRequired;
      }
      if (!isSaudiPhone(value)) {
        return dict.contact_settings.validation.phoneNumberInvalidSaudi;
      }
      return null;
    },
    [dict],
  );

  const validateWhatsappNumber = useCallback(
    (value: string): string | null => {
      if (!value || value.trim() === "") {
        return null; // optional
      }
      if (!isSaudiPhone(value)) {
        return dict.contact_settings.validation.whatsappInvalidSaudi;
      }
      return null;
    },
    [dict],
  );

  const validateEmail = useCallback(
    (value: string): string | null => {
      if (!value || value.trim() === "") {
        return null; // optional
      }
      if (!EMAIL_REGEX.test(value)) {
        return dict.contact_settings.validation.emailInvalid;
      }
      return null;
    },
    [dict],
  );

  const validateSocialMediaLink = useCallback(
    (
      name: string,
      link: string,
    ): { nameError: string | null; linkError: string | null } => {
      let nameError: string | null = null;
      let linkError: string | null = null;

      if (!name || name.trim() === "") {
        nameError = dict.contact_settings.validation.socialMediaNameRequired;
      }
      if (!link || link.trim() === "") {
        linkError = dict.contact_settings.validation.socialMediaLinkRequired;
      } else if (!URL_REGEX.test(link)) {
        linkError = dict.contact_settings.validation.socialMediaLinkInvalid;
      }

      return { nameError, linkError };
    },
    [dict],
  );

  const validateForm = useCallback(() => {
    const newErrors: { [key: string]: string } = {};

    // Validate phones list
    if (!setting.phones || setting.phones.length === 0) {
      newErrors.phones = dict.contact_settings.validation.atLeastOnePhone;
    } else {
      setting.phones.forEach((phone, index) => {
        const error = validatePhoneNumber(phone);
        if (error) newErrors[`phone_${index}`] = error;
      });
    }

    // Validate whatsapp
    const whatsappError = validateWhatsappNumber(setting.whatsappNumber ?? "");
    if (whatsappError) newErrors.whatsappNumber = whatsappError;

    // Validate email
    const emailError = validateEmail(setting.email ?? "");
    if (emailError) newErrors.email = emailError;

    // Validate social media links
    if (setting.socialMediaLinks) {
      setting.socialMediaLinks.forEach((link, index) => {
        const { nameError, linkError } = validateSocialMediaLink(
          link.name,
          link.link,
        );
        if (nameError) newErrors[`socialMedia_name_${index}`] = nameError;
        if (linkError) newErrors[`socialMedia_link_${index}`] = linkError;
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [
    setting,
    dict,
    validatePhoneNumber,
    validateWhatsappNumber,
    validateEmail,
    validateSocialMediaLink,
  ]);

  const isFormValid = useMemo(() => {
    if (!setting.phones || setting.phones.length === 0) return false;

    const phonesValid = setting.phones.every(
      (phone) => !validatePhoneNumber(phone),
    );
    const whatsappValid = !validateWhatsappNumber(setting.whatsappNumber ?? "");
    const emailValid = !validateEmail(setting.email ?? "");

    const socialValid =
      !setting.socialMediaLinks ||
      setting.socialMediaLinks.every((link) => {
        const { nameError, linkError } = validateSocialMediaLink(
          link.name,
          link.link,
        );
        return !nameError && !linkError;
      });

    return phonesValid && whatsappValid && emailValid && socialValid;
  }, [
    setting,
    validatePhoneNumber,
    validateWhatsappNumber,
    validateEmail,
    validateSocialMediaLink,
  ]);

  const validateField = useCallback(
    (field: string, value: string) => {
      let error = "";

      if (field === "phoneNumber") {
        error = validatePhoneNumber(value) || "";
      } else if (field === "whatsappNumber") {
        error = validateWhatsappNumber(value) || "";
      } else if (field === "email") {
        error = validateEmail(value) || "";
      }

      if (error) {
        setErrors((prev) => ({ ...prev, [field]: error }));
      } else {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[field];
          return newErrors;
        });
      }
    },
    [validatePhoneNumber, validateWhatsappNumber, validateEmail],
  );

  const clearError = useCallback(
    (field: string) => {
      if (errors[field]) {
        setErrors({ ...errors, [field]: "" });
      }
    },
    [errors],
  );

  const clearErrors = useCallback(() => {
    setErrors({});
  }, []);

  return {
    errors,
    validateForm,
    validateField,
    isFormValid,
    clearError,
    clearErrors,
    validatePhoneNumber,
  };
};
