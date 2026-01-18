import { useDict } from "@/hooks/useDict";
import { useCallback, useMemo, useState } from "react";

const NAME_MIN_LENGTH = 3;
const NAME_MAX_LENGTH = 100;
const DESCRIPTION_MIN_LENGTH = 10;
const DESCRIPTION_MAX_LENGTH = 500;
const RULES_MIN_LENGTH = 10;
const RULES_MAX_LENGTH = 500;

interface CategoryForm {
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  rulesAr?: string;
  rulesEn?: string;
  parentId?: string | null;
}

export const useFormValidation = (form: CategoryForm) => {
  const dict = useDict();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateNameAr = useCallback(
    (value: string): string | null => {
      if (!value || value.trim() === "") {
        return dict.add_new_category_form.validation.nameArRequired;
      }
      if (value.trim().length < NAME_MIN_LENGTH) {
        return dict.add_new_category_form.validation.nameArMinLength;
      }
      if (value.trim().length > NAME_MAX_LENGTH) {
        return dict.add_new_category_form.validation.nameArMaxLength;
      }
      return null;
    },
    [dict],
  );

  const validateNameEn = useCallback(
    (value: string): string | null => {
      if (!value || value.trim() === "") {
        return dict.add_new_category_form.validation.nameEnRequired;
      }
      if (value.trim().length < NAME_MIN_LENGTH) {
        return dict.add_new_category_form.validation.nameEnMinLength;
      }
      if (value.trim().length > NAME_MAX_LENGTH) {
        return dict.add_new_category_form.validation.nameEnMaxLength;
      }
      return null;
    },
    [dict],
  );

  const validateDescriptionAr = useCallback(
    (value: string): string | null => {
      if (!value || value.trim() === "") {
        return dict.add_new_category_form.validation.descriptionArRequired;
      }
      if (value.trim().length < DESCRIPTION_MIN_LENGTH) {
        return dict.add_new_category_form.validation.descriptionArMinLength;
      }
      if (value.trim().length > DESCRIPTION_MAX_LENGTH) {
        return dict.add_new_category_form.validation.descriptionArMaxLength;
      }
      return null;
    },
    [dict],
  );

  const validateDescriptionEn = useCallback(
    (value: string): string | null => {
      if (!value || value.trim() === "") {
        return dict.add_new_category_form.validation.descriptionEnRequired;
      }
      if (value.trim().length < DESCRIPTION_MIN_LENGTH) {
        return dict.add_new_category_form.validation.descriptionEnMinLength;
      }
      if (value.trim().length > DESCRIPTION_MAX_LENGTH) {
        return dict.add_new_category_form.validation.descriptionEnMaxLength;
      }
      return null;
    },
    [dict],
  );

  const validateRulesAr = useCallback(
    (value: string): string | null => {
      if (!value || value.trim() === "") {
        return dict.add_new_category_form.validation.rulesArRequired;
      }
      if (value.trim().length < RULES_MIN_LENGTH) {
        return dict.add_new_category_form.validation.rulesArMinLength;
      }
      if (value.trim().length > RULES_MAX_LENGTH) {
        return dict.add_new_category_form.validation.rulesArMaxLength;
      }
      return null;
    },
    [dict],
  );

  const validateRulesEn = useCallback(
    (value: string): string | null => {
      if (!value || value.trim() === "") {
        return dict.add_new_category_form.validation.rulesEnRequired;
      }
      if (value.trim().length < RULES_MIN_LENGTH) {
        return dict.add_new_category_form.validation.rulesEnMinLength;
      }
      if (value.trim().length > RULES_MAX_LENGTH) {
        return dict.add_new_category_form.validation.rulesEnMaxLength;
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

    const descriptionArError = validateDescriptionAr(form.descriptionAr);
    if (descriptionArError) newErrors.descriptionAr = descriptionArError;

    const descriptionEnError = validateDescriptionEn(form.descriptionEn);
    if (descriptionEnError) newErrors.descriptionEn = descriptionEnError;

    const rulesArError = validateRulesAr(form.rulesAr || "");
    if (rulesArError) newErrors.rulesAr = rulesArError;

    const rulesEnError = validateRulesEn(form.rulesEn || "");
    if (rulesEnError) newErrors.rulesEn = rulesEnError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [
    form.nameAr,
    form.nameEn,
    form.descriptionAr,
    form.descriptionEn,
    form.rulesAr,
    form.rulesEn,
    validateNameAr,
    validateNameEn,
    validateDescriptionAr,
    validateDescriptionEn,
    validateRulesAr,
    validateRulesEn,
  ]);

  const isFormValid = useMemo(() => {
    const nameArError = validateNameAr(form.nameAr);
    const nameEnError = validateNameEn(form.nameEn);
    const descriptionArError = validateDescriptionAr(form.descriptionAr);
    const descriptionEnError = validateDescriptionEn(form.descriptionEn);
    const rulesArError = validateRulesAr(form.rulesAr || "");
    const rulesEnError = validateRulesEn(form.rulesEn || "");

    return (
      !nameArError &&
      !nameEnError &&
      !descriptionArError &&
      !descriptionEnError &&
      !rulesArError &&
      !rulesEnError
    );
  }, [
    form.nameAr,
    form.nameEn,
    form.descriptionAr,
    form.descriptionEn,
    form.rulesAr,
    form.rulesEn,
    validateNameAr,
    validateNameEn,
    validateDescriptionAr,
    validateDescriptionEn,
    validateRulesAr,
    validateRulesEn,
  ]);

  const validateField = useCallback(
    (field: keyof CategoryForm, value: string) => {
      let error = "";

      switch (field) {
        case "nameAr":
          error = validateNameAr(value) || "";
          break;
        case "nameEn":
          error = validateNameEn(value) || "";
          break;
        case "descriptionAr":
          error = validateDescriptionAr(value) || "";
          break;
        case "descriptionEn":
          error = validateDescriptionEn(value) || "";
          break;
        case "rulesAr":
          error = validateRulesAr(value) || "";
          break;
        case "rulesEn":
          error = validateRulesEn(value) || "";
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
    [
      validateNameAr,
      validateNameEn,
      validateDescriptionAr,
      validateDescriptionEn,
      validateRulesAr,
      validateRulesEn,
    ],
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
