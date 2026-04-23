"use client";
import {
  ListingPaginationInput,
  ListingStatus,
  ListingType,
} from "@/gql/graphql";
import ListingService from "@/services/listing.service";
import { useQuery } from "@tanstack/react-query";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";

type ListingListParams = Omit<ListingPaginationInput, "type"> & {
  type?: ListingType;
};

export const useListings = (initialParams?: ListingListParams) => {
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [limit] = useQueryState("limit", parseAsInteger.withDefault(10));
  const [search] = useQueryState("search", parseAsString.withDefault(""));
  const [type] = useQueryState("type", parseAsString.withDefault(""));
  const [status] = useQueryState("status", parseAsString.withDefault(""));
  const typeValue = type ? (type as ListingType) : undefined;
  const statusValue = status as ListingStatus | undefined;
  const params: ListingListParams = {
    ...initialParams,
    page,
    limit,
    ...(search && { search }),
    ...(type && { type: typeValue }),
    ...(status && { status: statusValue as ListingStatus }),
  };
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["listings", params, page, limit, search, type, status],
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
