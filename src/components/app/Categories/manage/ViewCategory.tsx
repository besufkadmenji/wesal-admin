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
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AppLoading } from "../../shared/AppLoading";
import { useCategoryById } from "../useCategories";

export const ViewCategory = ({ id }: { id: string }) => {
  const { category } = useCategoryById(id);
  const { categories } = useCategories({ parentId: null });

  const { form, setForm, reset } = useManageForm(id, category);
  const dict = useDict();
  const router = useRouter();
  const lng = useLang();

  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  return !category ? (
    <AppLoading className="h-[84vh]" />
  ) : (
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
            {form.parentId && (
              <FormSelect
                label={dict.add_new_category_form.labels.parent}
                placeholder={dict.add_new_category_form.labels.parent}
                value={form.parentId?.toString() || ""}
                onChange={(value: string): void => {
                  setForm({
                    parentId: value as unknown as string | null,
                  });
                }}
                options={
                  categories?.map((category) => ({
                    label:
                      lng === "ar" ? category.nameAr : category.nameEn || "",
                    key: category.id,
                  })) ?? []
                }
                readOnly
              />
            )}
          </div>
        </FormSection>
      </AppForm>
    </div>
  );
};
