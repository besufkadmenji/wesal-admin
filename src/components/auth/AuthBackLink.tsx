import { useDict } from "@/hooks/useDict";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

/** "Back to sign in" under the password-recovery steps (UI-3). */
export const AuthBackLink = () => {
  const dict = useDict();
  return (
    <Link
      href="/login"
      className="text-subTitle hover:text-primary inline-flex items-center gap-2 text-sm font-medium transition-colors dark:text-white/70 dark:hover:text-white"
    >
      <ArrowLeft className="size-4 rtl:rotate-180" strokeWidth={1.75} />
      {dict.auth.back_to_sign_in}
    </Link>
  );
};
