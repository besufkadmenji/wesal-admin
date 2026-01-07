import {
  AdminVerifyPasswordResetOtpMutation,
  AdminVerifyPasswordResetOtpMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const ADMIN_VERIFY_PASSWORD_RESET_OTP_MUTATION: TypedDocumentNode<
  AdminVerifyPasswordResetOtpMutation,
  AdminVerifyPasswordResetOtpMutationVariables
> = gql`
  mutation adminVerifyPasswordResetOtp(
    $input: VerifyAdminPasswordResetOtpInput!
  ) {
    adminVerifyPasswordResetOtp(input: $input) {
      resetToken
    }
  }
`;
