import {
  PaginatedUserResponse,
  User,
  UserPaginationInput,
  UserRole,
  UserStatus,
} from "@/gql/graphql";
import { useLang } from "@/hooks/useLang";
import UserService from "@/services/user.service";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";

export const useUsers = (): UseQueryResult<
  PaginatedUserResponse | null,
  Error
> => {
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [limit] = useQueryState("limit", parseAsInteger.withDefault(20));
  const [search] = useQueryState("search", parseAsString.withDefault(""));

  const lang = useLang();
  const params: UserPaginationInput = {
    page,
    limit,
    ...(search && { search }),
    status: UserStatus.PendingApproval,
    role: UserRole.Provider,
  };

  return useQuery({
    queryKey: ["providerRequests", lang, page, limit, search],
    queryFn: () => UserService.users(params),
  });
};

export const useUser = (id: string): UseQueryResult<User | null, Error> => {
  const lang = useLang();

  return useQuery({
    queryKey: ["providerRequest", id, lang],
    queryFn: () => UserService.user(id),
    enabled: !!id,
  });
};
