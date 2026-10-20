import type { ReactNode } from "react";

/** UI-4: a labelled block of sidebar entries. */
export const SidebarSection = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => (
  <div className="grid gap-1">
    <p className="text-subTitle-alt dark:text-dark-subTitle-alt px-3 pb-1 text-[11px] font-semibold tracking-wider uppercase">
      {label}
    </p>
    {children}
  </div>
);
