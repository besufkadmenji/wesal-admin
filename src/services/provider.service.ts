import {
  AdminSignContractInput,
  DeleteProviderInput,
  PaginatedProviderResponse,
  Provider,
  ProviderPaginationInput,
} from "@/gql/graphql";
import { ACTIVATE_PROVIDER_MUTATION } from "@/graphql/provider/activateProvider";
import { SIGN_CONTRACT_MUTATION } from "@/graphql/provider/adminSignContract";
import { TERMINATE_CONTRACT_MUTATION } from "@/graphql/provider/adminTerminateContract";
import { DEACTIVATE_PROVIDER_MUTATION } from "@/graphql/provider/deactivateProvider";
import { PROVIDER_QUERY } from "@/graphql/provider/provider";
import { PROVIDERS_QUERY } from "@/graphql/provider/providers";
import { REMOVE_PROVIDER_MUTATION } from "@/graphql/provider/removeProvider";
import client from "@/utils/apollo.client";
import { parseGraphQLError } from "@/utils/parse-graphql-error";
import axiosClient from "@/utils/axios.client";

class ProviderService {
  static providers = async (
    input: ProviderPaginationInput,
  ): Promise<PaginatedProviderResponse | null> => {
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
  static provider = async (providerId: string): Promise<Provider | null> => {
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
      return activateProviderResponse.data?.activateProvider ?? null;
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
      return deactivateProviderResponse.data?.deactivateProvider ?? null;
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
      return removeProviderResponse.data?.removeProvider ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };

  static signContact = async (input: AdminSignContractInput) => {
    try {
      const removeAvatarResponse = await client().mutate({
        mutation: SIGN_CONTRACT_MUTATION,
        variables: {
          input,
        },
      });
      return removeAvatarResponse.data?.adminSignProviderContract ?? null;
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
      return removeAvatarResponse.data?.adminTerminateProviderContract ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
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
}

export default ProviderService;
