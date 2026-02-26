import { AdminPermissionType } from '@/gql/graphql';
import { useAdminPermissionStore } from '@/store/adminPermissionStore';

/**
 * Returns true if the current admin can perform `action` on `module`.
 *
 * SUPER_ADMIN and ADMINISTRATOR have implicit full access.
 * Other admins must have an explicit AdminPermission record for the
 * module+action pair (or a 'full_access' action for that module).
 */
export const useCanAccess = (module: string, action: string): boolean => {
  const { permissionType, permissions } = useAdminPermissionStore();

  if (!permissionType) return false;

  if (
    permissionType === AdminPermissionType.SuperAdmin ||
    permissionType === AdminPermissionType.Administrator
  ) {
    return true;
  }

  return permissions.some(
    (p) =>
      p.module === module &&
      (p.action === action || p.action === 'full_access'),
  );
};
