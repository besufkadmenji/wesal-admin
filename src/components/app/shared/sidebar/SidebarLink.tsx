import { AppLink } from "@/components/app/shared/NoPrefetchLink";
import { useLang } from "@/hooks/useLang";
import { Tooltip } from "@heroui/react";
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

/**
 * UI-4: one sidebar row; the active row gets a soft tint and an edge bar.
 * Collapsed (icon rail): icon only, named by aria-label and a tooltip.
 */
export const SidebarLink = ({
  href,
  icon,
  label,
  active,
  nested,
  collapsed = false,
  onClick,
}: {
  href: string;
  icon?: ReactNode;
  label: string;
  active: boolean;
  nested?: boolean;
  collapsed?: boolean;
  onClick?: () => void;
}) => {
  const lang = useLang();
  const link = (
    <AppLink
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      aria-label={collapsed ? label : undefined}
      className={twMerge(
        "relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] leading-snug font-medium transition-colors duration-150",
        nested && "py-2 ps-11",
        collapsed && "justify-center px-0",
        active
          ? "bg-accent-soft text-primary dark:text-white"
          : "text-subTitle hover:text-primary dark:text-dark-subTitle hover:bg-[#22283a]/[0.04] dark:hover:bg-white/5 dark:hover:text-white",
      )}
    >
      {active && !nested && (
        <span
          aria-hidden
          className={twMerge(
            "bg-app-primary absolute inset-y-2 -start-4 w-1 rounded-e-full",
            collapsed && "-start-3",
          )}
        />
      )}
      {icon}
      {!collapsed && <span className="min-w-0 break-words">{label}</span>}
    </AppLink>
  );
  return collapsed ? (
    <Tooltip
      content={label}
      placement={lang === "ar" ? "left" : "right"}
      closeDelay={0}
    >
      {link}
    </Tooltip>
  ) : (
    link
  );
};
