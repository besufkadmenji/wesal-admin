import {
  CreateAdminMutation,
  CreateAdminMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const CREATE_ADMIN_MUTATION: TypedDocumentNode<
  CreateAdminMutation,
  CreateAdminMutationVariables
> = gql`
  mutation createAdmin($createAdminInput: CreateAdminInput!) {
    createAdmin(createAdminInput: $createAdminInput) {
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
