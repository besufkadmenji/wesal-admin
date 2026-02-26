import { AdminPermissionType } from '@/gql/graphql';
import { create } from 'zustand';

export interface PermissionEntry {
  module: string;
  action: string;
}

export interface AdminPermissionState {
  permissionType: AdminPermissionType | null;
  permissions: PermissionEntry[];
  setPermissions: (
    permissionType: AdminPermissionType,
    permissions: PermissionEntry[],
  ) => void;
  clearPermissions: () => void;
}

export const useAdminPermissionStore = create<AdminPermissionState>((set) => ({
  permissionType: null,
  permissions: [],
  setPermissions: (permissionType, permissions) =>
    set({ permissionType, permissions }),
  clearPermissions: () => set({ permissionType: null, permissions: [] }),
}));
