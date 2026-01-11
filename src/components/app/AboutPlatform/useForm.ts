import { useSetting } from "@/components/app/Settings/useSettings";
import { useEffect } from "react";
import { create } from "zustand";

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
  const { setting: aboutDescriptionData } = useSetting("about_description");

  useEffect(() => {
    if (aboutDescriptionData) {
      setValueEn(aboutDescriptionData.aboutEn ?? "");
      setValueAr(aboutDescriptionData.aboutAr ?? "");
    }

    return () => {};
  }, [aboutDescriptionData, setValueAr, setValueEn]);

  return {
    valueEn,
    valueAr,
    setValueEn,
    setValueAr,
  };
};
