import { useDict } from "@/hooks/useDict";
import { useCallback, useMemo, useState } from "react";

const NAME_MIN_LENGTH = 3;
const NAME_MAX_LENGTH = 100;

interface CityForm {
  nameAr: string;
  nameEn: string;
  countryId: string;
}

export const useFormValidation = (form: CityForm) => {
  const dict = useDict();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateNameAr = useCallback(
    (value: string): string | null => {
      if (!value || value.trim() === "") {
        return (
          dict.cities_page.validation?.nameArRequired ||
          "Arabic name is required"
        );
      }
      if (value.trim().length < NAME_MIN_LENGTH) {
        return (
          dict.cities_page.validation?.nameArMinLength ||
          "Arabic name must be at least 3 characters"
        );
      }
      if (value.trim().length > NAME_MAX_LENGTH) {
        return (
          dict.cities_page.validation?.nameArMaxLength ||
          "Arabic name must not exceed 100 characters"
        );
      }
      return null;
    },
    [dict],
  );

  const validateNameEn = useCallback(
    (value: string): string | null => {
      if (!value || value.trim() === "") {
        return (
          dict.cities_page.validation?.nameEnRequired ||
          "English name is required"
        );
      }
      if (value.trim().length < NAME_MIN_LENGTH) {
        return (
          dict.cities_page.validation?.nameEnMinLength ||
          "English name must be at least 3 characters"
        );
      }
      if (value.trim().length > NAME_MAX_LENGTH) {
        return (
          dict.cities_page.validation?.nameEnMaxLength ||
          "English name must not exceed 100 characters"
        );
      }
      return null;
    },
    [dict],
  );

  const validateCountryId = useCallback(
    (value: string): string | null => {
      if (!value || value.trim() === "") {
        return (
          dict.cities_page.validation?.countryIdRequired ||
          "Country is required"
        );
      }
      return null;
    },
    [dict],
  );

  const validateForm = useCallback(() => {
    const newErrors: { [key: string]: string } = {};

    const nameArError = validateNameAr(form.nameAr);
    if (nameArError) newErrors.nameAr = nameArError;

    const nameEnError = validateNameEn(form.nameEn);
    if (nameEnError) newErrors.nameEn = nameEnError;

    const countryIdError = validateCountryId(form.countryId);
    if (countryIdError) newErrors.countryId = countryIdError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [
    form.nameAr,
    form.nameEn,
    form.countryId,
    validateNameAr,
    validateNameEn,
    validateCountryId,
  ]);

  const isFormValid = useMemo(() => {
    const nameArError = validateNameAr(form.nameAr);
    const nameEnError = validateNameEn(form.nameEn);
    const countryIdError = validateCountryId(form.countryId);

    return !nameArError && !nameEnError && !countryIdError;
  }, [
    form.nameAr,
    form.nameEn,
    form.countryId,
    validateNameAr,
    validateNameEn,
    validateCountryId,
  ]);

  const validateField = useCallback(
    (field: keyof CityForm, value: string) => {
      let error = "";

      switch (field) {
        case "nameAr":
          error = validateNameAr(value) || "";
          break;
        case "nameEn":
          error = validateNameEn(value) || "";
          break;
        case "countryId":
          error = validateCountryId(value) || "";
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
    [validateNameAr, validateNameEn, validateCountryId],
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
