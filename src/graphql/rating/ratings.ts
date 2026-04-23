import { gql } from "@apollo/client";

export const RATINGS_QUERY = gql`
  query ratings($input: RatingPaginationInput) {
    ratings(input: $input) {
      items {
        id
        rating
        comment
        createdAt
        user {
          id
          name
          avatarFilename
        }
      }
      meta {
        hasNext
        hasPrevious
        limit
        page
        total
        totalPages
      }
    }
  }
`;
