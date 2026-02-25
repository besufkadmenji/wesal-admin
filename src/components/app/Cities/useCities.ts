"use client";
import {
  CityPaginationInput,
  CityStatus,
  CountryPaginationInput,
} from "@/gql/graphql";
import CityService from "@/services/city.service";
import { useQuery } from "@tanstack/react-query";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";

export const useCountries = (initialParams?: CountryPaginationInput) => {
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [limit] = useQueryState("limit", parseAsInteger.withDefault(10));
  const [search] = useQueryState("search", parseAsString.withDefault(""));
  const params: CountryPaginationInput = {
    page,
    limit,
    ...(search && { search }),
    ...initialParams,
  };
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["countries", params, page, limit, search],
    queryFn: () => CityService.countries(params),
  });

  return {
    countries: data?.items,
    pagination: data?.meta,
    isLoading,
    isError,
    error,
  };
};

export const useCities = (initialParams?: CityPaginationInput) => {
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [limit] = useQueryState("limit", parseAsInteger.withDefault(10));
  const [search] = useQueryState("search", parseAsString.withDefault(""));
  const [status] = useQueryState("status", parseAsString.withDefault(""));
  const params: CityPaginationInput = {
    page,
    limit,
    ...(search && { search }),
    ...(status && { status: status as CityStatus }),
    ...initialParams,
  };
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["cities", params, page, limit, search, status],
    queryFn: () => CityService.cities(params),
  });

  return {
    cities: data?.items,
    pagination: data?.meta,
    isLoading,
    isError,
    error,
  };
};

export const useCityById = (id: string | null) => {
  const {
    data: city,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["city", id],
    queryFn: () => CityService.city(id!),
    enabled: !!id,
  });

  return {
    city,
    isLoading,
    isError,
    error,
  };
};
