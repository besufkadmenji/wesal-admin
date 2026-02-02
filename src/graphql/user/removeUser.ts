import { RemoveUserMutation, RemoveUserMutationVariables } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const REMOVE_USER_MUTATION: TypedDocumentNode<
  RemoveUserMutation,
  RemoveUserMutationVariables
> = gql`
  mutation removeUser($removeUserId: ID!, $input: DeleteUserInput!) {
    removeUser(id: $removeUserId, input: $input) {
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
