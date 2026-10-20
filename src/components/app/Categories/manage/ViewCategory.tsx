"use client";

import { useManageForm } from "@/components/app/Categories/manage/useForm";
import { useCategories } from "@/components/app/Categories/useCategories";
import {
  AppForm,
  FormSection,
  FormType,
} from "@/components/app/shared/forms/AppForm";
import { FormAreaInput } from "@/components/app/shared/forms/FormAreaInput";
import { FormInput } from "@/components/app/shared/forms/FormInput";
import { FormSelect } from "@/components/app/shared/forms/FormSelect";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import { useEffect } from "react";
import { DetailGate } from "@/components/app/shared/states/DetailGate";
import { useCategoryById } from "../useCategories";
import { UploadInput } from "@/components/app/shared/UploadInput";
import { dataUrl } from "@/config/url";
import Image from "next/image";
import { useAppRouter } from "@/hooks/useAppRouter";
import { CategoryContractSettingsFields } from "./CategoryContractSettingsFields";

export const ViewCategory = ({ id }: { id: string }) => {
  const { category, isLoading, refetch } = useCategoryById(id);

  const { form, setForm, reset } = useManageForm(id, category);
  const dict = useDict();
  const router = useAppRouter();
  const lng = useLang();

  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  return (
    <DetailGate
      isLoading={isLoading}
      data={category}
      onRetry={() => void refetch()}
      backHref="/categories"
    >
      {(category) => (
        <div className="grid grid-cols-1">
          <AppForm type={FormType.Categories} action="view">
            <FormSection
              title={dict.add_new_category_form.sections.category_information}
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormInput
                  label={dict.add_new_category_form.labels.category_name_ar}
                  placeholder={
                    dict.add_new_category_form.placeholders.category_name_ar
                  }
                  value={category.nameAr}
                  onChange={(value: string): void => {}}
                  readOnly
                />
                <FormInput
                  label={dict.add_new_category_form.labels.category_name_en}
                  placeholder={
                    dict.add_new_category_form.placeholders.category_name_en
                  }
                  value={category.nameEn}
                  onChange={(value: string): void => {}}
                  readOnly
                />
                <FormAreaInput
                  label={dict.add_new_category_form.labels.category_desc_ar}
                  placeholder={
                    dict.add_new_category_form.placeholders.category_desc_ar
                  }
                  value={form.descriptionAr}
                  onChange={(value: string): void => {
                    setForm({ descriptionAr: value });
                  }}
                  readOnly
                />
                <FormAreaInput
                  label={dict.add_new_category_form.labels.category_desc_en}
                  placeholder={
                    dict.add_new_category_form.placeholders.category_desc_en
                  }
                  value={form.descriptionEn}
                  onChange={(value: string): void => {
                    setForm({ descriptionEn: value });
                  }}
                  readOnly
                />
                <FormAreaInput
                  label={dict.add_new_category_form.labels.rules_ar}
                  placeholder={dict.add_new_category_form.placeholders.rules_ar}
                  value={form.rulesAr ?? "-"}
                  onChange={(value: string): void => {}}
                  readOnly
                />
                <FormAreaInput
                  label={dict.add_new_category_form.labels.rules_en}
                  placeholder={dict.add_new_category_form.placeholders.rules_en}
                  value={form.rulesEn ?? "-"}
                  onChange={(value: string): void => {}}
                  readOnly
                />
                <div className="col-span-2 grid grid-cols-1 justify-items-center gap-4">
                  <div className="relative size-60">
                    <Image
                      src={`${dataUrl}/files/${category.image}`}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </FormSection>
            <FormSection title={dict.category_contract_settings.section_title}>
              <CategoryContractSettingsFields form={form} readOnly />
            </FormSection>
          </AppForm>
        </div>
      )}
    </DetailGate>
  );
};
