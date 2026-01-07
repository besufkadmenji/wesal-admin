import {
  AdminChangePasswordInput,
  AdminForgotPasswordInput,
  AdminLoginInput,
  AdminResetPasswordInput,
  VerifyAdminPasswordResetOtpInput,
} from "@/gql/graphql";
import { ADMIN_FORGOT_PASSWORD_MUTATION } from "@/graphql/auth/adminForgotPassword";
import { ADMIN_LOGIN_MUTATION } from "@/graphql/auth/adminLogin";
import client from "@/utils/apollo.client";
import { parseGraphQLError } from "@/utils/parse-graphql-error";
import { ADMIN_VERIFY_PASSWORD_RESET_OTP_MUTATION } from "@/graphql/auth/adminVerifyPasswordResetOtp";
import { ADMIN_RESET_PASSWORD_MUTATION } from "@/graphql/auth/adminResetPassword";
import { ADMIN_CHANGE_PASSWORD_MUTATION } from "@/graphql/auth/adminChangePassword";

export class AuthService {
  static login = async (input: AdminLoginInput) => {
    try {
      const adminLoginResponse = await client().mutate({
        mutation: ADMIN_LOGIN_MUTATION,
        variables: {
          input,
        },
      });
      return adminLoginResponse.data?.adminLogin ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
  static forgotPassword = async (input: AdminForgotPasswordInput) => {
    try {
      const adminForgotResponse = await client().mutate({
        mutation: ADMIN_FORGOT_PASSWORD_MUTATION,
        variables: {
          input,
        },
      });
      return adminForgotResponse.data?.adminForgotPassword ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
  static verifyResetCode = async (input: VerifyAdminPasswordResetOtpInput) => {
    try {
      const adminForgotResponse = await client().mutate({
        mutation: ADMIN_VERIFY_PASSWORD_RESET_OTP_MUTATION,
        variables: {
          input,
        },
      });
      return adminForgotResponse.data?.adminVerifyPasswordResetOtp ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
  static resetPassword = async (input: AdminResetPasswordInput) => {
    try {
      const adminForgotResponse = await client().mutate({
        mutation: ADMIN_RESET_PASSWORD_MUTATION,
        variables: {
          input,
        },
      });
      return adminForgotResponse.data?.adminResetPassword ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
  static changePassword = async (input: AdminChangePasswordInput) => {
    try {
      const adminForgotResponse = await client().mutate({
        mutation: ADMIN_CHANGE_PASSWORD_MUTATION,
        variables: {
          input,
        },
      });
      return adminForgotResponse.data?.adminChangePassword ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
}
