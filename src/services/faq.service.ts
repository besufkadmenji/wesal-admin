import {
  BulkUpdateFaqOrderInput,
  CreateFaqInput,
  Faq,
  UpdateFaqInput,
} from "@/gql/graphql";
import { BULK_UPDATE_ORDER_FAQ_MUTATION } from "@/graphql/faq/bulkUpdateOrder";
import { CREATE_FAQ_MUTATION } from "@/graphql/faq/createFaq";
import { FAQ_QUERY } from "@/graphql/faq/faq";
import { FAQS_QUERY } from "@/graphql/faq/faqs";
import { REMOVE_FAQ_MUTATION } from "@/graphql/faq/removeFaq";
import { UPDATE_FAQ_MUTATION } from "@/graphql/faq/updateFaq";
import client from "@/utils/apollo.client";
import { parseGraphQLError } from "@/utils/parse-graphql-error";
import axiosClient from "@/utils/axios.client";

class FaqService {
  static faqs = async (): Promise<Faq[] | null> => {
    try {
      const faqResult = await client().query({
        query: FAQS_QUERY,
        variables: {},
      });
      return faqResult.data?.faqs ?? null;
    } catch (e) {
      console.error("faqResult", e);
    }
    return null;
  };
  static faq = async (faqId: string): Promise<Faq | null> => {
    try {
      const faqResult = await client().query({
        query: FAQ_QUERY,
        variables: {
          faqId,
        },
      });
      return faqResult.data?.faq ?? null;
    } catch (e) {
      console.error("faqResult", e);
    }
    return null;
  };

  static createFaq = async (createFaqInput: CreateFaqInput) => {
    try {
      const updateFaqResponse = await client().mutate({
        mutation: CREATE_FAQ_MUTATION,
        variables: {
          createFaqInput,
        },
      });
      return updateFaqResponse.data?.createFaq ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
  static updateFaq = async (updateFaqInput: UpdateFaqInput) => {
    try {
      const updateFaqResponse = await client().mutate({
        mutation: UPDATE_FAQ_MUTATION,
        variables: {
          updateFaqInput,
        },
      });
      return updateFaqResponse.data?.updateFaq ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
  static bulkUpdateOrder = async (input: BulkUpdateFaqOrderInput) => {
    try {
      const faqUpdateResponse = await client().mutate({
        mutation: BULK_UPDATE_ORDER_FAQ_MUTATION,
        variables: {
          input,
        },
      });
      return faqUpdateResponse.data?.bulkUpdateOrder ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };

  static removeFaq = async (removeFaqId: string) => {
    try {
      const removeFaqResponse = await client().mutate({
        mutation: REMOVE_FAQ_MUTATION,
        variables: {
          removeFaqId,
        },
      });
      return removeFaqResponse.data?.removeFaq ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };

  static exportFaqs = async (fields?: string[]): Promise<Blob> => {
    const params = fields && fields.length > 0 ? { fields: fields.join(',') } : {};
    const response = await axiosClient.get('/faqs/export', {
      params,
      responseType: 'blob',
    });
    return new Blob([response.data], { type: 'text/csv' });
  };
}

export default FaqService;
