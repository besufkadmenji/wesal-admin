"use client";
import { useForgotPassword } from "@/components/auth/useForgotPassword";
import { useDict } from "@/hooks/useDict";
import { Button, InputOtp } from "@heroui/react";
import { useEffect, useState } from "react";
import { PrimaryButton } from "../app/shared/button/PrimaryButton";
import { AuthBackLink } from "@/components/auth/AuthBackLink";
import { AuthLayout } from "@/components/auth/AuthLayout";
export const VerifyCode = () => {
  const dict = useDict();
  const [code, setCode] = useState("");
  const { verifyResetCode, busy, resendCode, startTimer, resetSeconds } =
    useForgotPassword();
  useEffect(() => {
    startTimer();
  }, [startTimer]);

  return (
    <AuthLayout
      title={dict.admin_verify_code_form.title}
      subtitle={dict.admin_verify_code_form.description}
      footer={<AuthBackLink />}
    >
      <form
        className="grid gap-8"
        onSubmit={(event) => {
          event.preventDefault();
          if (code.length === 4) verifyResetCode(code);
        }}
      >
        <div dir="ltr" className="grid justify-items-center">
          <InputOtp
            length={4}
            value={code}
            onValueChange={setCode}
            size="lg"
            classNames={{
              wrapper: "justify-center",
              segmentWrapper: "h-14 py-0 gap-4",
              segment:
                "bg-app-background! dark:bg-dark-black size-14 text-lg border before:content-['-'] data-[focus-visible=true]:before:content-[''] data-[active=true]:before:content-[''] data-[has-value=true]:before:content-[''] data-[active=true]:border-app-primary rounded-xl border-dashboard-border dark:border-dark-border",
              errorMessage: "rtl:text-right",
            }}
            placeholder="-"
            errorMessage={dict.admin_verify_code_form.inputs.code.error_message}
          />
        </div>
        <div className="flex items-center justify-center gap-3 text-sm">
          <span className="text-subTitle font-medium tabular-nums dark:text-white/70">
            00:{resetSeconds < 10 ? `0${resetSeconds}` : resetSeconds}
          </span>
          <Button
            variant="light"
            className="text-app-primary h-auto min-h-0 min-w-0 p-0 font-semibold data-[disabled=true]:opacity-40"
            isDisabled={resetSeconds !== 0}
            onPress={() => {
              resendCode();
            }}
          >
            {dict.admin_verify_code_form.resend_code}
          </Button>
        </div>
        <PrimaryButton
          type="submit"
          className="h-12 w-full text-base"
          isLoading={busy}
          isDisabled={busy}
        >
          {dict.admin_verify_code_form.buttons.confirm}
        </PrimaryButton>
      </form>
    </AuthLayout>
  );
};
