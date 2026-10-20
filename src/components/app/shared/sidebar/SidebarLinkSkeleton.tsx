import { Skeleton } from "@heroui/react";
import { twMerge } from "tailwind-merge";

/**
 * UI-4: placeholder for a permission-gated sidebar row while the admin's
 * permissions load, so links don't pop in one by one.
 */
export const SidebarLinkSkeleton = ({
  width,
  collapsed = false,
}: {
  width: string;
  collapsed?: boolean;
}) => (
  <div
    aria-hidden
    className={twMerge(
      "flex items-center gap-3 px-3 py-2.5",
      collapsed && "justify-center px-0",
    )}
  >
    <Skeleton className="size-5 shrink-0 rounded-md" />
    {!collapsed && <Skeleton className="h-3.5 rounded-md" style={{ width }} />}
  </div>
);
