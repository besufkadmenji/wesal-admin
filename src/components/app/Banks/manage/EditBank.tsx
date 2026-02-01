"use client";

import { statusMap } from "@/components/app/Banks/renderCell";
import { AppLoading } from "@/components/app/shared/AppLoading";
import {
  AppForm,
  FormSection,
  FormType,
} from "@/components/app/shared/forms/AppForm";
import { FormInput } from "@/components/app/shared/forms/FormInput";
import { FormSelect } from "@/components/app/shared/forms/FormSelect";
import { BankStatus } from "@/gql/graphql";
import { useDict } from "@/hooks/useDict";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useBankById } from "../useBanks";
import { useManageForm } from "./useForm";
import { useFormValidation } from "./useFormValidation";
import { useManageBank } from "./useManageBank";

export const EditBank = ({ id }: { id: string }) => {
  const { bank } = useBankById(id);
  const { form, setForm, reset } = useManageForm(id, bank);
  const dict = useDict();
  const router = useRouter();
  const { busy, updateBank } = useManageBank();
  const { errors, validateForm, clearError } = useFormValidation(form);
  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);
  return !bank ? (
    <AppLoading className="h-[84vh]" />
  ) : (
    <div className="grid grid-cols-1">
      <AppForm
        type={FormType.Banks}
        onSubmit={() => {
          if (validateForm()) {
            updateBank(id);
          }
        }}
        onCancel={() => {
          router.push("/banks");
        }}
        busy={busy}
        action="edit"
      >
        <FormSection title={dict.edit_bank_form.sections.bank_information}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormInput
              label={dict.edit_bank_form.labels.bank_name_ar}
              placeholder={dict.edit_bank_form.placeholders.bank_name_ar}
              value={form.nameAr}
              onChange={(value: string): void => {
                setForm({ nameAr: value });
                clearError("nameAr");
              }}
              errorMessage={errors.nameAr}
            />
            <FormInput
              label={dict.edit_bank_form.labels.name_en}
              placeholder={dict.edit_bank_form.placeholders.name_en}
              value={form.nameEn}
              onChange={(value: string): void => {
                setForm({ nameEn: value });
                clearError("nameEn");
              }}
              errorMessage={errors.nameEn}
            />
            <FormSelect
              label={dict.edit_bank_form.labels.status}
              placeholder={dict.edit_bank_form.placeholders.status}
              value={form.status?.toString() || ""}
              onChange={(value: string): void => {
                setForm({
                  status: value as BankStatus,
                });
                clearError("status");
              }}
              options={Object.entries(statusMap(dict)).map(([key, value]) => ({
                label: value,
                key: key,
              }))}
              errorMessage={errors.status}
            />
          </div>
        </FormSection>
      </AppForm>
    </div>
  );
};
