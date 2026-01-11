"use client";

import {
  AppForm,
  FormSection,
  FormType,
} from "@/components/app/shared/forms/AppForm";
import { useDict } from "@/hooks/useDict";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FormAreaInput } from "../../shared/forms/FormAreaInput";
import { useForm } from "./useForm";
import { useFormValidation } from "./useFormValidation";
import { useManageFaq } from "./useManageFaq";

export const AddFaq = () => {
  const { form, setForm, reset } = useForm();
  const dict = useDict();
  const router = useRouter();
  const { busy, createFaq } = useManageFaq();
  const { errors, validateForm, clearError } = useFormValidation(form);
  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);
  return (
    <>
      <div className="grid grid-cols-1">
        <AppForm
          type={FormType.Faqs}
          onSubmit={() => {
            if (validateForm()) {
              createFaq();
            }
          }}
          onCancel={() => {
            router.push("/content/faq");
          }}
          busy={busy}
          action="add"
        >
          <FormSection title={dict.add_new_faq_form.sections.faq_information}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormAreaInput
                label={dict.add_new_faq_form.labels.questionAr}
                placeholder={dict.add_new_faq_form.placeholders.questionAr}
                value={form.questionAr}
                onChange={(value: string): void => {
                  setForm({ questionAr: value });
                  clearError("questionAr");
                }}
                errorMessage={errors.nameAr}
              />
              <FormAreaInput
                label={dict.add_new_faq_form.labels.questionEn}
                placeholder={dict.add_new_faq_form.placeholders.questionEn}
                value={form.questionEn}
                onChange={(value: string): void => {
                  setForm({ questionEn: value });
                  clearError("questionEn");
                }}
                errorMessage={errors.nameEn}
              />
              <FormAreaInput
                label={dict.add_new_faq_form.labels.answerAr}
                placeholder={dict.add_new_faq_form.placeholders.answerAr}
                value={form.answerAr}
                onChange={(value: string): void => {
                  setForm({ answerAr: value });
                  clearError("answerAr");
                }}
                errorMessage={errors.descriptionAr}
              />
              <FormAreaInput
                label={dict.add_new_faq_form.labels.answerEn}
                placeholder={dict.add_new_faq_form.placeholders.answerEn}
                value={form.answerEn}
                onChange={(value: string): void => {
                  setForm({ answerEn: value });
                  clearError("answerEn");
                }}
                errorMessage={errors.descriptionEn}
              />
            </div>
          </FormSection>
        </AppForm>
      </div>
    </>
  );
};
