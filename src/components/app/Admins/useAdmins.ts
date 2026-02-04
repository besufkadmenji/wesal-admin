"use client";
import { AdminPaginationInput, AdminStatus } from "@/gql/graphql";
import { useLang } from "@/hooks/useLang";
import AdminService from "@/services/admin.service";
import { useQuery } from "@tanstack/react-query";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";

export const useUsers = (initialParams?: AdminPaginationInput) => {
  const lang = useLang();
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [limit] = useQueryState("limit", parseAsInteger.withDefault(20));
  const [search] = useQueryState("search", parseAsString.withDefault(""));
  const [status] = useQueryState("status", parseAsString.withDefault(""));
  const statusValue = status as AdminStatus | undefined;
  const params: AdminPaginationInput = {
    page,
    limit,
    ...(search && { search }),
    ...(status && { status: statusValue as AdminStatus }),
    ...initialParams,
  };
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["admins", params, page, limit, search, status],
    queryFn: () => AdminService.admins(params),
  });

  return {
    admins: data?.items,
    pagination: data?.meta,
    isLoading,
    isError,
    error,
  };
};

export const useAdminById = (id: string | null) => {
  const {
    data: admin,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["admin", id],
    queryFn: () => AdminService.admin(id!),
    enabled: !!id,
  });

  return {
    admin,
    isLoading,
    isError,
    error,
  };
};
