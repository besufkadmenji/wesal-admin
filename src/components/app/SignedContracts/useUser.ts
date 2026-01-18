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

export const useUsers = (
  initialParams?: UserPaginationInput,
): UseQueryResult<PaginatedUserResponse | null, Error> => {
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [limit] = useQueryState("limit", parseAsInteger.withDefault(20));
  const [search] = useQueryState("search", parseAsString.withDefault(""));
  const [status] = useQueryState("status", parseAsString.withDefault(""));
  const [role] = useQueryState("role", parseAsString.withDefault("USER"));

  const lang = useLang();
  console.log("useUsers role:", role, initialParams);
  const params: UserPaginationInput = {
    page,
    limit,
    ...(search && { search }),
    ...(status && {
      status: status as UserStatus,
    }),
    role: role as UserRole,
    ...initialParams,
  };

  return useQuery({
    queryKey: ["users", lang, page, limit, search, status, role],
    queryFn: () => UserService.users(params),
  });
};

export const useUser = (id: string): UseQueryResult<User | null, Error> => {
  const lang = useLang();

  return useQuery({
    queryKey: ["user", id, lang],
    queryFn: () => UserService.user(id),
    enabled: !!id,
  });
};
