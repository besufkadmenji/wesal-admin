"use client";
import { CategoryPaginationInput } from "@/gql/graphql";
import CategoryService from "@/services/category.service";
import { useQuery } from "@tanstack/react-query";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";

export const useCategories = (initialParams?: CategoryPaginationInput) => {
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [limit] = useQueryState("limit", parseAsInteger.withDefault(10));
  const [search] = useQueryState("search", parseAsString.withDefault(""));
  const [status] = useQueryState("status", parseAsString.withDefault(""));
  const params: CategoryPaginationInput = {
    page,
    limit,
    ...(search && { search }),
    ...(status && { status }),
    ...initialParams,
  };
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["categories", params, page, limit, search, status],
    queryFn: () => CategoryService.categories(params),
  });

  return {
    categories: data?.items,
    pagination: data?.meta,
    isLoading,
    isError,
    error,
  };
};

export const useCategoryById = (id: string | null) => {
  const {
    data: category,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["category", id],
    queryFn: () => CategoryService.category(id!),
    enabled: !!id,
  });

  return {
    category,
    isLoading,
    isError,
    error,
  };
};
