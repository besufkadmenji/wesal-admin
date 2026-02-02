import { UsersQuery, UsersQueryVariables } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const USERS_QUERY: TypedDocumentNode<UsersQuery, UsersQueryVariables> =
  gql`
    query users($pagination: UserPaginationInput!) {
      users(pagination: $pagination) {
        meta {
          hasNext
          hasPrevious
          limit
          page
          total
          totalPages
        }
        items {
          address
          avatarFilename
          bankName
          cityId
          countryId
          createdAt
          dialCode
          email
          emailVerified
          ibanNumber
          id
          isActive
          languageCode
          latitude
          longitude
          name
          phone
          phoneVerified
          updatedAt
          status
          city {
            countryId
            createdAt
            id
            nameAr
            nameEn
            updatedAt
          }
          deactivationReason
          deleteReason
          deletedAt
          publicId
        }
      }
    }
  `;
