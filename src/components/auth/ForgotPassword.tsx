"use client";
import { Mail as EmailIcon } from "lucide-react";
import { FormInput } from "@/components/app/shared/forms/FormInput";
import { useForgotPassword } from "@/components/auth/useForgotPassword";
import { useDict } from "@/hooks/useDict";
import { useState } from "react";
import { PrimaryButton } from "../app/shared/button/PrimaryButton";
import { AuthBackLink } from "@/components/auth/AuthBackLink";
import { AuthLayout } from "@/components/auth/AuthLayout";
export const ForgotPassword = () => {
  const dict = useDict();
  const [email, setEmail] = useState("");
  const { forgotPassword, busy } = useForgotPassword();
  return (
    <AuthLayout
      title={dict.admin_forgot_password_form.title}
      subtitle={dict.admin_forgot_password_form.description}
      footer={<AuthBackLink />}
    >
      <form
        className="grid gap-6"
        onSubmit={(event) => {
          event.preventDefault();
          forgotPassword(email);
        }}
      >
        <FormInput
          label={dict.auth.email}
          placeholder={dict.auth.email_placeholder}
          value={email}
          onChange={(value: string): void => {
            setEmail(value);
          }}
          endContent={<EmailIcon className="text-subTitle size-5" />}
        />
        <PrimaryButton
          type="submit"
          className="h-12 w-full text-base"
          isLoading={busy}
          isDisabled={busy}
        >
          {dict.admin_forgot_password_form.buttons.send_verification_code}
        </PrimaryButton>
      </form>
    </AuthLayout>
  );
};
