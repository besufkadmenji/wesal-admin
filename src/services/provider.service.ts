import {
  DeleteProviderInput,
  ProviderPaginationInput,
  ProviderQuery,
  ProvidersQuery,
  AdminReactivateProviderMutation,
} from "@/gql/graphql";
import { ACTIVATE_PROVIDER_MUTATION } from "@/graphql/provider/activateProvider";
import { ADMIN_REACTIVATE_PROVIDER_MUTATION } from "@/graphql/provider/adminReactivateProvider";
import { TERMINATE_CONTRACT_MUTATION } from "@/graphql/provider/adminTerminateContract";
import { DEACTIVATE_PROVIDER_MUTATION } from "@/graphql/provider/deactivateProvider";
import { PROVIDER_QUERY } from "@/graphql/provider/provider";
import { PROVIDERS_QUERY } from "@/graphql/provider/providers";
import { REJECT_PROVIDER_JOIN_REQUEST_MUTATION } from "@/graphql/provider/rejectProviderJoinRequest";
import { REMOVE_PROVIDER_MUTATION } from "@/graphql/provider/removeProvider";
import client from "@/utils/apollo.client";
import axiosClient from "@/utils/axios.client";
import { parseGraphQLError } from "@/utils/parse-graphql-error";
import { requireOperationField } from "@/utils/apollo.result";

class ProviderService {
  static providers = async (
    input: ProviderPaginationInput,
  ): Promise<ProvidersQuery["providers"] | null> => {
    try {
      const providerResult = await client().query({
        query: PROVIDERS_QUERY,
        variables: {
          pagination: input,
        },
      });
      return providerResult.data?.providers ?? null;
    } catch (e) {
      console.error("providerResult", e);
    }
    return null;
  };
  static provider = async (
    providerId: string,
  ): Promise<ProviderQuery["provider"] | null> => {
    try {
      const providerResult = await client().query({
        query: PROVIDER_QUERY,
        variables: {
          providerId,
        },
      });
      return providerResult.data?.provider ?? null;
    } catch (e) {
      console.error("providerResult", e);
    }
    return null;
  };

  static activateProvider = async (activateProviderId: string) => {
    try {
      const activateProviderResponse = await client().mutate({
        mutation: ACTIVATE_PROVIDER_MUTATION,
        variables: {
          activateProviderId,
        },
      });
      return requireOperationField(
        activateProviderResponse,
        "activateProvider",
        "Activate provider",
      );
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
  static deactivateProvider = async (
    deactivateProviderId: string,
    reason: string,
  ) => {
    try {
      const deactivateProviderResponse = await client().mutate({
        mutation: DEACTIVATE_PROVIDER_MUTATION,
        variables: {
          deactivateProviderId,
          reason,
        },
      });
      return requireOperationField(
        deactivateProviderResponse,
        "deactivateProvider",
        "Deactivate provider",
      );
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
  static removeProvider = async (
    removeProviderId: string,
    input: DeleteProviderInput,
  ) => {
    try {
      const removeProviderResponse = await client().mutate({
        mutation: REMOVE_PROVIDER_MUTATION,
        variables: {
          removeProviderId,
          input,
        },
      });
      return requireOperationField(
        removeProviderResponse,
        "removeProvider",
        "Remove provider",
      );
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };

  static terminateContact = async (
    providerId: string,
    terminationReason: string,
  ) => {
    try {
      const removeAvatarResponse = await client().mutate({
        mutation: TERMINATE_CONTRACT_MUTATION,
        variables: {
          input: { providerId, terminationReason },
        },
      });
      return requireOperationField(
        removeAvatarResponse,
        "adminTerminateProviderContract",
        "Terminate provider contract",
      );
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };

  static reactivateProvider = async (providerId: string) => {
    try {
      const result = await client().mutate<AdminReactivateProviderMutation>({
        mutation: ADMIN_REACTIVATE_PROVIDER_MUTATION,
        variables: { providerId },
      });
      return requireOperationField(
        result,
        "adminReactivateProvider",
        "Reactivate provider",
      );
    } catch (error) {
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };

  static exportProviders = async (fields?: string[]): Promise<Blob> => {
    const params =
      fields && fields.length > 0 ? { fields: fields.join(",") } : {};
    const response = await axiosClient.get("/providers/export", {
      params,
      responseType: "blob",
    });
    return new Blob([response.data], { type: "text/csv" });
  };

  static rejectJoinRequest = async (id: string, reason: string) => {
    try {
      const result = await client().mutate({
        mutation: REJECT_PROVIDER_JOIN_REQUEST_MUTATION,
        variables: { id, reason },
      });
      return requireOperationField(
        result,
        "rejectProviderJoinRequest",
        "Reject provider join request",
      );
    } catch (error) {
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
}

export default ProviderService;
