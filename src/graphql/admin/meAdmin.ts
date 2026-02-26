import { MeAdminQuery } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const ME_ADMIN_QUERY: TypedDocumentNode<MeAdminQuery> = gql`
  query meAdmin {
    meAdmin {
      id
      createdAt
      email
      fullName
      organizationName
      permissionType
      roleName
      status
      updatedAt
      userType
      phoneNumber
      avatarFilename
      platformManagerSignature
      adminPermissions {
        id
        permission {
          module
          action
        }
      }
    }
  }
`;
