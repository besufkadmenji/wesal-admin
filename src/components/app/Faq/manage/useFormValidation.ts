import { useDict } from "@/hooks/useDict";
import { useCallback, useMemo, useState } from "react";

const NAME_MIN_LENGTH = 3;
const NAME_MAX_LENGTH = 100;
const DESCRIPTION_MIN_LENGTH = 10;
const DESCRIPTION_MAX_LENGTH = 500;

interface FaqForm {
  questionAr: string;
  questionEn: string;
  answerAr: string;
  answerEn: string;
}

export const useFormValidation = (form: FaqForm) => {
  const dict = useDict();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateQuestionAr = useCallback(
    (value: string): string | null => {
      if (!value || value.trim() === "") {
        return dict.add_new_faq_form.validation.questionArRequired;
      }
      if (value.trim().length < NAME_MIN_LENGTH) {
        return dict.add_new_faq_form.validation.questionArMinLength;
      }
      if (value.trim().length > NAME_MAX_LENGTH) {
        return dict.add_new_faq_form.validation.questionArMaxLength;
      }
      return null;
    },
    [dict],
  );

  const validateQuestionEn = useCallback(
    (value: string): string | null => {
      if (!value || value.trim() === "") {
        return dict.add_new_faq_form.validation.questionEnRequired;
      }
      if (value.trim().length < NAME_MIN_LENGTH) {
        return dict.add_new_faq_form.validation.questionEnMinLength;
      }
      if (value.trim().length > NAME_MAX_LENGTH) {
        return dict.add_new_faq_form.validation.questionEnMaxLength;
      }
      return null;
    },
    [dict],
  );

  const validateAnswerAr = useCallback(
    (value: string): string | null => {
      if (!value || value.trim() === "") {
        return dict.add_new_faq_form.validation.answerArRequired;
      }
      if (value.trim().length < DESCRIPTION_MIN_LENGTH) {
        return dict.add_new_faq_form.validation.answerArMinLength;
      }
      if (value.trim().length > DESCRIPTION_MAX_LENGTH) {
        return dict.add_new_faq_form.validation.answerArMaxLength;
      }
      return null;
    },
    [dict],
  );

  const validateAnswerEn = useCallback(
    (value: string): string | null => {
      if (!value || value.trim() === "") {
        return dict.add_new_faq_form.validation.answerEnRequired;
      }
      if (value.trim().length < DESCRIPTION_MIN_LENGTH) {
        return dict.add_new_faq_form.validation.answerEnMinLength;
      }
      if (value.trim().length > DESCRIPTION_MAX_LENGTH) {
        return dict.add_new_faq_form.validation.answerEnMaxLength;
      }
      return null;
    },
    [dict],
  );

  const validateForm = useCallback(() => {
    const newErrors: { [key: string]: string } = {};

    const questionArError = validateQuestionAr(form.questionAr);
    if (questionArError) newErrors.questionAr = questionArError;

    const questionEnError = validateQuestionEn(form.questionEn);
    if (questionEnError) newErrors.questionEn = questionEnError;

    const answerArError = validateAnswerAr(form.answerAr);
    if (answerArError) newErrors.answerAr = answerArError;

    const answerEnError = validateAnswerEn(form.answerEn);
    if (answerEnError) newErrors.answerEn = answerEnError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [
    form.questionAr,
    form.questionEn,
    form.answerAr,
    form.answerEn,
    validateQuestionAr,
    validateQuestionEn,
    validateAnswerAr,
    validateAnswerEn,
  ]);

  const isFormValid = useMemo(() => {
    const questionArError = validateQuestionAr(form.questionAr);
    const questionEnError = validateQuestionEn(form.questionEn);
    const answerArError = validateAnswerAr(form.answerAr);
    const answerEnError = validateAnswerEn(form.answerEn);

    return (
      !questionArError && !questionEnError && !answerArError && !answerEnError
    );
  }, [
    form.questionAr,
    form.questionEn,
    form.answerAr,
    form.answerEn,
    validateQuestionAr,
    validateQuestionEn,
    validateAnswerAr,
    validateAnswerEn,
  ]);

  const validateField = useCallback(
    (field: keyof FaqForm, value: string) => {
      let error = "";

      switch (field) {
        case "questionAr":
          error = validateQuestionAr(value) || "";
          break;
        case "questionEn":
          error = validateQuestionEn(value) || "";
          break;
        case "answerAr":
          error = validateAnswerAr(value) || "";
          break;
        case "answerEn":
          error = validateAnswerEn(value) || "";
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
      validateQuestionAr,
      validateQuestionEn,
      validateAnswerAr,
      validateAnswerEn,
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
