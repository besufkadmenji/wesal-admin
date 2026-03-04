import { UpdateAdminInput } from "@/gql/graphql";
import { useMe } from "@/hooks/useMe";
import { useSetting } from "@/components/app/Settings/useSettings";
import { useEffect } from "react";
import { create } from "zustand";

interface SettingsState {
  updateProfile: UpdateAdminInput;
  avatarFile?: File | null;
  signatureFile?: File | null;
  platformManagerName: string;
  platformManagerSignature: string;

  setAvatarFile: (value: File | null) => void;
  setSignatureFile: (value: File | null) => void;
  setPlatformManagerName: (value: string) => void;
  setPlatformManagerSignature: (value: string) => void;

  setUpdateProfile: (value: Partial<UpdateAdminInput>) => void;
  reset: () => void;
}

export const useSettings = create<SettingsState>((set) => ({
  updateProfile: { fullName: "", email: "", phoneNumber: "" },
  avatarFile: null,
  signatureFile: null,
  platformManagerName: "",
  platformManagerSignature: "",
  setAvatarFile: (value) => set({ avatarFile: value }),
  setSignatureFile: (value) => set({ signatureFile: value }),
  setPlatformManagerName: (value) => set({ platformManagerName: value }),
  setPlatformManagerSignature: (value) => set({ platformManagerSignature: value }),
  setUpdateProfile: (value) =>
    set((state) => ({ updateProfile: { ...state.updateProfile, ...value } })),

  reset: () =>
    set({
      avatarFile: null,
    }),
}));

export const useManageSettingsForm = () => {
  const { me } = useMe();
  const { setting } = useSetting("global");
  const setUpdateProfile = useSettings((state) => state.setUpdateProfile);
  const updateProfile = useSettings((state) => state.updateProfile);
  const setAvatarFile = useSettings((state) => state.setAvatarFile);
  const avatarFile = useSettings((state) => state.avatarFile);
  const signatureFile = useSettings((state) => state.signatureFile);
  const setSignatureFile = useSettings((state) => state.setSignatureFile);
  const platformManagerName = useSettings((state) => state.platformManagerName);
  const platformManagerSignature = useSettings((state) => state.platformManagerSignature);
  const setPlatformManagerName = useSettings((state) => state.setPlatformManagerName);
  const setPlatformManagerSignature = useSettings((state) => state.setPlatformManagerSignature);

  useEffect(() => {
    if (me) {
      setUpdateProfile({
        fullName: me.fullName,
        email: me.email,
        phoneNumber: me.phoneNumber || "",
        avatarFilename: me.avatarFilename || "",
        organizationName: me.organizationName || "Wesal",
        roleName: me.permissionType.toString(),
        permissionType: me.permissionType,
        status: me.status,
        userType: me.userType,
      });
    }

    return () => {};
  }, [me, setUpdateProfile]);

  useEffect(() => {
    if (setting) {
      setPlatformManagerName(setting.platformManagerName || "");
      setPlatformManagerSignature(setting.platformManagerSignature || "");
    }
  }, [setting, setPlatformManagerName, setPlatformManagerSignature]);

  return {
    updateProfile,
    setUpdateProfile,
    avatarFile,
    setAvatarFile,
    signatureFile,
    setSignatureFile,
    platformManagerName,
    platformManagerSignature,
    setPlatformManagerName,
    setPlatformManagerSignature,
  };
};
