"use client";

import { useCategories } from "@/components/app/Categories/useCategories";
import {
  AppForm,
  FormSection,
  FormType,
} from "@/components/app/shared/forms/AppForm";
import { FormInput } from "@/components/app/shared/forms/FormInput";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FormAreaInput } from "../../shared/forms/FormAreaInput";
import { FormSelect } from "../../shared/forms/FormSelect";
import { useForm } from "./useForm";
import { useFormValidation } from "./useFormValidation";
import { useManageCategory } from "./useManageCategory";

export const AddCategory = () => {
  const { form, setForm, reset } = useForm();
  const { categories } = useCategories({ parentId: null });
  const dict = useDict();
  const router = useRouter();
  const { busy, createCategory } = useManageCategory();
  const { errors, validateForm, clearError } = useFormValidation(form);
  const lng = useLang();
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
              <FormSelect
                label={dict.add_new_category_form.labels.parent}
                placeholder={dict.add_new_category_form.labels.parent}
                value={form.parentId?.toString() || ""}
                onChange={(value: string): void => {
                  setForm({
                    parentId: value as unknown as string | null,
                  });
                  clearError("parentId");
                }}
                options={
                  categories?.map((category) => ({
                    label:
                      lng === "ar" ? category.nameAr : category.nameEn || "",
                    key: category.id,
                  })) ?? []
                }
                errorMessage={errors.status}
              />
            </div>
          </FormSection>
        </AppForm>
      </div>
    </>
  );
};
