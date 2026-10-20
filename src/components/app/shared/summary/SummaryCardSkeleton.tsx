import React from "react";
import { Skeleton } from "@heroui/react";

export const SummaryCardSkeleton = () => {
  return (
    <div className="dark:bg-dark-black grid grid-cols-[1fr_auto] items-start gap-4 rounded-2xl border border-[#22283a]/[0.07] bg-white p-6 dark:border-white/8">
      <div className="grid grid-cols-1 gap-4">
        <Skeleton className="rounded-lg">
          <div className="bg-default-300 size-11 rounded-xl" />
        </Skeleton>
        <div className="grid grid-cols-1 gap-2">
          <Skeleton className="rounded-lg">
            <div className="bg-default-300 h-6 w-32 rounded-lg" />
          </Skeleton>
          <div className="flex items-center gap-2">
            <Skeleton className="rounded-lg">
              <div className="bg-default-300 h-8 w-16 rounded-lg" />
            </Skeleton>
            <Skeleton className="rounded-lg">
              <div className="bg-default-300 h-8 w-20 rounded-lg" />
            </Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
};
