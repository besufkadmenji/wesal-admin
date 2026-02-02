import {
  DeactivateUserMutation,
  DeactivateUserMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const DEACTIVATE_USER_MUTATION: TypedDocumentNode<
  DeactivateUserMutation,
  DeactivateUserMutationVariables
> = gql`
  mutation deactivateUser(
    $deactivateUserId: ID!
    $input: DeactivateUserInput!
  ) {
    deactivateUser(id: $deactivateUserId, input: $input) {
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
