"use client";
import {
  DeliveryCompanyPaginationInput,
  DeliveryCompanyStatus,
} from "@/gql/graphql";
import { useLang } from "@/hooks/useLang";
import DeliveryCompanyService from "@/services/delivery.company.service";
import { useQuery } from "@tanstack/react-query";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";

export const useDeliveryCompanies = (
  initialParams?: DeliveryCompanyPaginationInput,
) => {
  const lang = useLang();
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [limit] = useQueryState("limit", parseAsInteger.withDefault(20));
  const [search] = useQueryState("search", parseAsString.withDefault(""));
  const [status] = useQueryState("status", parseAsString.withDefault(""));
  const statusValue = status as DeliveryCompanyStatus | undefined;
  const params: DeliveryCompanyPaginationInput = {
    page,
    limit,
    ...(search && { search }),
    ...(status && { status: statusValue as DeliveryCompanyStatus }),
    ...initialParams,
  };
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["deliveryCompanies", params, page, limit, search, status],
    queryFn: () => DeliveryCompanyService.deliveryCompanies(params),
  });

  return {
    deliveryCompanies: data?.items,
    pagination: data?.meta,
    isLoading,
    isError,
    error,
  };
};

export const useDeliveryCompanyById = (id: string | null) => {
  const {
    data: deliveryCompany,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["deliveryCompany", id],
    queryFn: () => DeliveryCompanyService.deliveryCompany(id!),
    enabled: !!id,
  });

  return {
    deliveryCompany,
    isLoading,
    isError,
    error,
  };
};
