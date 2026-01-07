import { AdminLoginMutation, AdminLoginMutationVariables } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const ADMIN_LOGIN_MUTATION: TypedDocumentNode<
  AdminLoginMutation,
  AdminLoginMutationVariables
> = gql`
  mutation adminLogin($input: AdminLoginInput!) {
    adminLogin(input: $input) {
      accessToken
    }
  }
`;
