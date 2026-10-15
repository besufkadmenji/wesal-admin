import { gql } from "@apollo/client";

export const ADMIN_RATINGS_QUERY = gql`
  query adminRatings($input: RatingPaginationInput) {
    adminRatings(input: $input) {
      items {
        id
        rating
        comment
        status
        createdAt
        user {
          id
          name
          phone
          avatarFilename
        }
        listing {
          id
          name
        }
        provider {
          id
          commercialName
        }
        contract {
          id
          publicId
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
