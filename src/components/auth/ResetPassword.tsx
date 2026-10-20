"use client";
import { PasswordInput } from "@/components/app/shared/forms/FormInput";
import { useForgotPassword } from "@/components/auth/useForgotPassword";
import { useDict } from "@/hooks/useDict";
import { useState } from "react";
import { PrimaryButton } from "../app/shared/button/PrimaryButton";
import { AuthBackLink } from "@/components/auth/AuthBackLink";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { useQueryState } from "nuqs";
import { showErrorMessage } from "@/utils/show.message";
export const ResetPassword = () => {
  const dict = useDict();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetToken, setResetToken] = useQueryState("resetToken");
  const { resetPassword, busy } = useForgotPassword();
  return (
    <AuthLayout
      title={dict.admin_reset_password_form.title}
      subtitle={dict.admin_reset_password_form.description}
      footer={<AuthBackLink />}
    >
      <form
        className="grid gap-6"
        onSubmit={(event) => {
          event.preventDefault();
          if (newPassword !== confirmPassword) {
            showErrorMessage(
              dict.admin_reset_password_form.errors.passwords_not_matching,
            );
            return;
          }
          resetPassword(newPassword, resetToken || "");
        }}
      >
        <PasswordInput
          label={dict.admin_reset_password_form.labels.password}
          placeholder={"**************"}
          value={newPassword}
          onChange={(value: string): void => {
            setNewPassword(value);
          }}
        />
        <PasswordInput
          label={dict.admin_reset_password_form.labels.confirm_password}
          placeholder={"**************"}
          value={confirmPassword}
          onChange={(value: string): void => {
            setConfirmPassword(value);
          }}
        />
        <PrimaryButton
          type="submit"
          className="h-12 w-full text-base"
          isLoading={busy}
          isDisabled={busy}
        >
          {dict.admin_reset_password_form.buttons.sign_in}
        </PrimaryButton>
      </form>
    </AuthLayout>
  );
};
