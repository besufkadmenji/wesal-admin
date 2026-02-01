import {
  Listing,
  ListingPaginationInput,
  PaginatedListingResponse,
} from "@/gql/graphql";
import { ACTIVATE_LISTING_MUTATION } from "@/graphql/listing/activateListing";
import { DEACTIVATE_LISTING_MUTATION } from "@/graphql/listing/deactivateListing";
import { LISTING_QUERY } from "@/graphql/listing/listing";
import { LISTINGS_QUERY } from "@/graphql/listing/listings";
import { REMOVE_LISTING_MUTATION } from "@/graphql/listing/removeListing";
import client from "@/utils/apollo.client";
import { parseGraphQLError } from "@/utils/parse-graphql-error";

class ListingService {
  static listings = async (
    input: ListingPaginationInput,
  ): Promise<PaginatedListingResponse | null> => {
    try {
      const listingResult = await client().query({
        query: LISTINGS_QUERY,
        variables: {
          input,
        },
      });
      return listingResult.data?.listings ?? null;
    } catch (e) {
      console.error("listingResult", e);
    }
    return null;
  };
  static listing = async (listingId: string): Promise<Listing | null> => {
    try {
      const listingResult = await client().query({
        query: LISTING_QUERY,
        variables: {
          listingId,
        },
      });
      return listingResult.data?.listing ?? null;
    } catch (e) {
      console.error("listingResult", e);
    }
    return null;
  };

  static activateListing = async (activateListingId: string) => {
    try {
      const activateListingResponse = await client().mutate({
        mutation: ACTIVATE_LISTING_MUTATION,
        variables: {
          activateListingId,
        },
      });
      return activateListingResponse.data?.activateListing ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
  static deactivateListing = async (
    deactivateListingId: string,
    reason: string,
  ) => {
    try {
      const deactivateListingResponse = await client().mutate({
        mutation: DEACTIVATE_LISTING_MUTATION,
        variables: {
          deactivateListingId,
          reason,
        },
      });
      return deactivateListingResponse.data?.deactivateListing ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
  static removeListing = async (removeListingId: string) => {
    try {
      const removeListingResponse = await client().mutate({
        mutation: REMOVE_LISTING_MUTATION,
        variables: {
          removeListingId,
        },
      });
      return removeListingResponse.data?.removeListing ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
}

export default ListingService;
