import { AdminsQuery, AdminsQueryVariables } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const ADMINS_QUERY: TypedDocumentNode<
  AdminsQuery,
  AdminsQueryVariables
> = gql`
  query admins($paginationInput: AdminPaginationInput) {
    admins(paginationInput: $paginationInput) {
      meta {
        hasNext
        hasPrevious
        limit
        page
        total
        totalPages
      }
      items {
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
  }
`;
