import { City, CreateCityInput } from "@/gql/graphql";
import { useEffect } from "react";
import { create } from "zustand";

interface FormState {
  form: CreateCityInput;
  setForm: (form: Partial<CreateCityInput>) => void;
  reset: () => void;
}

export const useForm = create<FormState>((set) => ({
  form: {
    nameAr: "",
    nameEn: "",
    countryId: "",
  },
  setForm: (form) =>
    set((state) => ({
      form: {
        ...state.form,
        ...form,
      },
    })),
  reset: () =>
    set(() => ({
      form: {
        nameAr: "",
        nameEn: "",
        countryId: "",
      },
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
    });
  }, [city?.nameAr, city?.nameEn, city?.countryId, setForm]);

  return { form, setForm, reset };
};
