"use client";

import { statusMap } from "@/components/app/Banks/renderCell";
import {
  AppForm,
  FormSection,
  FormType,
} from "@/components/app/shared/forms/AppForm";
import { FormInput } from "@/components/app/shared/forms/FormInput";
import { BankStatus } from "@/gql/graphql";
import { useDict } from "@/hooks/useDict";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FormSelect } from "../../shared/forms/FormSelect";
import { SuccessMessage } from "./SuccessMessage";
import { useForm } from "./useForm";
import { useFormValidation } from "./useFormValidation";
import { useManageBank } from "./useManageBank";

export const AddBank = () => {
  const { form, setForm, reset } = useForm();
  const dict = useDict();
  const router = useRouter();
  const { busy, createBank } = useManageBank();
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
          type={FormType.Banks}
          onSubmit={() => {
            if (validateForm()) {
              createBank();
            }
          }}
          onCancel={() => {
            router.push("/banks");
          }}
          busy={busy}
          action="add"
        >
          <FormSection title={dict.add_new_bank_form.sections.bank_information}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormInput
                label={dict.add_new_bank_form.labels.bank_name_ar}
                placeholder={dict.add_new_bank_form.placeholders.bank_name_ar}
                value={form.nameAr}
                onChange={(value: string): void => {
                  setForm({ nameAr: value });
                  clearError("nameAr");
                }}
                errorMessage={errors.nameAr}
              />
              <FormInput
                label={dict.add_new_bank_form.labels.name_en}
                placeholder={dict.add_new_bank_form.placeholders.name_en}
                value={form.nameEn}
                onChange={(value: string): void => {
                  setForm({ nameEn: value });
                  clearError("nameEn");
                }}
                errorMessage={errors.nameEn}
              />
              <FormSelect
                label={dict.add_new_bank_form.labels.status}
                placeholder={dict.add_new_bank_form.placeholders.status}
                value={form.status?.toString() || ""}
                onChange={(value: string): void => {
                  setForm({
                    status: value as BankStatus,
                  });
                  clearError("status");
                }}
                options={Object.entries(statusMap(dict)).map(
                  ([key, value]) => ({
                    label: value,
                    key: key,
                  }),
                )}
                errorMessage={errors.status}
              />
            </div>
          </FormSection>
        </AppForm>
      </div>
      <SuccessMessage />
    </>
  );
};
