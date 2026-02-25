import { UserQuery, UserQueryVariables } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const USER_QUERY: TypedDocumentNode<UserQuery, UserQueryVariables> = gql`
  query user($userId: ID!) {
    user(id: $userId) {
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
        status
      }
      deactivationReason
      deleteReason
      deletedAt
      publicId
    }
  }
`;
