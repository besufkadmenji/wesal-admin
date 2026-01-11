import { useEffect } from "react";
import { create } from "zustand";
import { useSetting } from "./useSettings";

interface SettingsState {
  valueEn: string;
  valueAr: string;
  setValueEn: (valueEn: string) => void;
  setValueAr: (valueAr: string) => void;
  reset: () => void;
}

export const useSettings = create<SettingsState>((set) => ({
  valueEn: "",
  valueAr: "",

  setValueEn: (valueEn) => set({ valueEn }),
  setValueAr: (valueAr) => set({ valueAr }),
  reset: () =>
    set({
      valueEn: "",
      valueAr: "",
    }),
}));

export const useManageSettingsForm = () => {
  const { valueEn, valueAr, setValueEn, setValueAr } = useSettings();
  const { setting: termsData } = useSetting("terms_and_conditions");

  useEffect(() => {
    if (termsData) {
      setValueEn(termsData.termsEn ?? "");
      setValueAr(termsData.termsAr ?? "");
    }

    return () => {};
  }, [termsData, setValueAr, setValueEn]);

  return {
    valueEn,
    valueAr,
    setValueEn,
    setValueAr,
  };
};
