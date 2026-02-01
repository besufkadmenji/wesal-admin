import { BankStatus, CreateBankInput } from "@/gql/graphql";
import { useDict } from "@/hooks/useDict";
import { useCallback, useMemo, useState } from "react";

const NAME_MIN_LENGTH = 2;
const NAME_MAX_LENGTH = 100;

export const useFormValidation = (form: CreateBankInput) => {
  const dict = useDict();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateNameEn = useCallback(
    (value: string): string | null => {
      if (!value || value.trim() === "") {
        return dict.banks_page.validation.nameEnRequired;
      }
      if (value.trim().length < NAME_MIN_LENGTH) {
        return dict.banks_page.validation.nameEnMinLength;
      }
      if (value.trim().length > NAME_MAX_LENGTH) {
        return dict.banks_page.validation.nameEnMaxLength;
      }
      return null;
    },
    [dict],
  );

  const validateNameAr = useCallback(
    (value: string): string | null => {
      if (!value || value.trim() === "") {
        return dict.banks_page.validation.nameArRequired;
      }
      if (value.trim().length < NAME_MIN_LENGTH) {
        return dict.banks_page.validation.nameArMinLength;
      }
      if (value.trim().length > NAME_MAX_LENGTH) {
        return dict.banks_page.validation.nameArMaxLength;
      }
      return null;
    },
    [dict],
  );

  const validateStatus = useCallback(
    (value: BankStatus): string | null => {
      if (!value) {
        return dict.banks_page.validation.statusRequired;
      }
      if (!Object.values(BankStatus).includes(value)) {
        return dict.banks_page.validation.statusInvalid;
      }
      return null;
    },
    [dict],
  );

  const validateForm = useCallback(() => {
    const newErrors: { [key: string]: string } = {};

    const nameEnError = validateNameEn(form.nameEn);
    if (nameEnError) newErrors.nameEn = nameEnError;

    const nameArError = validateNameAr(form.nameAr);
    if (nameArError) newErrors.nameAr = nameArError;

    const statusError = validateStatus(form.status);
    if (statusError) newErrors.status = statusError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [
    form.nameEn,
    form.nameAr,
    form.status,
    validateNameEn,
    validateNameAr,
    validateStatus,
  ]);

  const isFormValid = useMemo(() => {
    const nameEnError = validateNameEn(form.nameEn);
    const nameArError = validateNameAr(form.nameAr);
    const statusError = validateStatus(form.status);

    return !nameEnError && !nameArError && !statusError;
  }, [
    form.nameEn,
    form.nameAr,
    form.status,
    validateNameEn,
    validateNameAr,
    validateStatus,
  ]);

  const validateField = useCallback(
    (field: keyof CreateBankInput, value: string | BankStatus) => {
      let error = "";

      switch (field) {
        case "nameEn":
          error = validateNameEn(value as string) || "";
          break;
        case "nameAr":
          error = validateNameAr(value as string) || "";
          break;
        case "status":
          error = validateStatus(value as BankStatus) || "";
          break;
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
    [validateNameEn, validateNameAr, validateStatus],
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
  };
};
