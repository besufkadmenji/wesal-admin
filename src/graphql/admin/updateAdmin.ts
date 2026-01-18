import {
  UpdateAdminMutation,
  UpdateAdminMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const UPDATE_ADMIN_MUTATION: TypedDocumentNode<
  UpdateAdminMutation,
  UpdateAdminMutationVariables
> = gql`
  mutation updateAdmin(
    $updateAdminId: ID!
    $updateAdminInput: UpdateAdminInput!
  ) {
    updateAdmin(id: $updateAdminId, updateAdminInput: $updateAdminInput) {
      createdAt
      email
      fullName
      id
      organizationName
      permissionType
      roleName
      status
      updatedAt
      userType
      phoneNumber
      platformManagerSignature
    }
  }
`;
