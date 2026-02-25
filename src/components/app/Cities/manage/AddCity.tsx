"use client";

import {
  AppForm,
  FormSection,
  FormType,
} from "@/components/app/shared/forms/AppForm";
import { FormInput } from "@/components/app/shared/forms/FormInput";
import {
  PolygonMapPicker,
  type GeoJSONPolygon,
} from "@/components/shared/PolygonMapPicker";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "./useForm";
import { useFormValidation } from "./useFormValidation";
import { useManageCity } from "./useManageCity";

export const AddCity = () => {
  const { form, setForm, reset } = useForm();
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
            </div>
          </FormSection>

          <FormSection title={dict.add_new_city_form.sections.geo_boundary}>
            <PolygonMapPicker
              value={(form.geoBoundary as GeoJSONPolygon | null) ?? null}
              onChange={(polygon) => {
                console.log("Selected polygon:", polygon);
                return setForm({ geoBoundary: polygon });
              }}
            />
          </FormSection>
        </AppForm>
      </div>
    </>
  );
};
