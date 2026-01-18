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
  const [status] = useQueryState("status", parseAsString.withDefault(""));

  const lang = useLang();
  const params: UserPaginationInput = {
    page,
    limit,
    ...(search && { search }),
    ...(status && {
      status: status as UserStatus,
    }),
    role: UserRole.Provider,
  };

  return useQuery({
    queryKey: ["usersWithContracts", lang, page, limit, search, status],
    queryFn: () => UserService.users(params, true),
  });
};

export const useUser = (id: string): UseQueryResult<User | null, Error> => {
  const lang = useLang();

  return useQuery({
    queryKey: ["userWithContracts", id, lang],
    queryFn: () => UserService.user(id),
    enabled: !!id,
  });
};
