import type { ReactNode } from "react";

/** UI-4: a labelled block of sidebar entries (a divider in the icon rail). */
export const SidebarSection = ({
  label,
  collapsed = false,
  children,
}: {
  label: string;
  collapsed?: boolean;
  children: ReactNode;
}) => (
  <div role="group" aria-label={label} className="grid gap-1">
    {collapsed ? (
      <span
        aria-hidden
        className="mx-3 mb-1 h-px bg-[#22283a]/[0.08] dark:bg-white/10"
      />
    ) : (
      <p className="text-subTitle-alt dark:text-dark-subTitle-alt px-3 pb-1 text-[11px] font-semibold tracking-wider uppercase">
        {label}
      </p>
    )}
    {children}
  </div>
);
