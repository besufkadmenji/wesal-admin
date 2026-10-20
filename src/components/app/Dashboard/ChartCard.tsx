import { useDict } from "@/hooks/useDict";
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

/** UI-14: the card surface every dashboard chart sits on (matches SummaryCard). */
export const ChartCard = ({
  title,
  subtitle,
  isLoading,
  isError,
  isEmpty,
  children,
  className,
  bodyHeight,
}: {
  title: string;
  subtitle?: ReactNode;
  isLoading?: boolean;
  isError?: boolean;
  isEmpty?: boolean;
  children: ReactNode;
  className?: string;
  /** Overrides the default h-64 body, e.g. to fit a short bar list. */
  bodyHeight?: number;
}) => {
  const dict = useDict();
  const charts = dict.dashboard.charts;
  return (
    <section
      className={twMerge(
        "dark:bg-dark-black grid min-w-0 grid-cols-[minmax(0,1fr)] grid-rows-[auto_1fr] gap-5 rounded-2xl border border-[#22283a]/[0.07] bg-white p-6 shadow-[0_1px_2px_rgba(34,40,58,0.04),0_8px_24px_-12px_rgba(34,40,58,0.10)] dark:border-white/8",
        className,
      )}
    >
      <header className="grid gap-1">
        <h2 className="text-primary dark:text-dark-white text-base font-semibold">
          {title}
        </h2>
        {subtitle && (
          <div className="text-subTitle dark:text-dark-subTitle text-sm">
            {subtitle}
          </div>
        )}
      </header>
      {isLoading ? (
        <div
          aria-busy
          className="bg-accent-soft h-64 animate-pulse rounded-xl motion-reduce:animate-none"
        />
      ) : isError ? (
        <p className="text-subTitle dark:text-dark-subTitle grid h-64 place-items-center text-sm">
          {charts.error}
        </p>
      ) : isEmpty ? (
        <p className="text-subTitle dark:text-dark-subTitle bg-accent-soft/60 grid h-64 place-items-center rounded-xl text-sm">
          {charts.empty}
        </p>
      ) : (
        <div
          className="relative h-64 min-w-0"
          style={bodyHeight ? { height: bodyHeight } : undefined}
        >
          {children}
        </div>
      )}
    </section>
  );
};
