import {
  SignedContractByProviderIdQuery,
  SignedContractByProviderIdQueryVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";
export const SIGNED_CONTRACT_BY_PROVIDER_ID: TypedDocumentNode<
  SignedContractByProviderIdQuery,
  SignedContractByProviderIdQueryVariables
> = gql`
  query signedContractByProviderId($providerId: String!) {
    signedContractByProviderId(providerId: $providerId) {
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
      provider {
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
        status
        updatedAt
        withAbsher
      }
      providerId
    }
  }
`;
