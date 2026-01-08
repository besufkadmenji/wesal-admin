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
      deactivationReason
      deleteReason
      deletedAt
    }
  }
`;
