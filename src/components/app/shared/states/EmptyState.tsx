import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

/** UI-10: the one empty/unavailable state (tables, lists, detail pages). */
export const EmptyState = ({
  icon: Icon,
  title,
  message,
  action,
  size = "page",
  className,
}: {
  icon: LucideIcon;
  title: ReactNode;
  message?: ReactNode;
  action?: ReactNode;
  size?: "page" | "inline";
  className?: string;
}) => (
  <div
    className={twMerge(
      "grid justify-items-center gap-3 text-center",
      size === "page" ? "px-6 py-16" : "px-4 py-10",
      className,
    )}
  >
    <span
      className={twMerge(
        "bg-accent-soft text-primary grid place-items-center rounded-2xl dark:text-white",
        size === "page" ? "size-16" : "size-12",
      )}
    >
      <Icon
        aria-hidden
        className={size === "page" ? "size-8" : "size-6"}
        strokeWidth={1.5}
      />
    </span>
    <div className="grid max-w-md gap-1">
      <p
        className={twMerge(
          "text-primary font-semibold dark:text-white",
          size === "page" ? "text-lg" : "text-sm",
        )}
      >
        {title}
      </p>
      {message && (
        <p className="text-subTitle dark:text-dark-subTitle text-sm leading-6">
          {message}
        </p>
      )}
    </div>
    {action && (
      <div className="flex flex-wrap justify-center gap-3">{action}</div>
    )}
  </div>
);
