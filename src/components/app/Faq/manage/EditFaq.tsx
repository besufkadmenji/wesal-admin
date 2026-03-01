"use client";

import { AppLoading } from "@/components/app/shared/AppLoading";
import {
  AppForm,
  FormSection,
  FormType,
} from "@/components/app/shared/forms/AppForm";
import { FormAreaInput } from "@/components/app/shared/forms/FormAreaInput";
import { useDict } from "@/hooks/useDict";
import { useEffect } from "react";
import { useFaq } from "../useFaq";
import { useManageForm } from "./useForm";
import { useFormValidation } from "./useFormValidation";
import { useManageFaq } from "./useManageFaq";
import { useAppRouter } from "@/hooks/useAppRouter";

export const EditFaq = ({ id }: { id: string }) => {
  const { data } = useFaq(id);
  const { form, setForm, reset } = useManageForm(id, data);
  const dict = useDict();
  const router = useAppRouter();
  const { busy, updateFaq } = useManageFaq();
  const { errors, validateForm, clearError } = useFormValidation(form);
  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);
  return !data ? (
    <AppLoading className="h-[84vh]" />
  ) : (
    <div className="grid grid-cols-1">
      <AppForm
        type={FormType.Faqs}
        onSubmit={() => {
          if (validateForm()) {
            updateFaq(id);
          }
        }}
        onCancel={() => {
          router.push("/content/faq");
        }}
        busy={busy}
        action="edit"
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
  );
};
