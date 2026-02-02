import {
  PaginatedProviderResponse,
  Provider,
  ProviderPaginationInput,
  ProviderStatus,
} from "@/gql/graphql";
import { useLang } from "@/hooks/useLang";
import ProviderService from "@/services/provider.service";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";

export const useProviders = (): UseQueryResult<
  PaginatedProviderResponse | null,
  Error
> => {
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [limit] = useQueryState("limit", parseAsInteger.withDefault(20));
  const [search] = useQueryState("search", parseAsString.withDefault(""));

  const lang = useLang();
  const params: ProviderPaginationInput = {
    page,
    limit,
    ...(search && { search }),
    status: ProviderStatus.PendingApproval,
  };

  return useQuery({
    queryKey: ["providerRequests", lang, page, limit, search],
    queryFn: () => ProviderService.providers(params),
  });
};

export const useProvider = (
  id: string,
): UseQueryResult<Provider | null, Error> => {
  const lang = useLang();

  return useQuery({
    queryKey: ["providerRequest", id, lang],
    queryFn: () => ProviderService.provider(id),
    enabled: !!id,
  });
};
