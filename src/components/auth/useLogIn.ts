import { useLoginForm } from "@/components/auth/useLoginForm";
import { AuthService } from "@/services/auth.service";
import { showErrorMessage } from "@/utils/show.message";
import Cookie from "js-cookie";
import { useState } from "react";

export const useLogIn = () => {
  const [busy, setBusy] = useState(false);
  const form = useLoginForm((state) => state.form);

  const logIn = async () => {
    setBusy(true);
    try {
      const response = await AuthService.login({
        email: form.email,
        password: form.password,
      });
      if (response) {
        Cookie.set("token", response.accessToken);
        window.history.replaceState(null, "", "/");
        window.location.href = "/";
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

  return { logIn, busy };
};
