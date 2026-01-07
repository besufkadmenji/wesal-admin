import {
  DeactivateAdminMutation,
  DeactivateAdminMutationVariables
} from "@/gql/graphql";
import { gql } from "@apollo/client";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";

export const DEACTIVATE_ADMIN_MUTATION: TypedDocumentNode<
  DeactivateAdminMutation,
  DeactivateAdminMutationVariables
> = gql`
  mutation deactivateAdmin(
    $deactivateAdminId: ID!
    $input: DeactivateAdminInput!
  ) {
    deactivateAdmin(id: $deactivateAdminId, input: $input) {
      avatarFilename
      createdAt
      email
      fullName
      id
      organizationName
      permissionType
      phoneNumber
      roleName
      status
      updatedAt
      userType
    }
  }
`;
