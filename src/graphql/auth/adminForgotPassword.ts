import {
  AdminForgotPasswordMutation,
  AdminForgotPasswordMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const ADMIN_FORGOT_PASSWORD_MUTATION: TypedDocumentNode<
  AdminForgotPasswordMutation,
  AdminForgotPasswordMutationVariables
> = gql`
  mutation adminForgotPassword($input: AdminForgotPasswordInput!) {
    adminForgotPassword(input: $input)
  }
`;
