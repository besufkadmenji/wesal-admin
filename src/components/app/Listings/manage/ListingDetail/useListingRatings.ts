import { RatingSortField, SortOrder } from "@/gql/graphql";
import RatingService from "@/services/rating.service";
import { useQuery } from "@tanstack/react-query";

export const useListingRatings = (listingId: string) => {
  const {
    data: ratings,
    isLoading: isRatingsLoading,
    isError: isRatingsError,
  } = useQuery({
    queryKey: ["listing-ratings", listingId],
    queryFn: () =>
      RatingService.ratings({
        listingId,
        page: 1,
        limit: 6,
        sortBy: RatingSortField.CreatedAt,
        sortOrder: SortOrder.Desc,
      }),
    enabled: !!listingId,
  });

  const {
    data: statistics,
    isLoading: isStatisticsLoading,
    isError: isStatisticsError,
  } = useQuery({
    queryKey: ["listing-rating-statistics", listingId],
    queryFn: () => RatingService.ratingStatistics(listingId),
    enabled: !!listingId,
  });

  return {
    ratings: ratings?.items ?? [],
    pagination: ratings?.meta,
    statistics,
    isLoading: isRatingsLoading || isStatisticsLoading,
    isError: isRatingsError || isStatisticsError,
  };
};
