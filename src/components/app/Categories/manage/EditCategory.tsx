"use client";

import { DetailGate } from "@/components/app/shared/states/DetailGate";
import {
  AppForm,
  FormSection,
  FormType,
} from "@/components/app/shared/forms/AppForm";
import { FormAreaInput } from "@/components/app/shared/forms/FormAreaInput";
import { FormInput } from "@/components/app/shared/forms/FormInput";
import { UploadInput } from "@/components/app/shared/UploadInput";
import { useAppRouter } from "@/hooks/useAppRouter";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import { useEffect } from "react";
import { useCategoryById } from "../useCategories";
import { useForm, useManageForm } from "./useForm";
import { useFormValidation } from "./useFormValidation";
import { useManageCategory } from "./useManageCategory";
import { CategoryContractSettingsFields } from "./CategoryContractSettingsFields";

export const EditCategory = ({ id }: { id: string }) => {
  const { category, isLoading, refetch } = useCategoryById(id);
  const lng = useLang();
  const { form, setForm, reset } = useManageForm(id, category);
  const imageFile = useForm((state) => state.imageFile);
  const setImageFile = useForm((state) => state.setImageFile);
  const dict = useDict();
  const router = useAppRouter();
  const { busy, updateCategory } = useManageCategory();
  const { errors, validateForm, clearError } = useFormValidation({
    ...form,
    rulesAr: form.rulesAr ?? undefined,
    rulesEn: form.rulesEn ?? undefined,
    image: imageFile,
    existingImage: form?.image || null,
  });
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
          <AppForm
            type={FormType.Categories}
            onSubmit={() => {
              if (validateForm()) {
                updateCategory(id);
              }
            }}
            onCancel={() => {
              router.push("/categories");
            }}
            busy={busy}
            action="edit"
          >
            <FormSection
              title={dict.add_new_category_form.sections.category_information}
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormInput
                  label={dict.add_new_category_form.labels.category_name_ar}
                  placeholder={
                    dict.add_new_category_form.placeholders.category_name_ar
                  }
                  value={form.nameAr}
                  onChange={(value: string): void => {
                    setForm({ nameAr: value });
                    clearError("nameAr");
                  }}
                  errorMessage={errors.nameAr}
                />
                <FormInput
                  label={dict.add_new_category_form.labels.category_name_en}
                  placeholder={
                    dict.add_new_category_form.placeholders.category_name_en
                  }
                  value={form.nameEn}
                  onChange={(value: string): void => {
                    setForm({ nameEn: value });
                    clearError("nameEn");
                  }}
                  errorMessage={errors.nameEn}
                />
                <FormAreaInput
                  label={dict.add_new_category_form.labels.category_desc_ar}
                  placeholder={
                    dict.add_new_category_form.placeholders.category_desc_ar
                  }
                  value={form.descriptionAr}
                  onChange={(value: string): void => {
                    setForm({ descriptionAr: value });
                    clearError("descriptionAr");
                  }}
                  errorMessage={errors.descriptionAr}
                />
                <FormAreaInput
                  label={dict.add_new_category_form.labels.category_desc_en}
                  placeholder={
                    dict.add_new_category_form.placeholders.category_desc_en
                  }
                  value={form.descriptionEn}
                  onChange={(value: string): void => {
                    setForm({ descriptionEn: value });
                    clearError("descriptionEn");
                  }}
                  errorMessage={errors.descriptionEn}
                />

                <FormAreaInput
                  label={dict.add_new_category_form.labels.rules_ar}
                  placeholder={dict.add_new_category_form.placeholders.rules_ar}
                  value={form.rulesAr ?? ""}
                  onChange={(value: string): void => {
                    setForm({ rulesAr: value });
                    clearError("rulesAr");
                  }}
                  errorMessage={errors.rulesAr}
                />
                <FormAreaInput
                  label={dict.add_new_category_form.labels.rules_en}
                  placeholder={dict.add_new_category_form.placeholders.rules_en}
                  value={form.rulesEn ?? ""}
                  onChange={(value: string): void => {
                    setForm({ rulesEn: value });
                    clearError("rulesEn");
                  }}
                  errorMessage={errors.rulesEn}
                />
                <div className="col-span-2 grid grid-cols-1 gap-4">
                  <UploadInput
                    label={dict.add_new_category_form.image.attach}
                    desc={dict.add_new_category_form.image.desc}
                    file={imageFile}
                    initUrl={
                      form.image !== ""
                        ? `${process.env.NEXT_PUBLIC_DATA}/files/${form.image}`
                        : undefined
                    }
                    onChange={(file?: File): void => {
                      setImageFile(file || null);
                      setForm({ image: "" });
                      clearError("image");
                    }}
                    accept={{
                      "image/jpeg": [],
                      "image/png": [],
                    }}
                    errorMessage={errors.image}
                  />
                </div>
              </div>
            </FormSection>
            <FormSection title={dict.category_contract_settings.section_title}>
              <CategoryContractSettingsFields
                form={form}
                setForm={setForm}
                errors={errors}
                clearError={clearError}
              />
            </FormSection>
          </AppForm>
        </div>
      )}
    </DetailGate>
  );
};
