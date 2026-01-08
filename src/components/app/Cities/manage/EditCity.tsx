"use client";

import { useCountries } from "@/components/app/Cities/useCities";
import { AppLoading } from "@/components/app/shared/AppLoading";
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
import { useCityById } from "../useCities";
import { useManageForm } from "./useForm";
import { useFormValidation } from "./useFormValidation";
import { useManageCity } from "./useManageCity";

export const EditCity = ({ id }: { id: string }) => {
  const { city } = useCityById(id);
  const lng = useLang();
  const { countries } = useCountries();
  const { form, setForm, reset } = useManageForm(id, city);
  const dict = useDict();
  const router = useRouter();
  const { busy, updateCity } = useManageCity();
  const { errors, validateForm, clearError } = useFormValidation(form);
  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);
  return !city ? (
    <AppLoading className="h-[84vh]" />
  ) : (
    <div className="grid grid-cols-1">
      <AppForm
        type={FormType.Cities}
        onSubmit={() => {
          if (validateForm()) {
            updateCity(id);
          }
        }}
        onCancel={() => {
          router.push("/cities");
        }}
        busy={busy}
        action="edit"
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
              label={dict.add_new_city_form.labels.parent}
              placeholder={dict.add_new_city_form.labels.parent}
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
              errorMessage={errors.status}
            />
          </div>
        </FormSection>
      </AppForm>
    </div>
  );
};
