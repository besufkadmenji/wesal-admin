import { CategoryQuery, CreateCategoryInput } from "@/gql/graphql";
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
    commissionEnabled: false,
    minCommissionEnabled: false,
    depositEnabled: false,
    customerConversationFeeEnabled: false,
    providerConversationFeeEnabled: false,
    maxCompletionDaysEnabled: false,
    maxTerminationDaysEnabled: false,
    contractDocumentEnabled: false,
    contractDocumentText: "",
    undertakingEnabled: false,
    undertakingTextAr: "",
    undertakingTextEn: "",
    refundPolicyEnabled: false,
    refundPolicyAr: "",
    refundPolicyEn: "",
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
        commissionEnabled: false,
        minCommissionEnabled: false,
        depositEnabled: false,
        customerConversationFeeEnabled: false,
        providerConversationFeeEnabled: false,
        maxCompletionDaysEnabled: false,
        maxTerminationDaysEnabled: false,
        contractDocumentEnabled: false,
        contractDocumentText: "",
        undertakingEnabled: false,
        undertakingTextAr: "",
        undertakingTextEn: "",
        refundPolicyEnabled: false,
        refundPolicyAr: "",
        refundPolicyEn: "",
      },
      imageFile: null,
    })),
}));

export const useManageForm = (
  id: string,
  category?: CategoryQuery["category"] | null,
) => {
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
      commissionPercent: category?.commissionPercent,
      commissionEnabled: category?.commissionEnabled,
      minCommissionAmount: category?.minCommissionAmount,
      minCommissionEnabled: category?.minCommissionEnabled,
      depositPercent: category?.depositPercent,
      depositEnabled: category?.depositEnabled,
      customerConversationFee: category?.customerConversationFee,
      customerConversationFeeEnabled: category?.customerConversationFeeEnabled,
      providerConversationFee: category?.providerConversationFee,
      providerConversationFeeEnabled: category?.providerConversationFeeEnabled,
      maxCompletionDays: category?.maxCompletionDays,
      maxCompletionDaysEnabled: category?.maxCompletionDaysEnabled,
      maxTerminationDays: category?.maxTerminationDays,
      maxTerminationDaysEnabled: category?.maxTerminationDaysEnabled,
      contractDocumentEnabled: category?.contractDocumentEnabled,
      contractDocumentText: category?.contractDocumentText || "",
      undertakingEnabled: category?.undertakingEnabled,
      undertakingTextAr: category?.undertakingTextAr || "",
      undertakingTextEn: category?.undertakingTextEn || "",
      refundPolicyEnabled: category?.refundPolicyEnabled,
      refundPolicyAr: category?.refundPolicyAr || "",
      refundPolicyEn: category?.refundPolicyEn || "",
    });
  }, [category, setForm]);

  return { form, setForm, reset };
};
