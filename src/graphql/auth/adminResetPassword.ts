import {
  AdminResetPasswordMutation,
  AdminResetPasswordMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const ADMIN_RESET_PASSWORD_MUTATION: TypedDocumentNode<
  AdminResetPasswordMutation,
  AdminResetPasswordMutationVariables
> = gql`
  mutation adminResetPassword($input: AdminResetPasswordInput!) {
    adminResetPassword(input: $input)
  }
`;
