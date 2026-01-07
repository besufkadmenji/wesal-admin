import {
  ActivateAdminMutation,
  ActivateAdminMutationVariables,
} from "@/gql/graphql";
import { gql } from "@apollo/client";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";

export const ACTIVATE_ADMIN_MUTATION: TypedDocumentNode<
  ActivateAdminMutation,
  ActivateAdminMutationVariables
> = gql`
  mutation activateAdmin($activateAdminId: ID!) {
    activateAdmin(id: $activateAdminId) {
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
