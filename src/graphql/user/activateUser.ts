import {
  ActivateUserMutation,
  ActivateUserMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const ACTIVATE_USER_MUTATION: TypedDocumentNode<
  ActivateUserMutation,
  ActivateUserMutationVariables
> = gql`
  mutation activateUser($activateUserId: ID!) {
    activateUser(id: $activateUserId) {
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
      }
      commercialName
      commercialRegistrationFilename
    }
  }
`;
