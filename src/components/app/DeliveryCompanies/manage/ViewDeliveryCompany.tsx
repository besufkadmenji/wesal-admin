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
import { DetailGate } from "@/components/app/shared/states/DetailGate";
import { useDeliveryCompanyById } from "../useDeliveryCompanies";

export const ViewDeliveryCompany = ({ id }: { id: string }) => {
  const { deliveryCompany, isLoading, refetch } = useDeliveryCompanyById(id);
  const dict = useDict();

  return (
    <DetailGate
      isLoading={isLoading}
      data={deliveryCompany}
      onRetry={() => void refetch()}
      backHref="/delivery-companies"
    >
      {(deliveryCompany) => (
        <div className="grid grid-cols-1">
          <AppForm type={FormType.DeliveryCompanies} action="view">
            <FormSection
              title={
                dict.edit_delivery_company_form.sections
                  .delivery_company_information
              }
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormInput
                  label={
                    dict.edit_delivery_company_form.labels
                      .delivery_company_name_ar
                  }
                  placeholder={
                    dict.edit_delivery_company_form.placeholders
                      .delivery_company_name_ar
                  }
                  value={deliveryCompany.nameAr}
                  onChange={(value: string): void => {}}
                  readOnly
                />
                <FormInput
                  label={
                    dict.edit_delivery_company_form.labels
                      .delivery_company_name_en
                  }
                  placeholder={
                    dict.edit_delivery_company_form.placeholders
                      .delivery_company_name_en
                  }
                  value={deliveryCompany.nameEn}
                  onChange={(value: string): void => {}}
                  readOnly
                />
                <FormSelect
                  label={dict.edit_delivery_company_form.labels.status}
                  placeholder={
                    dict.edit_delivery_company_form.placeholders.status
                  }
                  value={deliveryCompany.status}
                  onChange={(value: string): void => {}}
                  options={Object.entries(statusMap(dict)).map(
                    ([key, value]) => ({
                      label: value,
                      key: key,
                    }),
                  )}
                  readOnly
                />
              </div>
            </FormSection>
          </AppForm>
        </div>
      )}
    </DetailGate>
  );
};
