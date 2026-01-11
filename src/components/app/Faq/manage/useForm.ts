import { Faq, CreateFaqInput } from "@/gql/graphql";
import { useEffect } from "react";
import { create } from "zustand";

interface FormState {
  form: CreateFaqInput;
  setForm: (form: Partial<CreateFaqInput>) => void;
  reset: () => void;
}

export const useForm = create<FormState>((set) => ({
  form: {
    answerAr: "",
    answerEn: "",
    questionAr: "",
    questionEn: "",
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
        answerAr: "",
        answerEn: "",
        questionAr: "",
        questionEn: "",
      },
    })),
}));

export const useManageForm = (id: string, faq?: Faq | null) => {
  const form = useForm((state) => state.form);
  const setForm = useForm((state) => state.setForm);
  const reset = useForm((state) => state.reset);

  useEffect(() => {
    setForm({
      questionEn: faq?.questionEn || "",
      questionAr: faq?.questionAr || "",
      answerEn: faq?.answerEn || "",
      answerAr: faq?.answerAr || "",
    });
  }, [faq, setForm]);

  return { form, setForm, reset };
};
