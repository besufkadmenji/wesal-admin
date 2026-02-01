"use client";
import { BankPaginationInput, BankStatus } from "@/gql/graphql";
import { useLang } from "@/hooks/useLang";
import BankService from "@/services/bank.service";
import { useQuery } from "@tanstack/react-query";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";

export const useBanks = (initialParams?: BankPaginationInput) => {
  const lang = useLang();
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [limit] = useQueryState("limit", parseAsInteger.withDefault(20));
  const [search] = useQueryState("search", parseAsString.withDefault(""));
  const [status] = useQueryState("status", parseAsString.withDefault(""));
  const statusValue = status as BankStatus | undefined;
  const params: BankPaginationInput = {
    page,
    limit,
    ...(search && { search }),
    ...(status && { status: statusValue as BankStatus }),
    ...initialParams,
  };
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["banks", params, page, limit, search, status],
    queryFn: () => BankService.banks(params),
  });

  return {
    banks: data?.items,
    pagination: data?.meta,
    isLoading,
    isError,
    error,
  };
};

export const useBankById = (id: string | null) => {
  const {
    data: bank,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["bank", id],
    queryFn: () => BankService.bank(id!),
    enabled: !!id,
  });

  return {
    bank,
    isLoading,
    isError,
    error,
  };
};
