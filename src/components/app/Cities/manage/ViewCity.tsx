"use client";

import { useManageForm } from "@/components/app/Cities/manage/useForm";
import { useCountries } from "@/components/app/Cities/useCities";
import {
  AppForm,
  FormSection,
  FormType,
} from "@/components/app/shared/forms/AppForm";
import { FormInput } from "@/components/app/shared/forms/FormInput";
import { FormSelect } from "@/components/app/shared/forms/FormSelect";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AppLoading } from "../../shared/AppLoading";
import { useCityById } from "../useCities";

export const ViewCity = ({ id }: { id: string }) => {
  const { city } = useCityById(id);
  const { countries } = useCountries();

  const { form, setForm, reset } = useManageForm(id, city);
  const dict = useDict();
  const router = useRouter();
  const lng = useLang();

  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  return !city || !countries ? (
    <AppLoading className="h-[84vh]" />
  ) : (
    <div className="grid grid-cols-1">
      <AppForm type={FormType.Cities} action="view">
        <FormSection title={dict.add_new_city_form.sections.city_information}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormInput
              label={dict.add_new_city_form.labels.city_name_ar}
              placeholder={dict.add_new_city_form.placeholders.city_name_ar}
              value={city.nameAr}
              onChange={(value: string): void => {}}
              readOnly
            />
            <FormInput
              label={dict.add_new_city_form.labels.city_name_en}
              placeholder={dict.add_new_city_form.placeholders.city_name_en}
              value={city.nameEn}
              onChange={(value: string): void => {}}
              readOnly
            />
            {form.countryId && (
              <FormSelect
                label={dict.add_new_city_form.labels.country}
                placeholder={dict.add_new_city_form.placeholders.country}
                value={form.countryId?.toString() || ""}
                onChange={(value: string): void => {
                  setForm({
                    countryId: value as unknown as string,
                  });
                }}
                options={
                  countries?.map((country) => ({
                    label: lng === "ar" ? country.nameAr : country.nameEn || "",
                    key: country.id,
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
