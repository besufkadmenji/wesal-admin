import {
  Admin,
  AdminPaginationInput,
  CreateAdminInput,
  DeactivateAdminInput,
  PaginatedAdminResponse,
  UpdateAdminInput,
} from "@/gql/graphql";
import { ACTIVATE_ADMIN_MUTATION } from "@/graphql/admin/activateAdmin";
import { ADMIN_QUERY } from "@/graphql/admin/admin";
import { ADMINS_QUERY } from "@/graphql/admin/admins";
import { CREATE_ADMIN_MUTATION } from "@/graphql/admin/createAdmin";
import { DEACTIVATE_ADMIN_MUTATION } from "@/graphql/admin/deactivateAdmin";
import { ME_ADMIN_QUERY } from "@/graphql/admin/meAdmin";
import { REMOVE_ADMIN_MUTATION } from "@/graphql/admin/removeAdmin";
import { UPDATE_ADMIN_MUTATION } from "@/graphql/admin/updateAdmin";
import client from "@/utils/apollo.client";
import { parseGraphQLError } from "@/utils/parse-graphql-error";
import axiosClient from "@/utils/axios.client";

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
  static activateAdmin = async (activateAdminId: string) => {
    try {
      const activateAdminResponse = await client().mutate({
        mutation: ACTIVATE_ADMIN_MUTATION,
        variables: {
          activateAdminId,
        },
      });
      return activateAdminResponse.data?.activateAdmin ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
  static deactivateAdmin = async (
    deactivateAdminId: string,
    input: DeactivateAdminInput,
  ) => {
    try {
      const deactivateAdminResponse = await client().mutate({
        mutation: DEACTIVATE_ADMIN_MUTATION,
        variables: {
          deactivateAdminId,
          input,
        },
      });
      return deactivateAdminResponse.data?.deactivateAdmin ?? null;
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

  static exportAdmins = async (fields?: string[]): Promise<Blob> => {
    const params = fields && fields.length > 0 ? { fields: fields.join(',') } : {};
    const response = await axiosClient.get('/admins/export', {
      params,
      responseType: 'blob',
    });
    return new Blob([response.data], { type: 'text/csv' });
  };
}

export default AdminService;
