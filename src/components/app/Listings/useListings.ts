"use client";
import { ListingPaginationInput, ListingStatus } from "@/gql/graphql";
import { useLang } from "@/hooks/useLang";
import ListingService from "@/services/listing.service";
import { useQuery } from "@tanstack/react-query";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";

export const useListings = (initialParams?: ListingPaginationInput) => {
  const lang = useLang();
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [limit] = useQueryState("limit", parseAsInteger.withDefault(10));
  const [search] = useQueryState("search", parseAsString.withDefault(""));
  const [status] = useQueryState("status", parseAsString.withDefault(""));
  const statusValue = status as ListingStatus | undefined;
  const params: ListingPaginationInput = {
    page,
    limit,
    ...(search && { search }),
    ...(status && { status: statusValue as ListingStatus }),
    ...initialParams,
  };
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["listings", params, page, limit, search, status],
    queryFn: () => ListingService.listings(params),
  });

  return {
    listings: data?.items,
    pagination: data?.meta,
    isLoading,
    isError,
    error,
  };
};

export const useListingById = (id: string | null) => {
  const {
    data: listing,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["listing", id],
    queryFn: () => ListingService.listing(id!),
    enabled: !!id,
  });

  return {
    listing,
    isLoading,
    isError,
    error,
  };
};
