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
            image
            updatedAt
            rulesEn
            rulesAr
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
          signedContract {
            contractExpiresAt
            contractSignedAt
            platformManagerSignature
            serviceProviderSignature
            status
            terminationReason
            platformManagerName
            acceptedRulesEn
            acceptedRulesAr
            id
            createdAt
            publicId
            updatedAt
            userId
          }
          commercialName
          commercialRegistrationFilename
          publicId
        }
      }
    }
  `;
