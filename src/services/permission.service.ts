import {
  AdminPermission,
  BulkAssignPermissionsInput,
  Permission,
} from "@/gql/graphql";
import { ADMIN_PERMISSIONS_QUERY } from "@/graphql/permission/adminPermissions";
import { BULK_ASSIGN_PERMISSIONS_TO_ADMIN_MUTATION } from "@/graphql/permission/bulkAssignPermissionsToAdmin";
import { PERMISSIONS_QUERY } from "@/graphql/permission/permissions";
import client from "@/utils/apollo.client";
import { parseGraphQLError } from "@/utils/parse-graphql-error";

export class PermissionService {
  static permissions = async (): Promise<Permission[] | null> => {
    try {
      const permissionsResult = await client().query({
        query: PERMISSIONS_QUERY,
        variables: {},
      });
      return permissionsResult.data?.permissions ?? [];
    } catch (e) {
      console.error("permissionsResult", e);
    }
    return null;
  };

  /**
   * Assign permissions to a user
   */
  static async assignPermissions(
    input: BulkAssignPermissionsInput,
  ): Promise<AdminPermission[] | null> {
    try {
      const createResponse = await client().mutate({
        mutation: BULK_ASSIGN_PERMISSIONS_TO_ADMIN_MUTATION,
        variables: {
          input,
        },
      });
      return createResponse.data?.bulkAssignPermissionsToAdmin ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  }

  /**
   * Get user's assigned permissions
   */
  static async adminPermissions(
    adminId: string,
  ): Promise<AdminPermission[] | null> {
    try {
      const permissionsResult = await client().query({
        query: ADMIN_PERMISSIONS_QUERY,
        variables: { adminId },
      });
      return permissionsResult.data?.adminPermissions ?? [];
    } catch (e) {
      console.error("permissionsResult", e);
    }
    return null;
  }
}
