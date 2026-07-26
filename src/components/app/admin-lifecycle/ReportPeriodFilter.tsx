"use client";

import { useDict } from "@/hooks/useDict";
import { Button } from "@heroui/react";
import { twMerge } from "tailwind-merge";
import { ReportPeriod, ReportPeriodSelection } from "./financial-report-helpers";

export const ReportPeriodFilter = ({
  value,
  onChange,
}: {
  value: ReportPeriodSelection;
  onChange: (period: ReportPeriod) => void;
}) => {
  const dict = useDict();
  return (
    <div className="border-dashboard-border dark:border-dark-dashboard-border flex h-10 w-max max-w-full items-center overflow-x-auto rounded-lg border bg-white p-1 dark:bg-black">
      <PeriodChip
        label={dict.common.timeFilters.today}
        active={value === "today"}
        onClick={() => onChange("today")}
      />
      <PeriodChip
        label={dict.common.timeFilters["7days"]}
        active={value === "week"}
        onClick={() => onChange("week")}
      />
      <PeriodChip
        label={dict.common.timeFilters["30days"]}
        active={value === "month"}
        onClick={() => onChange("month")}
      />
      <PeriodChip
        label={dict.common.timeFilters["12months"]}
        active={value === "12months"}
        onClick={() => onChange("12months")}
      />
      <PeriodChip
        label={dict.common.timeFilters.all}
        active={value === "all"}
        onClick={() => onChange("all")}
      />
    </div>
  );
};

const PeriodChip = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <Button
    onPress={onClick}
    className={twMerge(
      "text-subTitle h-full min-h-0 min-w-0 rounded-md bg-inherit p-0 px-3 py-1.5 text-sm leading-5 font-medium tracking-tight dark:text-white",
      active && "bg-app-primary/15 text-app-primary dark:text-app-primary",
    )}
    size="lg"
  >
    {label}
  </Button>
);
