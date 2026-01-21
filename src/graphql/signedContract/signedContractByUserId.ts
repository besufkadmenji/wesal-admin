import {
  SignedContractByUserIdQuery,
  SignedContractByUserIdQueryVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";
export const SIGNED_CONTRACT_BY_USER_ID: TypedDocumentNode<
  SignedContractByUserIdQuery,
  SignedContractByUserIdQueryVariables
> = gql`
  query signedContractByUserId($userId: String!) {
    signedContractByUserId(userId: $userId) {
      acceptedRulesAr
      acceptedRulesEn
      contractExpiresAt
      contractSignedAt
      createdAt
      id
      platformManagerName
      platformManagerSignature
      publicId
      serviceProviderSignature
      status
      terminationReason
      updatedAt
      user {
        address
        avatarFilename
        bankName
        cityId
        commercialName
        commercialRegistrationFilename
        commercialRegistrationNumber
        countryId
        createdAt
        deactivationReason
        deleteReason
        deletedAt
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
        publicId
        role
        status
        updatedAt
        withAbsher
      }
      userId
    }
  }
`;
