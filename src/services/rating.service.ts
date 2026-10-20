import {
  AdminRatingsQuery,
  RatingPaginationInput,
  RatingStatistics,
  RatingStatus,
} from "@/gql/graphql";
import { ADMIN_RATINGS_QUERY } from "@/graphql/rating/adminRatings";
import { ADMIN_SET_RATING_STATUS_MUTATION } from "@/graphql/rating/adminSetRatingStatus";
import { RATING_STATISTICS_QUERY } from "@/graphql/rating/ratingStatistics";
import client from "@/utils/apollo.client";

export type AdminRating = AdminRatingsQuery["adminRatings"]["items"][number];
export type AdminRatingsResponse = AdminRatingsQuery["adminRatings"];

class RatingService {
  static adminRatings = async (
    input: RatingPaginationInput,
  ): Promise<AdminRatingsResponse | null> => {
    try {
      const result = await client().query<AdminRatingsQuery>({
        query: ADMIN_RATINGS_QUERY,
        variables: { input },
        fetchPolicy: "network-only",
      });
      return result.data?.adminRatings ?? null;
    } catch (e) {
      console.error("adminRatingsResult", e);
    }
    return null;
  };

  /** Publish or hide a comment; throws so callers can surface the error. */
  static setStatus = async (id: string, status: RatingStatus) => {
    const result = await client().mutate<{
      adminSetRatingStatus: { id: string; status: RatingStatus };
    }>({
      mutation: ADMIN_SET_RATING_STATUS_MUTATION,
      variables: { id, status },
    });
    if (result.error) throw result.error;
    return result.data?.adminSetRatingStatus ?? null;
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
