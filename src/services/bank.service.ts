import {
  Bank,
  BankPaginationInput,
  CreateBankInput,
  DeactivateBankInput,
  PaginatedBankResponse,
  UpdateBankInput,
} from "@/gql/graphql";
import { ACTIVATE_BANK_MUTATION } from "@/graphql/bank/activateBank";
import { BANK_QUERY } from "@/graphql/bank/bank";
import { BANKS_QUERY } from "@/graphql/bank/banks";
import { CREATE_BANK_MUTATION } from "@/graphql/bank/createBank";
import { DEACTIVATE_BANK_MUTATION } from "@/graphql/bank/deactivateBank";
import { REMOVE_BANK_MUTATION } from "@/graphql/bank/removeBank";
import { UPDATE_BANK_MUTATION } from "@/graphql/bank/updateBank";
import client from "@/utils/apollo.client";
import { parseGraphQLError } from "@/utils/parse-graphql-error";

class BankService {
  static banks = async (
    input: BankPaginationInput,
  ): Promise<PaginatedBankResponse | null> => {
    try {
      const bankResult = await client().query({
        query: BANKS_QUERY,
        variables: {
          input,
        },
      });
      return bankResult.data?.banks ?? null;
    } catch (e) {
      console.error("bankResult", e);
    }
    return null;
  };
  static bank = async (bankId: string): Promise<Bank | null> => {
    try {
      const bankResult = await client().query({
        query: BANK_QUERY,
        variables: {
          bankId,
        },
      });
      return bankResult.data?.bank ?? null;
    } catch (e) {
      console.error("bankResult", e);
    }
    return null;
  };

  static createBank = async (input: CreateBankInput) => {
    try {
      const createResponse = await client().mutate({
        mutation: CREATE_BANK_MUTATION,
        variables: {
          input,
        },
      });
      return createResponse.data?.createBank ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
  static updateBank = async (input: UpdateBankInput) => {
    try {
      const updateBankResponse = await client().mutate({
        mutation: UPDATE_BANK_MUTATION,
        variables: {
          input,
        },
      });
      return updateBankResponse.data?.updateBank ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
  static activateBank = async (activateBankId: string) => {
    try {
      const activateBankResponse = await client().mutate({
        mutation: ACTIVATE_BANK_MUTATION,
        variables: {
          activateBankId,
        },
      });
      return activateBankResponse.data?.activateBank ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
  static deactivateBank = async (
    deactivateBankId: string,
    input: DeactivateBankInput,
  ) => {
    try {
      const deactivateBankResponse = await client().mutate({
        mutation: DEACTIVATE_BANK_MUTATION,
        variables: {
          deactivateBankId,
          input,
        },
      });
      return deactivateBankResponse.data?.deactivateBank ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
  static removeBank = async (removeBankId: string) => {
    try {
      const removeBankResponse = await client().mutate({
        mutation: REMOVE_BANK_MUTATION,
        variables: {
          removeBankId,
        },
      });
      return removeBankResponse.data?.removeBank ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
}

export default BankService;
