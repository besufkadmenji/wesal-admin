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
import { DeliveryCompanyStatus } from "@/gql/graphql";
import { useAppRouter } from "@/hooks/useAppRouter";
import { useDict } from "@/hooks/useDict";
import { useEffect } from "react";
import { useDeliveryCompanyById } from "../useDeliveryCompanies";
import { useManageForm } from "./useForm";
import { useFormValidation } from "./useFormValidation";
import { useManageDeliveryCompany } from "./useManageDeliveryCompany";

export const EditDeliveryCompany = ({ id }: { id: string }) => {
  const { deliveryCompany } = useDeliveryCompanyById(id);
  const { form, setForm, reset } = useManageForm(id, deliveryCompany);
  const dict = useDict();
  const router = useAppRouter();
  const { busy, updateDeliveryCompany } = useManageDeliveryCompany();
  const { errors, validateForm, clearError } = useFormValidation(form);
  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);
  return !deliveryCompany ? (
    <AppLoading className="h-[84vh]" />
  ) : (
    <div className="grid grid-cols-1">
      <AppForm
        type={FormType.Banks}
        onSubmit={() => {
          if (validateForm()) {
            updateDeliveryCompany(id);
          }
        }}
        onCancel={() => {
          router.push("/delivery-companies");
        }}
        busy={busy}
        action="edit"
      >
        <FormSection
          title={
            dict.edit_delivery_company_form.sections
              .delivery_company_information
          }
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormInput
              label={
                dict.edit_delivery_company_form.labels.delivery_company_name_ar
              }
              placeholder={
                dict.edit_delivery_company_form.placeholders
                  .delivery_company_name_ar
              }
              value={form.nameAr}
              onChange={(value: string): void => {
                setForm({ nameAr: value });
                clearError("nameAr");
              }}
              errorMessage={errors.nameAr}
            />
            <FormInput
              label={
                dict.edit_delivery_company_form.labels.delivery_company_name_en
              }
              placeholder={
                dict.edit_delivery_company_form.placeholders
                  .delivery_company_name_en
              }
              value={form.nameEn}
              onChange={(value: string): void => {
                setForm({ nameEn: value });
                clearError("nameEn");
              }}
              errorMessage={errors.nameEn}
            />
            <FormSelect
              label={dict.edit_delivery_company_form.labels.status}
              placeholder={dict.edit_delivery_company_form.placeholders.status}
              value={form.status?.toString() || ""}
              onChange={(value: string): void => {
                setForm({
                  status: value as DeliveryCompanyStatus,
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
