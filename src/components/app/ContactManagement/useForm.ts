import { useSetting } from "@/components/app/Settings/useSettings";
import { SettingInput } from "@/gql/graphql";
import { useEffect } from "react";
import { create } from "zustand";

interface SettingsState {
  setting: SettingInput;

  setSetting: (setting: Partial<SettingsState["setting"]>) => void;
  reset: () => void;
}

export const useSettings = create<SettingsState>((set) => ({
  setting: {
    phones: [],
    whatsappNumber: "",
    email: "",
    socialMediaLinks: [],
  },
  setSetting: (setting) =>
    set((state) => ({
      setting: {
        ...state.setting,
        ...setting,
      },
    })),

  reset: () =>
    set({
      setting: {
        phones: [],
        whatsappNumber: "",
        email: "",
        socialMediaLinks: [],
      },
    }),
}));

export const useManageSettingsForm = () => {
  const { setting, setSetting } = useSettings();
  const { setting: contactSetting } = useSetting("contact");

  useEffect(() => {
    if (contactSetting) {
      setSetting({
        phones: contactSetting.phones || [],
        whatsappNumber: contactSetting.whatsappNumber || "",
        email: contactSetting.email || "",
        socialMediaLinks: contactSetting.socialMediaLinks || [],
      });
    }
    return () => {};
  }, [contactSetting, setSetting]);

  return {
    setting,
    setSetting,
  };
};
