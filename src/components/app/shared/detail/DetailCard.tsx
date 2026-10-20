import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

/** UI-5: the one card surface (matches the summary, chart and dialog cards). */
export const DETAIL_CARD_SURFACE =
  "dark:bg-dark-black rounded-2xl border border-[#22283a]/[0.07] bg-white shadow-[0_1px_2px_rgba(34,40,58,0.04),0_8px_24px_-12px_rgba(34,40,58,0.10)] dark:border-white/8";

export const DetailCard = ({
  title,
  subtitle,
  endContent,
  className,
  children,
  as: Tag = "section",
}: {
  title?: ReactNode;
  subtitle?: ReactNode;
  endContent?: ReactNode;
  className?: string;
  children: ReactNode;
  as?: "section" | "div";
}) => (
  <Tag className={twMerge(DETAIL_CARD_SURFACE, "grid gap-4 p-6", className)}>
    {(title || endContent) && (
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div className="grid gap-1">
          {title && (
            <h2 className="text-primary text-base font-semibold dark:text-white">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-subTitle dark:text-dark-subTitle text-sm">
              {subtitle}
            </p>
          )}
        </div>
        {endContent}
      </header>
    )}
    {children}
  </Tag>
);
