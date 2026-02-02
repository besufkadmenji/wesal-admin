import {
  DeactivateProviderMutation,
  DeactivateProviderMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const DEACTIVATE_PROVIDER_MUTATION: TypedDocumentNode<
  DeactivateProviderMutation,
  DeactivateProviderMutationVariables
> = gql`
  mutation deactivateProvider($deactivateProviderId: ID!, $reason: String!) {
    deactivateProvider(id: $deactivateProviderId, reason: $reason) {
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
      }
      commercialName
      commercialRegistrationFilename
    }
  }
`;
