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
          categories {
            createdAt
            descriptionAr
            descriptionEn
            id
            nameAr
            nameEn
            parentId
            updatedAt
          }
          cityId
          commercialRegistrationNumber
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
          role
          updatedAt
          withAbsher
          status
        }
      }
    }
  `;
