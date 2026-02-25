import { City, CreateCityInput } from "@/gql/graphql";
import type { GeoJSONPolygon } from "@/components/shared/PolygonMapPicker";
import { useEffect } from "react";
import { create } from "zustand";

interface FormState {
  form: CreateCityInput;
  setForm: (form: Partial<CreateCityInput>) => void;
  reset: () => void;
}

const initialForm: CreateCityInput = {
  nameAr: "",
  nameEn: "",
  countryId: "",
  geoBoundary: null,
};

export const useForm = create<FormState>((set) => ({
  form: { ...initialForm },
  setForm: (form) =>
    set((state) => ({
      form: {
        ...state.form,
        ...form,
      },
    })),
  reset: () =>
    set(() => ({
      form: { ...initialForm },
    })),
}));

export const useManageForm = (id: string, city?: City | null) => {
  const form = useForm((state) => state.form);
  const setForm = useForm((state) => state.setForm);
  const reset = useForm((state) => state.reset);

  useEffect(() => {
    setForm({
      nameAr: city?.nameAr || "",
      nameEn: city?.nameEn || "",
      countryId: city?.countryId || "",
      geoBoundary: (city?.geoBoundary as GeoJSONPolygon | null) ?? null,
    });
  }, [city?.nameAr, city?.nameEn, city?.countryId, city?.geoBoundary, setForm]);

  return { form, setForm, reset };
};

