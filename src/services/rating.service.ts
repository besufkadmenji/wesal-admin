import { RatingPaginationInput, RatingStatistics } from "@/gql/graphql";
import { RATING_STATISTICS_QUERY } from "@/graphql/rating/ratingStatistics";
import { RATINGS_QUERY } from "@/graphql/rating/ratings";
import client from "@/utils/apollo.client";

export type ListingRating = {
  id: string;
  rating: number;
  comment?: string | null;
  createdAt: string;
  user?: {
    id: string;
    name?: string | null;
    avatarFilename?: string | null;
  } | null;
};

type ListingRatingsResponse = {
  items: ListingRating[];
  meta: {
    hasNext: boolean;
    hasPrevious: boolean;
    limit: number;
    page: number;
    total: number;
    totalPages: number;
  };
};

class RatingService {
  static ratings = async (
    input: RatingPaginationInput,
  ): Promise<ListingRatingsResponse | null> => {
    try {
      const ratingsResult = await client().query<{
        ratings: ListingRatingsResponse;
      }>({
        query: RATINGS_QUERY,
        variables: {
          input,
        },
      });
      return ratingsResult.data?.ratings ?? null;
    } catch (e) {
      console.error("ratingsResult", e);
    }
    return null;
  };

  static ratingStatistics = async (
    listingId: string,
  ): Promise<RatingStatistics | null> => {
    try {
      const statisticsResult = await client().query<{
        ratingStatistics: RatingStatistics;
      }>({
        query: RATING_STATISTICS_QUERY,
        variables: {
          listingId,
        },
      });
      return statisticsResult.data?.ratingStatistics ?? null;
    } catch (e) {
      console.error("ratingStatisticsResult", e);
    }
    return null;
  };
}

export default RatingService;
