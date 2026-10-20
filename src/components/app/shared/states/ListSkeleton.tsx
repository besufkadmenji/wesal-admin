import { Skeleton } from "@heroui/react";
import { twMerge } from "tailwind-merge";

/** UI-10: shimmer rows for lists, feeds and pickers. */
export const ListSkeleton = ({
  rows = 4,
  size = "row",
}: {
  rows?: number;
  size?: "compact" | "row" | "card";
}) => (
  <div aria-busy className="grid gap-2">
    {Array.from({ length: rows }, (_, index) => (
      <div
        key={index}
        className={twMerge(
          "flex items-center gap-3",
          size === "card" && "rounded-2xl p-4",
        )}
      >
        {size !== "compact" && (
          <Skeleton
            className={twMerge(
              "shrink-0 rounded-xl",
              size === "card" ? "size-12" : "size-9",
            )}
          />
        )}
        <div className="grid grow gap-2">
          <Skeleton
            className="h-3.5 rounded-md"
            style={{ width: `${70 - (index % 3) * 12}%` }}
          />
          {size !== "compact" && <Skeleton className="h-3 w-1/3 rounded-md" />}
        </div>
      </div>
    ))}
  </div>
);
