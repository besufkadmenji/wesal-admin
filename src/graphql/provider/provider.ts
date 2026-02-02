import { ProviderQuery, ProviderQueryVariables } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const PROVIDER_QUERY: TypedDocumentNode<
  ProviderQuery,
  ProviderQueryVariables
> = gql`
  query provider($providerId: ID!) {
    provider(id: $providerId) {
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
        providerId
      }
      commercialName
      commercialRegistrationFilename
      publicId
    }
  }
`;
