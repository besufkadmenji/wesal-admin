import { Category, CreateCategoryInput } from "@/gql/graphql";
import { useEffect } from "react";
import { create } from "zustand";

interface FormState {
  form: CreateCategoryInput;
  imageFile?: File | null;
  setImageFile: (file: File | null) => void;
  setForm: (form: Partial<CreateCategoryInput>) => void;
  reset: () => void;
}

export const useForm = create<FormState>((set) => ({
  form: {
    nameAr: "",
    nameEn: "",
    descriptionAr: "",
    descriptionEn: "",
    image: "",
    rulesAr: "",
    rulesEn: "",
  },
  setForm: (form) =>
    set((state) => ({
      form: {
        ...state.form,
        ...form,
      },
    })),
  imageFile: null,
  setImageFile: (file) => set(() => ({ imageFile: file })),
  reset: () =>
    set(() => ({
      form: {
        nameAr: "",
        nameEn: "",
        descriptionAr: "",
        descriptionEn: "",
        image: "",
        rulesAr: "",
        rulesEn: "",
      },
      imageFile: null,
    })),
}));

export const useManageForm = (id: string, category?: Category | null) => {
  const form = useForm((state) => state.form);
  const setForm = useForm((state) => state.setForm);
  const reset = useForm((state) => state.reset);

  useEffect(() => {
    setForm({
      nameAr: category?.nameAr || "",
      nameEn: category?.nameEn || "",
      descriptionAr: category?.descriptionAr || "",
      descriptionEn: category?.descriptionEn || "",
      image: category?.image || "",
      rulesAr: category?.rulesAr || "",
      rulesEn: category?.rulesEn || "",
    });
  }, [category, setForm]);

  return { form, setForm, reset };
};
