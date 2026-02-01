import { Bank, BankStatus, CreateBankInput } from "@/gql/graphql";
import { useEffect } from "react";
import { create } from "zustand";

interface FormState {
  ready: boolean;
  setReady: (ready: boolean) => void;
  form: CreateBankInput;
  setForm: (form: Partial<CreateBankInput>) => void;
  reset: () => void;
}

export const useForm = create<FormState>((set) => ({
  ready: false,
  setReady: (ready) => set(() => ({ ready })),
  form: {
    nameAr: "",
    nameEn: "",
    status: BankStatus.Active,
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
      ready: false,
      form: {
        nameAr: "",
        nameEn: "",
        status: BankStatus.Active,
      },
    })),
}));

export const useManageForm = (id: string, bank?: Bank | null) => {
  const form = useForm((state) => state.form);
  const setForm = useForm((state) => state.setForm);
  const reset = useForm((state) => state.reset);
  const ready = useForm((state) => state.ready);
  const setReady = useForm((state) => state.setReady);

  useEffect(() => {
    if (!ready && bank) {
      setForm({
        nameAr: bank.nameAr ?? "",
        nameEn: bank.nameEn ?? "",
        status: bank.status ?? BankStatus.Active,
      });
      setReady(true);
    }
  }, [bank, ready, setForm, setReady]);

  return { form, setForm, reset, ready };
};
