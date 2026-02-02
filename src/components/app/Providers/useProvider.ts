import {
  PaginatedProviderResponse,
  Provider,
  ProviderPaginationInput,
  ProviderStatus
} from "@/gql/graphql";
import { useLang } from "@/hooks/useLang";
import ProviderService from "@/services/provider.service";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";

export const useProviders = (
  initialParams?: ProviderPaginationInput,
): UseQueryResult<PaginatedProviderResponse | null, Error> => {
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [limit] = useQueryState("limit", parseAsInteger.withDefault(20));
  const [search] = useQueryState("search", parseAsString.withDefault(""));
  const [status] = useQueryState("status", parseAsString.withDefault(""));
  const [role] = useQueryState("role", parseAsString.withDefault("PROVIDER"));

  const lang = useLang();
  console.log("useProviders role:", role, initialParams);
  const params: ProviderPaginationInput = {
    page,
    limit,
    ...(search && { search }),
    ...(status && {
      status: status as ProviderStatus,
    }),
    ...initialParams,
  };

  return useQuery({
    queryKey: ["providers", lang, page, limit, search, status, role],
    queryFn: () => ProviderService.providers(params),
  });
};

export const useProvider = (
  id: string,
): UseQueryResult<Provider | null, Error> => {
  const lang = useLang();

  return useQuery({
    queryKey: ["provider", id, lang],
    queryFn: () => ProviderService.provider(id),
    enabled: !!id,
  });
};
