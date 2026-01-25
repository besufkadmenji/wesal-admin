import { useDict } from "@/hooks/useDict";
import { useCallback, useMemo, useState } from "react";

const NAME_MIN_LENGTH = 3;
const NAME_MAX_LENGTH = 100;
const DESCRIPTION_MIN_LENGTH = 10;
const DESCRIPTION_MAX_LENGTH = 500;
const RULES_MIN_LENGTH = 10;
const RULES_MAX_LENGTH = 500;
const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB

interface CategoryForm {
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  rulesAr?: string;
  rulesEn?: string;
  parentId?: string | null;
  image?: File | null;
  existingImage?: string | null;
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

  const validateImage = useCallback(
    (
      file: File | null | undefined,
      existingImage?: string | null,
    ): string | null => {
      // If no new file and there's an existing image, it's valid (for edit mode)
      if (!file && existingImage) {
        return null;
      }
      // If no file and no existing image, it's required
      if (!file) {
        return dict.add_new_category_form.validation.imageRequired;
      }
      if (!file.type.startsWith("image/")) {
        return dict.add_new_category_form.validation.imageInvalidFormat;
      }
      if (file.size > MAX_IMAGE_SIZE) {
        return dict.add_new_category_form.validation.imageMaxSize;
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

    const imageError = validateImage(form.image, form.existingImage);
    if (imageError) newErrors.image = imageError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [
    form.nameAr,
    form.nameEn,
    form.descriptionAr,
    form.descriptionEn,
    form.rulesAr,
    form.rulesEn,
    form.image,
    form.existingImage,
    validateNameAr,
    validateNameEn,
    validateDescriptionAr,
    validateDescriptionEn,
    validateRulesAr,
    validateRulesEn,
    validateImage,
  ]);

  const isFormValid = useMemo(() => {
    const nameArError = validateNameAr(form.nameAr);
    const nameEnError = validateNameEn(form.nameEn);
    const descriptionArError = validateDescriptionAr(form.descriptionAr);
    const descriptionEnError = validateDescriptionEn(form.descriptionEn);
    const rulesArError = validateRulesAr(form.rulesAr || "");
    const rulesEnError = validateRulesEn(form.rulesEn || "");
    const imageError = validateImage(form.image, form.existingImage);

    return (
      !nameArError &&
      !nameEnError &&
      !descriptionArError &&
      !descriptionEnError &&
      !rulesArError &&
      !rulesEnError &&
      !imageError
    );
  }, [
    form.nameAr,
    form.nameEn,
    form.descriptionAr,
    form.descriptionEn,
    form.rulesAr,
    form.rulesEn,
    form.image,
    form.existingImage,
    validateNameAr,
    validateNameEn,
    validateDescriptionAr,
    validateDescriptionEn,
    validateRulesAr,
    validateRulesEn,
    validateImage,
  ]);

  const validateField = useCallback(
    (field: keyof CategoryForm, value: string | File | null | undefined) => {
      let error = "";

      switch (field) {
        case "nameAr":
          error = validateNameAr(value as string) || "";
          break;
        case "nameEn":
          error = validateNameEn(value as string) || "";
          break;
        case "descriptionAr":
          error = validateDescriptionAr(value as string) || "";
          break;
        case "descriptionEn":
          error = validateDescriptionEn(value as string) || "";
          break;
        case "rulesAr":
          error = validateRulesAr(value as string) || "";
          break;
        case "rulesEn":
          error = validateRulesEn(value as string) || "";
          break;
        case "image":
          error =
            validateImage(
              value as File | null | undefined,
              form.existingImage,
            ) || "";
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
      validateImage,
      form.existingImage,
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
