import { Admin } from "@/gql/graphql";
import AdminService from "@/services/admin.service";
import { useAdminPermissionStore } from "@/store/adminPermissionStore";
import { useQuery } from "@tanstack/react-query";
import Cookie from "js-cookie";
import { useEffect } from "react";

export const useMe = (): {
  me: Admin | null | undefined;
  isLoading: boolean;
  isError: boolean;
  logout: () => Promise<void>;
} => {
  const setPermissions = useAdminPermissionStore((s) => s.setPermissions);
  const clearPermissions = useAdminPermissionStore((s) => s.clearPermissions);

  const {
    isLoading,
    isError,
    data: me,
  } = useQuery({
    queryKey: ["me"],
    queryFn: () => AdminService.meAdmin(),
  });

  useEffect(() => {
    if (me?.permissionType) {
      const entries = (me.adminPermissions ?? []).map((ap) => ({
        module: ap.permission.module,
        action: ap.permission.action,
      }));
      setPermissions(me.permissionType, entries);
    } else if (me === null) {
      clearPermissions();
    }
  }, [me, setPermissions, clearPermissions]);

  const logout = async (): Promise<void> => {
    clearPermissions();
    Cookie.remove("token");
    window.location.reload();
  };

  return { isLoading, isError, me, logout };
};
