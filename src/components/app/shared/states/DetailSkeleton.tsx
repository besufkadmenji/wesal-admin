import { DETAIL_CARD_SURFACE } from "@/components/app/shared/detail/DetailCard";
import { Skeleton } from "@heroui/react";

const FieldRows = ({ rows }: { rows: number }) => (
  <div className="grid gap-4 md:grid-cols-2">
    {Array.from({ length: rows }, (_, index) => (
      <div key={index} className="grid gap-2">
        <Skeleton className="h-3 w-24 rounded-md" />
        <Skeleton className="h-11 w-full rounded-lg" />
      </div>
    ))}
  </div>
);

/** UI-10: page-shaped placeholder while a detail or edit page loads. */
export const DetailSkeleton = () => (
  <div aria-busy className="grid gap-6">
    <Skeleton className="h-8 w-56 rounded-lg" />
    <div className={`${DETAIL_CARD_SURFACE} grid gap-6 p-6`}>
      <Skeleton className="h-5 w-40 rounded-md" />
      <FieldRows rows={6} />
    </div>
    <div className={`${DETAIL_CARD_SURFACE} grid gap-6 p-6`}>
      <Skeleton className="h-5 w-32 rounded-md" />
      <FieldRows rows={2} />
    </div>
  </div>
);
