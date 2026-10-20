import { Skeleton } from "@heroui/react";

/**
 * UI-4: placeholder for a permission-gated sidebar row while the admin's
 * permissions load, so links don't pop in one by one.
 */
export const SidebarLinkSkeleton = ({ width }: { width: string }) => (
  <div aria-hidden className="flex items-center gap-3 px-3 py-2.5">
    <Skeleton className="size-5 shrink-0 rounded-md" />
    <Skeleton className="h-3.5 rounded-md" style={{ width }} />
  </div>
);
