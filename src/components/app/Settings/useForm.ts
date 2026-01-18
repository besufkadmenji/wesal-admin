import { UpdateAdminInput } from "@/gql/graphql";
import { useMe } from "@/hooks/useMe";
import { useEffect } from "react";
import { create } from "zustand";

interface SettingsState {
  updateProfile: UpdateAdminInput;
  avatarFile?: File | null;
  signatureFile?: File | null;

  setAvatarFile: (value: File | null) => void;
  setSignatureFile: (value: File | null) => void;

  setUpdateProfile: (value: Partial<UpdateAdminInput>) => void;
  reset: () => void;
}

export const useSettings = create<SettingsState>((set) => ({
  updateProfile: { fullName: "", email: "", phoneNumber: "" },
  avatarFile: null,
  signatureFile: null,
  setAvatarFile: (value) => set({ avatarFile: value }),
  setSignatureFile: (value) => set({ signatureFile: value }),
  setUpdateProfile: (value) =>
    set((state) => ({ updateProfile: { ...state.updateProfile, ...value } })),

  reset: () =>
    set({
      avatarFile: null,
    }),
}));

export const useManageSettingsForm = () => {
  const { me } = useMe();
  const setUpdateProfile = useSettings((state) => state.setUpdateProfile);
  const updateProfile = useSettings((state) => state.updateProfile);
  const setAvatarFile = useSettings((state) => state.setAvatarFile);
  const avatarFile = useSettings((state) => state.avatarFile);
  const signatureFile = useSettings((state) => state.signatureFile);
  const setSignatureFile = useSettings((state) => state.setSignatureFile);

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
        platformManagerSignature: me.platformManagerSignature || "",
      });
    }

    return () => {};
  }, [me, setUpdateProfile]);

  return {
    updateProfile,
    setUpdateProfile,
    avatarFile,
    setAvatarFile,
    signatureFile,
    setSignatureFile,
  };
};
