import { PermissionsQuery } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const PERMISSIONS_QUERY: TypedDocumentNode<PermissionsQuery> = gql`
  query permissions {
    permissions {
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
  }
`;
