import {
  RemoveProviderMutation,
  RemoveProviderMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const REMOVE_PROVIDER_MUTATION: TypedDocumentNode<
  RemoveProviderMutation,
  RemoveProviderMutationVariables
> = gql`
  mutation removeProvider(
    $removeProviderId: ID!
    $input: DeleteProviderInput!
  ) {
    removeProvider(id: $removeProviderId, input: $input) {
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
