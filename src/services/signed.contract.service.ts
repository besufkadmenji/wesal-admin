import {
  PaginatedSignedContractResponse,
  SignedContract,
  SignedContractPaginationInput,
} from "@/gql/graphql";
import { SIGNED_CONTRACT_BY_ID } from "@/graphql/signedContract/signedContractById";
import { SIGNED_CONTRACTS } from "@/graphql/signedContract/signedContracts";
import client from "@/utils/apollo.client";

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
}

export default SignedContractService;
