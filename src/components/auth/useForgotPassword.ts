import { useDict } from "@/hooks/useDict";
import { AuthService } from "@/services/auth.service";
import { showErrorMessage, showSuccessMessage } from "@/utils/show.message";
import { useCallback, useRef, useState } from "react";
import { useAppRouter } from "@/hooks/useAppRouter";
import { useSearchParams } from "next/navigation";

export const useForgotPassword = () => {
  const [busy, setBusy] = useState(false);
  const router = useAppRouter();
  const dict = useDict();
  const searchParams = useSearchParams();
  const [resetSeconds, setResetSeconds] = useState(60);
  const timer = useRef<string | undefined | NodeJS.Timeout>(undefined);
  const startTimer = useCallback(() => {
    timer.current = setInterval(() => {
      setResetSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, []);
  const forgotPassword = async (email: string) => {
    setBusy(true);
    try {
      const response = await AuthService.forgotPassword({
        email: email,
      });
      if (response) {
        showSuccessMessage(dict.auth.reset_code_sent);
        router.replace(`/verify-reset-code?email=${encodeURIComponent(email)}`);
      }
    } catch (error) {
      showErrorMessage(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred.",
      );
    }
    setBusy(false);
  };

  const resendCode = async () => {
    const email = searchParams.get("email") || "";
    await forgotPassword(email);
    // showSuccessMessage(dict.auth.reset_code_resent);
    setResetSeconds(60);
    startTimer();
  };

  const verifyResetCode = async (code: string) => {
    setBusy(true);
    try {
      const email = searchParams.get("email") || "";
      const response = await AuthService.verifyResetCode({
        email: email,
        code,
      });
      if (response) {
        router.replace(
          `/reset-password?email=${encodeURIComponent(email)}&resetToken=${encodeURIComponent(response.resetToken)}`,
        );
      }
    } catch (error) {
      showErrorMessage(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred.",
      );
    }
    setBusy(false);
  };
  const resetPassword = async (newPassword: string, resetToken: string) => {
    setBusy(true);
    try {
      const response = await AuthService.resetPassword({
        newPassword,
        resetToken,
      });
      if (response) {
        showSuccessMessage(dict.auth.password_reset_success);
        router.replace(`/login`);
      }
    } catch (error) {
      showErrorMessage(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred.",
      );
    }
    setBusy(false);
  };

  return {
    forgotPassword,
    verifyResetCode,
    resetPassword,
    busy,
    resetSeconds,
    startTimer,
    resendCode,
  };
};
