import {
  CreateDeliveryCompanyInput,
  DeactivateDeliveryCompanyInput,
  DeliveryCompany,
  DeliveryCompanyPaginationInput,
  PaginatedDeliveryCompanyResponse,
  UpdateDeliveryCompanyInput,
} from "@/gql/graphql";
import { ACTIVATE_DELIVERY_COMPANY_MUTATION } from "@/graphql/delivery-company/activateDeliveryCompany";
import { CREATE_DELIVERY_COMPANY_MUTATION } from "@/graphql/delivery-company/createDeliveryCompany";
import { DEACTIVATE_DELIVERY_COMPANY_MUTATION } from "@/graphql/delivery-company/deactivateDeliveryCompany";
import { DELIVERY_COMPANIES_QUERY } from "@/graphql/delivery-company/deliveryCompanies";
import { DELIVERY_COMPANY_QUERY } from "@/graphql/delivery-company/deliveryCompany";
import { REMOVE_DELIVERY_COMPANY_MUTATION } from "@/graphql/delivery-company/removeDeliveryCompany";
import { UPDATE_DELIVERY_COMPANY_MUTATION } from "@/graphql/delivery-company/updateDeliveryCompany";
import client from "@/utils/apollo.client";
import { parseGraphQLError } from "@/utils/parse-graphql-error";
import axiosClient from "@/utils/axios.client";

class DeliveryCompanyService {
  static deliveryCompanies = async (
    input: DeliveryCompanyPaginationInput,
  ): Promise<PaginatedDeliveryCompanyResponse | null> => {
    try {
      const deliveryCompanyResult = await client().query({
        query: DELIVERY_COMPANIES_QUERY,
        variables: {
          input,
        },
      });
      return deliveryCompanyResult.data?.deliveryCompanies ?? null;
    } catch (e) {
      console.error("deliveryCompanyResult", e);
    }
    return null;
  };
  static deliveryCompany = async (
    deliveryCompanyId: string,
  ): Promise<DeliveryCompany | null> => {
    try {
      const deliveryCompanyResult = await client().query({
        query: DELIVERY_COMPANY_QUERY,
        variables: {
          deliveryCompanyId,
        },
      });
      return deliveryCompanyResult.data?.deliveryCompany ?? null;
    } catch (e) {
      console.error("deliveryCompanyResult", e);
    }
    return null;
  };

  static createDeliveryCompany = async (input: CreateDeliveryCompanyInput) => {
    try {
      const createResponse = await client().mutate({
        mutation: CREATE_DELIVERY_COMPANY_MUTATION,
        variables: {
          input,
        },
      });
      return createResponse.data?.createDeliveryCompany ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
  static updateDeliveryCompany = async (input: UpdateDeliveryCompanyInput) => {
    try {
      const updateDeliveryCompanyResponse = await client().mutate({
        mutation: UPDATE_DELIVERY_COMPANY_MUTATION,
        variables: {
          input,
        },
      });
      return updateDeliveryCompanyResponse.data?.updateDeliveryCompany ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
  static activateDeliveryCompany = async (
    activateDeliveryCompanyId: string,
  ) => {
    try {
      const activateDeliveryCompanyResponse = await client().mutate({
        mutation: ACTIVATE_DELIVERY_COMPANY_MUTATION,
        variables: {
          activateDeliveryCompanyId,
        },
      });
      return (
        activateDeliveryCompanyResponse.data?.activateDeliveryCompany ?? null
      );
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
  static deactivateDeliveryCompany = async (
    deactivateDeliveryCompanyId: string,
    input: DeactivateDeliveryCompanyInput,
  ) => {
    try {
      const deactivateDeliveryCompanyResponse = await client().mutate({
        mutation: DEACTIVATE_DELIVERY_COMPANY_MUTATION,
        variables: {
          deactivateDeliveryCompanyId,
          input,
        },
      });
      return (
        deactivateDeliveryCompanyResponse.data?.deactivateDeliveryCompany ??
        null
      );
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
  static removeDeliveryCompany = async (removeDeliveryCompanyId: string) => {
    try {
      const removeDeliveryCompanyResponse = await client().mutate({
        mutation: REMOVE_DELIVERY_COMPANY_MUTATION,
        variables: {
          removeDeliveryCompanyId,
        },
      });
      return removeDeliveryCompanyResponse.data?.removeDeliveryCompany ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };

  static exportDeliveryCompanies = async (fields?: string[]): Promise<Blob> => {
    const params = fields && fields.length > 0 ? { fields: fields.join(',') } : {};
    const response = await axiosClient.get('/delivery-companies/export', {
      params,
      responseType: 'blob',
    });
    return new Blob([response.data], { type: 'text/csv' });
  };
}

export default DeliveryCompanyService;
