import {
  Admin,
  AdminPaginationInput,
  CreateAdminInput,
  PaginatedAdminResponse,
  UpdateAdminInput,
} from "@/gql/graphql";
import { ADMIN_QUERY } from "@/graphql/admin/admin";
import { ADMINS_QUERY } from "@/graphql/admin/admins";
import { CREATE_ADMIN_MUTATION } from "@/graphql/admin/createAdmin";
import { ME_ADMIN_QUERY } from "@/graphql/admin/meAdmin";
import { REMOVE_ADMIN_MUTATION } from "@/graphql/admin/removeAdmin";
import { UPDATE_ADMIN_MUTATION } from "@/graphql/admin/updateAdmin";
import client from "@/utils/apollo.client";
import { parseGraphQLError } from "@/utils/parse-graphql-error";

class AdminService {
  static meAdmin = async (): Promise<Admin | null> => {
    try {
      const adminResult = await client().query({
        query: ME_ADMIN_QUERY,
      });
      return adminResult.data?.meAdmin ?? null;
    } catch (e) {
      console.error("adminResult", e);
    }
    return null;
  };
  static admins = async (
    input: AdminPaginationInput,
  ): Promise<PaginatedAdminResponse | null> => {
    try {
      const adminResult = await client().query({
        query: ADMINS_QUERY,
        variables: {
          paginationInput: input,
        },
      });
      return adminResult.data?.admins ?? null;
    } catch (e) {
      console.error("adminResult", e);
    }
    return null;
  };
  static admin = async (adminId: string): Promise<Admin | null> => {
    try {
      const adminResult = await client().query({
        query: ADMIN_QUERY,
        variables: {
          adminId,
        },
      });
      return adminResult.data?.admin ?? null;
    } catch (e) {
      console.error("adminResult", e);
    }
    return null;
  };

  static createAdmin = async (input: CreateAdminInput) => {
    try {
      const createResponse = await client().mutate({
        mutation: CREATE_ADMIN_MUTATION,
        variables: {
          createAdminInput: input,
        },
      });
      return createResponse.data?.createAdmin ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
  static updateAdmin = async (
    updateAdminId: string,
    input: UpdateAdminInput,
  ) => {
    try {
      const updateAdminResponse = await client().mutate({
        mutation: UPDATE_ADMIN_MUTATION,
        variables: {
          updateAdminId,
          updateAdminInput: input,
        },
      });
      return updateAdminResponse.data?.updateAdmin ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
  static removeAdmin = async (removeAdminId: string) => {
    try {
      const removeAdminResponse = await client().mutate({
        mutation: REMOVE_ADMIN_MUTATION,
        variables: {
          removeAdminId,
        },
      });
      return removeAdminResponse.data?.removeAdmin ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
}

export default AdminService;
