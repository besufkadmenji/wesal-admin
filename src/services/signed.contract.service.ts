import {
  PaginatedSignedContractResponse,
  SignedContract,
  SignedContractPaginationInput,
} from "@/gql/graphql";
import { SIGNED_CONTRACT_BY_ID } from "@/graphql/signedContract/signedContractById";
import { SIGNED_CONTRACTS } from "@/graphql/signedContract/signedContracts";
import client from "@/utils/apollo.client";
import axiosClient from "@/utils/axios.client";

class SignedContractService {
  static signedContracts = async (
    input: SignedContractPaginationInput,
  ): Promise<PaginatedSignedContractResponse | null> => {
    try {
      const signedContractsResponse = await client().query({
        query: SIGNED_CONTRACTS,
        variables: {
          input,
        },
      });
      return signedContractsResponse.data?.signedContracts ?? null;
    } catch (e) {
      console.error("userResult", e);
    }
    return null;
  };
  static signedContract = async (
    id: string,
  ): Promise<SignedContract | null> => {
    try {
      const signedContractByUserIdResult = await client().query({
        query: SIGNED_CONTRACT_BY_ID,
        variables: {
          signedContractByIdId: id,
        },
      });
      return signedContractByUserIdResult.data?.signedContractById ?? null;
    } catch (e) {
      console.error("userResult", e);
    }
    return null;
  };

  static exportSignedContracts = async (fields?: string[]): Promise<Blob> => {
    const params = fields && fields.length > 0 ? { fields: fields.join(',') } : {};
    const response = await axiosClient.get('/signed-contracts/export', {
      params,
      responseType: 'blob',
    });
    return new Blob([response.data], { type: 'text/csv' });
  };
}

export default SignedContractService;
