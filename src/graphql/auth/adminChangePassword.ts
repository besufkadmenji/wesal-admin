import {
  AdminChangePasswordMutation,
  AdminChangePasswordMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const ADMIN_CHANGE_PASSWORD_MUTATION: TypedDocumentNode<
  AdminChangePasswordMutation,
  AdminChangePasswordMutationVariables
> = gql`
  mutation adminChangePassword($input: AdminChangePasswordInput!) {
    adminChangePassword(input: $input)
  }
`;
