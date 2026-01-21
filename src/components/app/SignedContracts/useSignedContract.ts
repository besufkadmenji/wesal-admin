import {
  PaginatedSignedContractResponse,
  SignedContract,
  SignedContractPaginationInput,
} from "@/gql/graphql";
import { useLang } from "@/hooks/useLang";
import SignedContractService from "@/services/signed.contract.service";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";

export const useSignedContracts = (): UseQueryResult<
  PaginatedSignedContractResponse | null,
  Error
> => {
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [limit] = useQueryState("limit", parseAsInteger.withDefault(20));
  const [search] = useQueryState("search", parseAsString.withDefault(""));

  const lang = useLang();
  const params: SignedContractPaginationInput = {
    page,
    limit,
    ...(search && { search }),
  };

  return useQuery({
    queryKey: ["signedContracts", lang, page, limit, search],
    queryFn: () => SignedContractService.signedContracts(params),
  });
};

export const useSignedContract = (
  id: string,
): UseQueryResult<SignedContract | null, Error> => {
  const lang = useLang();

  return useQuery({
    queryKey: ["signedContract", id, lang],
    queryFn: () => SignedContractService.signedContract(id),
    enabled: !!id,
  });
};
