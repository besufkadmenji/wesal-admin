"use client";

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const PageBar = ({
  title,
  children,
  className,
}: {
  title: string;
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-wrap items-center justify-between gap-4",
        className,
      )}
    >
      <h1 className="text-primary dark:text-dark-dashboard-title text-xl leading-9 font-semibold tracking-tight md:text-2xl">
        {title}
      </h1>
      <div className="flex items-center gap-4">{children}</div>
    </div>
  );
};
