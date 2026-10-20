import type { ReactNode } from "react";

/** UI-12: a neutral label pill (e.g. a provider's categories). */
export const Tag = ({ children }: { children: ReactNode }) => (
  <span className="bg-accent-soft text-primary rounded-full px-3 py-1 text-sm font-medium dark:text-white">
    {children}
  </span>
);
