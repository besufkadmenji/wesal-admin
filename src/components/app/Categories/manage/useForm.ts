import { Category, CreateCategoryInput } from "@/gql/graphql";
import { useEffect } from "react";
import { create } from "zustand";

interface FormState {
  form: CreateCategoryInput;
  setForm: (form: Partial<CreateCategoryInput>) => void;
  reset: () => void;
}

export const useForm = create<FormState>((set) => ({
  form: {
    nameAr: "",
    nameEn: "",
    descriptionAr: "",
    descriptionEn: "",
    parentId: null,
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
        descriptionAr: "",
        descriptionEn: "",
        parentId: null,
      },
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
      parentId: category?.parentId || null,
    });
  }, [
    category?.descriptionAr,
    category?.descriptionEn,
    category?.nameAr,
    category?.nameEn,
    category?.parentId,
    setForm,
  ]);

  return { form, setForm, reset };
};
