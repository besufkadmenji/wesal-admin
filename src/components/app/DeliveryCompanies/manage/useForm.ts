import {
  CreateDeliveryCompanyInput,
  DeliveryCompany,
  DeliveryCompanyStatus,
} from "@/gql/graphql";
import { useEffect } from "react";
import { create } from "zustand";

interface FormState {
  ready: boolean;
  setReady: (ready: boolean) => void;
  form: CreateDeliveryCompanyInput;
  setForm: (form: Partial<CreateDeliveryCompanyInput>) => void;
  reset: () => void;
}

export const useForm = create<FormState>((set) => ({
  ready: false,
  setReady: (ready) => set(() => ({ ready })),
  form: {
    nameAr: "",
    nameEn: "",
    status: DeliveryCompanyStatus.Active,
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
        status: DeliveryCompanyStatus.Active,
      },
    })),
}));

export const useManageForm = (
  id: string,
  deliveryCompany?: DeliveryCompany | null,
) => {
  const form = useForm((state) => state.form);
  const setForm = useForm((state) => state.setForm);
  const reset = useForm((state) => state.reset);
  const ready = useForm((state) => state.ready);
  const setReady = useForm((state) => state.setReady);

  useEffect(() => {
    if (!ready && deliveryCompany) {
      setForm({
        nameAr: deliveryCompany.nameAr ?? "",
        nameEn: deliveryCompany.nameEn ?? "",
        status: deliveryCompany.status ?? DeliveryCompanyStatus.Active,
      });
      setReady(true);
    }
  }, [deliveryCompany, ready, setForm, setReady]);

  return { form, setForm, reset, ready };
};
