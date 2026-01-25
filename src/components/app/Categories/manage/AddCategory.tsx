"use client";

import {
  AppForm,
  FormSection,
  FormType,
} from "@/components/app/shared/forms/AppForm";
import { FormInput } from "@/components/app/shared/forms/FormInput";
import { UploadInput } from "@/components/app/shared/UploadInput";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSetting } from "../../Settings/useSettings";
import { FormAreaInput } from "../../shared/forms/FormAreaInput";
import { useForm } from "./useForm";
import { useFormValidation } from "./useFormValidation";
import { useManageCategory } from "./useManageCategory";

export const AddCategory = () => {
  const { form, setForm, reset, imageFile, setImageFile } = useForm();
  const dict = useDict();
  const router = useRouter();
  const { busy, createCategory } = useManageCategory();
  const { errors, validateForm, clearError } = useFormValidation({
    ...form,
    image: imageFile,
    existingImage: null,
  });
  const { setting } = useSetting("rules");
  const lng = useLang();
  useEffect(() => {
    if (setting) {
      setForm({
        rulesAr: setting.rulesAr ?? "",
        rulesEn: setting.rulesEn ?? "",
      });
    }
  }, [setForm, setting]);

  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);
  return (
    <>
      <div className="grid grid-cols-1">
        <AppForm
          type={FormType.Categories}
          onSubmit={() => {
            if (validateForm()) {
              createCategory();
            }
          }}
          onCancel={() => {
            router.push("/categories");
          }}
          busy={busy}
          action="add"
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
                value={form.rulesAr}
                onChange={(value: string): void => {
                  setForm({ rulesAr: value });
                  clearError("rulesAr");
                }}
                errorMessage={errors.rulesAr}
              />
              <FormAreaInput
                label={dict.add_new_category_form.labels.rules_en}
                placeholder={dict.add_new_category_form.placeholders.rules_en}
                value={form.rulesEn}
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
                  onChange={(file?: File): void => {
                    setImageFile(file || null);
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
        </AppForm>
      </div>
    </>
  );
};
