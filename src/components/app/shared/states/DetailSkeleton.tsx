import { DETAIL_CARD_SURFACE } from "@/components/app/shared/detail/DetailCard";
import { Skeleton } from "@heroui/react";
import { FieldsSkeleton } from "./FieldsSkeleton";

/** UI-10: page-shaped placeholder while a detail or edit page loads. */
export const DetailSkeleton = () => (
  <div aria-busy className="grid gap-6">
    <Skeleton className="h-8 w-56 rounded-lg" />
    <div className={`${DETAIL_CARD_SURFACE} grid gap-6 p-6`}>
      <Skeleton className="h-5 w-40 rounded-md" />
      <FieldsSkeleton rows={6} />
    </div>
    <div className={`${DETAIL_CARD_SURFACE} grid gap-6 p-6`}>
      <Skeleton className="h-5 w-32 rounded-md" />
      <FieldsSkeleton rows={2} />
    </div>
  </div>
);
