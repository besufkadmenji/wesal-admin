"use client";

import { statusMap } from "@/components/app/Banks/renderCell";
import {
  AppForm,
  FormSection,
  FormType,
} from "@/components/app/shared/forms/AppForm";
import { FormInput } from "@/components/app/shared/forms/FormInput";
import { FormSelect } from "@/components/app/shared/forms/FormSelect";
import { useDict } from "@/hooks/useDict";
import { AppLoading } from "../../shared/AppLoading";
import { useBankById } from "../useBanks";

export const ViewBank = ({ id }: { id: string }) => {
  const { bank } = useBankById(id);
  const dict = useDict();

  return !bank ? (
    <AppLoading className="h-[84vh]" />
  ) : (
    <div className="grid grid-cols-1">
      <AppForm type={FormType.Banks} action="view">
        <FormSection title={dict.edit_bank_form.sections.bank_information}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormInput
              label={dict.edit_bank_form.labels.bank_name_ar}
              placeholder={dict.edit_bank_form.placeholders.bank_name_ar}
              value={bank.nameAr}
              onChange={(value: string): void => {}}
              readOnly
            />
            <FormInput
              label={dict.edit_bank_form.labels.name_en}
              placeholder={dict.edit_bank_form.placeholders.name_en}
              value={bank.nameEn}
              onChange={(value: string): void => {}}
              readOnly
            />
            <FormSelect
              label={dict.add_new_bank_form.labels.status}
              placeholder={dict.add_new_bank_form.labels.status}
              value={bank.status}
              onChange={(value: string): void => {}}
              options={Object.entries(statusMap(dict)).map(([key, value]) => ({
                label: value,
                key: key,
              }))}
              readOnly
            />
          </div>
        </FormSection>
      </AppForm>
    </div>
  );
};
