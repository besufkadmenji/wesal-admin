import { gql } from "@apollo/client";

export const ADMIN_SET_RATING_STATUS_MUTATION = gql`
  mutation adminSetRatingStatus($id: String!, $status: RatingStatus!) {
    adminSetRatingStatus(id: $id, status: $status) {
      id
      status
    }
  }
`;
