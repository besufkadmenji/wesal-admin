import {
  Admin,
  AdminPermissionType,
  AdminStatus,
  AdminUserType,
  CreateAdminInput,
} from "@/gql/graphql";
import { useAdminPermission } from "@/hooks/usePermissions";
import { useEffect } from "react";
import { create } from "zustand";

interface FormState {
  ready: boolean;
  permissionsReady: boolean;
  setReady: (ready: boolean) => void;
  setPermissionsReady: (ready: boolean) => void;
  form: CreateAdminInput;
  setForm: (form: Partial<CreateAdminInput>) => void;
  confirmPassword?: string;
  setConfirmPassword?: (password: string) => void;
  avatarFile?: File | null;
  setAvatarFile: (file: File | null) => void;
  reset: () => void;
  permissionIds: string[];
  setPermissionIds: (ids: string[]) => void;
}

export const useForm = create<FormState>((set) => ({
  ready: false,
  setReady: (ready) => set(() => ({ ready })),
  permissionsReady: false,
  setPermissionsReady: (ready) => set(() => ({ permissionsReady: ready })),
  avatarFile: null,
  setAvatarFile: (file) =>
    set(() => ({
      avatarFile: file,
    })),
  confirmPassword: undefined,
  setConfirmPassword: (password) =>
    set(() => ({
      confirmPassword: password,
    })),
  form: {
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    permissionType: AdminPermissionType.Administrator,
    status: AdminStatus.Active,
    organizationName: "Wesal",
    roleName: "",
    userType: AdminUserType.Organization,
    avatarFilename: undefined,
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
      permissionsReady: false,
      form: {
        fullName: "",
        email: "",
        phoneNumber: "",
        password: "",
        permissionType: AdminPermissionType.Administrator,
        status: AdminStatus.Active,
        organizationName: "Wesal",
        roleName: "",
        userType: AdminUserType.Organization,
        avatarFilename: undefined,
      },
      existingPicture: null,
      permissionIds: [],
    })),
  permissionIds: [],
  setPermissionIds: (ids) =>
    set(() => ({
      permissionIds: ids,
    })),
}));

export const useManageForm = (id: string, admin?: Admin | null) => {
  const { permissions } = useAdminPermission(id);
  const form = useForm((state) => state.form);
  const setForm = useForm((state) => state.setForm);
  const reset = useForm((state) => state.reset);
  const ready = useForm((state) => state.ready);
  const setReady = useForm((state) => state.setReady);
  const permissionsReady = useForm((state) => state.permissionsReady);
  const setPermissionsReady = useForm((state) => state.setPermissionsReady);
  const permissionIds = useForm((state) => state.permissionIds);
  const setPermissionIds = useForm((state) => state.setPermissionIds);

  useEffect(() => {
    if (!ready && admin) {
      setForm({
        fullName: admin.fullName,
        email: admin.email,
        phoneNumber: admin.phoneNumber,
        status: admin.status,
        avatarFilename: admin.avatarFilename || undefined,
      });
      setReady(true);
    }
  }, [admin, ready, setForm, setReady]);

  useEffect(() => {
    if (permissions && permissions.length > 0 && permissionIds.length === 0) {
      const newPermissionIds = permissions.map((p) => p.permissionId);
      setPermissionIds(newPermissionIds);
      setForm({
        permissionType: AdminPermissionType.Custom,
      });
    }
    if (permissions) {
      setPermissionsReady(true);
    }
  }, [
    permissions,
    permissionIds.length,
    setPermissionIds,
    setForm,
    setPermissionsReady,
  ]);

  return { form, setForm, reset, ready, permissionsReady };
};
