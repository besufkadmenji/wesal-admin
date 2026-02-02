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
