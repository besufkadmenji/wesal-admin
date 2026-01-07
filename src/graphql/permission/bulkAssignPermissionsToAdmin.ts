import {
  BulkAssignPermissionsToAdminMutation,
  BulkAssignPermissionsToAdminMutationVariables,
} from "@/gql/graphql";
import { gql } from "@apollo/client";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";

export const BULK_ASSIGN_PERMISSIONS_TO_ADMIN_MUTATION: TypedDocumentNode<
  BulkAssignPermissionsToAdminMutation,
  BulkAssignPermissionsToAdminMutationVariables
> = gql`
  mutation bulkAssignPermissionsToAdmin($input: BulkAssignPermissionsInput!) {
    bulkAssignPermissionsToAdmin(input: $input) {
      adminId
      createdAt
      id
      permission {
        resource
        action
        createdAt
        description
        id
        module
        name
        nameAr
        permissionPlatform
        updatedAt
      }
      admin {
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
      permissionId
      updatedAt
    }
  }
`;
