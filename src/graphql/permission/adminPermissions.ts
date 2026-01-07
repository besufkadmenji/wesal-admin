import {
    AdminPermissionsQuery,
    AdminPermissionsQueryVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const ADMIN_PERMISSIONS_QUERY: TypedDocumentNode<
  AdminPermissionsQuery,
  AdminPermissionsQueryVariables
> = gql`
  query adminPermissions($adminId: ID!) {
    adminPermissions(adminId: $adminId) {
      adminId
      createdAt
      id
      permission {
        action
        createdAt
        description
        id
        module
        name
        nameAr
        permissionPlatform
        resource
        updatedAt
      }
      permissionId
      updatedAt
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
    }
  }
`;
