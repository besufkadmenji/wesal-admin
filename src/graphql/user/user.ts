import { UserQuery, UserQueryVariables } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const USER_QUERY: TypedDocumentNode<UserQuery, UserQueryVariables> = gql`
  query user($userId: ID!) {
    user(id: $userId) {
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
`;
