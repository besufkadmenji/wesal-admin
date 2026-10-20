import { Skeleton } from "@heroui/react";

/** UI-10: shimmer placeholder for a grid of form fields. */
export const FieldsSkeleton = ({ rows = 4 }: { rows?: number }) => (
  <div aria-busy className="grid gap-4 md:grid-cols-2">
    {Array.from({ length: rows }, (_, index) => (
      <div key={index} className="grid gap-2">
        <Skeleton className="h-3 w-24 rounded-md" />
        <Skeleton className="h-11 w-full rounded-lg" />
      </div>
    ))}
  </div>
);
