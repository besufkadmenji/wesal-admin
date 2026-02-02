import {
  ActivateProviderMutation,
  ActivateProviderMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const ACTIVATE_PROVIDER_MUTATION: TypedDocumentNode<
  ActivateProviderMutation,
  ActivateProviderMutationVariables
> = gql`
  mutation activateProvider($activateProviderId: ID!) {
    activateProvider(id: $activateProviderId) {
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
    }
  }
`;
