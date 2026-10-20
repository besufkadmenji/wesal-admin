"use client";
import { useDict } from "@/hooks/useDict";
import { AuthLayout } from "@/components/auth/AuthLayout";
import {
  FormInput,
  PasswordInput,
} from "@/components/app/shared/forms/FormInput";
import { Mail as EmailIcon } from "lucide-react";
import { useLoginForm } from "@/components/auth/useLoginForm";
import Link from "next/link";
import { PrimaryButton } from "../app/shared/button/PrimaryButton";
import { useLogIn } from "@/components/auth/useLogIn";
export const LogIn = () => {
  const dict = useDict();
  const form = useLoginForm((state) => state.form);
  const setForm = useLoginForm((state) => state.setForm);
  const { logIn, busy } = useLogIn();
  return (
    <AuthLayout
      title={dict.auth.welcome_back}
      subtitle={dict.auth.sign_in_subtitle}
    >
      <form
        className="grid gap-6"
        onSubmit={(event) => {
          event.preventDefault();
          logIn();
        }}
      >
        <FormInput
          label={dict.auth.email}
          placeholder={dict.auth.email_placeholder}
          value={form.email}
          onChange={(value: string): void => {
            setForm({ ...form, email: value });
          }}
          endContent={
            <EmailIcon className="text-subTitle size-5 dark:text-white" />
          }
        />
        <div className="grid gap-3">
          <PasswordInput
            label={dict.auth.password}
            placeholder={"**************"}
            value={form.password}
            onChange={(value: string): void => {
              setForm({ ...form, password: value });
            }}
          />
          <Link
            href="/forgot-password"
            className="text-app-link justify-self-end text-sm leading-5 font-medium tracking-tight hover:underline"
          >
            {dict.auth.forgot_password}
          </Link>
        </div>
        <PrimaryButton
          type="submit"
          className="h-12 w-full text-base"
          isLoading={busy}
          isDisabled={busy}
        >
          {dict.auth.sign_in}
        </PrimaryButton>
      </form>
    </AuthLayout>
  );
};
