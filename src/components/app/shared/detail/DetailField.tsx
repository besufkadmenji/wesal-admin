import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

/** UI-5: a read-only label and value, readable in light and dark mode. */
export const DetailField = ({
  label,
  value,
  dir,
  boxed = false,
  className,
}: {
  label: ReactNode;
  value: ReactNode;
  dir?: "ltr" | "rtl";
  boxed?: boolean;
  className?: string;
}) => (
  <div
    className={twMerge(
      "grid content-start gap-1",
      boxed &&
        "bg-accent-soft rounded-2xl border border-[#22283a]/[0.06] p-4 dark:border-white/8",
      className,
    )}
  >
    <span className="text-subTitle dark:text-dark-subTitle text-sm">
      {label}
    </span>
    <div
      dir={dir}
      className="text-primary leading-7 font-medium wrap-break-word dark:text-white"
    >
      {value}
    </div>
  </div>
);
