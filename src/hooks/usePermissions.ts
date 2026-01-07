import { AdminPermission, Permission } from "@/gql/graphql";
import { PermissionService } from "@/services/permission.service";
import { useQuery } from "@tanstack/react-query";
import { useLang } from "./useLang";

export const usePermissions = () => {
  const lang = useLang();

  const {
    isLoading,
    isError,
    data: permissionsData,
    error,
  } = useQuery<Permission[] | null>({
    queryKey: ["permissions"],
    queryFn: () => PermissionService.permissions(),
  });

  return {
    permissions: permissionsData ?? [],
    isLoading,
    isError,
    error,
  };
};
export const useAdminPermission = (adminId: string) => {
  const {
    isLoading,
    isError,
    data: permissionsData,
    error,
  } = useQuery<AdminPermission[] | null>({
    queryKey: ["adminPermissions", adminId],
    queryFn: () => PermissionService.adminPermissions(adminId),
  });

  return {
    permissions: permissionsData || [],
    isLoading,
    isError,
    error,
  };
};
