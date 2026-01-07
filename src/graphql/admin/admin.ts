import { AdminQuery, AdminQueryVariables } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const ADMIN_QUERY: TypedDocumentNode<AdminQuery, AdminQueryVariables> =
  gql`
    query admin($adminId: ID!) {
      admin(id: $adminId) {
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
      }
    }
  `;
