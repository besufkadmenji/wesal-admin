import { gql } from "@apollo/client";

export const RATING_STATISTICS_QUERY = gql`
  query ratingStatistics($listingId: String!) {
    ratingStatistics(listingId: $listingId) {
      averageRating
      totalRatings
      fiveStars
      fourStars
      threeStars
      twoStars
      oneStar
    }
  }
`;
