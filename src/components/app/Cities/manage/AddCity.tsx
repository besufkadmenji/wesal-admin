"use client";

import { useCountries } from "@/components/app/Cities/useCities";
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
import { FormSelect } from "../../shared/forms/FormSelect";
import { useForm } from "./useForm";
import { useFormValidation } from "./useFormValidation";
import { useManageCity } from "./useManageCity";

export const AddCity = () => {
  const { form, setForm, reset } = useForm();
  const { countries } = useCountries();
  const dict = useDict();
  const router = useRouter();
  const { busy, createCity } = useManageCity();
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
          type={FormType.Cities}
          onSubmit={() => {
            if (validateForm()) {
              createCity();
            }
          }}
          onCancel={() => {
            router.push("/cities");
          }}
          busy={busy}
          action="add"
        >
          <FormSection title={dict.add_new_city_form.sections.city_information}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormInput
                label={dict.add_new_city_form.labels.city_name_ar}
                placeholder={dict.add_new_city_form.placeholders.city_name_ar}
                value={form.nameAr}
                onChange={(value: string): void => {
                  setForm({ nameAr: value });
                  clearError("nameAr");
                }}
                errorMessage={errors.nameAr}
              />
              <FormInput
                label={dict.add_new_city_form.labels.city_name_en}
                placeholder={dict.add_new_city_form.placeholders.city_name_en}
                value={form.nameEn}
                onChange={(value: string): void => {
                  setForm({ nameEn: value });
                  clearError("nameEn");
                }}
                errorMessage={errors.nameEn}
              />

              <FormSelect
                label={dict.add_new_city_form.labels.country}
                placeholder={dict.add_new_city_form.placeholders.country}
                value={form.countryId?.toString() || ""}
                onChange={(value: string): void => {
                  setForm({
                    countryId: value as unknown as string,
                  });
                  clearError("countryId");
                }}
                options={
                  countries?.map((country) => ({
                    label: lng === "ar" ? country.nameAr : country.nameEn || "",
                    key: country.id,
                  })) ?? []
                }
                errorMessage={errors.countryId}
              />
            </div>
          </FormSection>
        </AppForm>
      </div>
    </>
  );
};
