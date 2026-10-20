import { lifecycleEnumLabel } from "@/components/app/admin-lifecycle/lifecycle-enum-labels";
import { statusTone } from "@/components/app/admin-lifecycle/statusTone";
import { useDict } from "@/hooks/useDict";
import { Doughnut } from "react-chartjs-2";
import { tooltipOptions } from "./chartOptions";
import { formatNumber } from "./chartTheme";
import { ChartCard } from "./ChartCard";
import { useChartTheme } from "./useChartTheme";
import { useDashboardRange } from "./useDashboardRange";
import { useContractStatusBreakdown } from "./useDashboardInsights";

/** UI-14: contracts created in the period, by status (StatusChip tones). */
export const ContractStatusChart = ({ className }: { className?: string }) => {
  const dict = useDict();
  const charts = dict.dashboard.charts;
  const { range } = useDashboardRange();
  const {
    data = [],
    isLoading,
    isError,
    enabled,
  } = useContractStatusBreakdown(range);
  const theme = useChartTheme();
  if (!enabled) return null;

  const total = data.reduce((sum, row) => sum + row.count, 0);
  const rows = data.map((row) => ({
    ...row,
    label: lifecycleEnumLabel(row.status, theme.lang),
    color: theme.palette.tones[statusTone(row.status)],
  }));

  return (
    <ChartCard
      className={className}
      title={charts.status_title}
      subtitle={charts.status_subtitle}
      isLoading={isLoading}
      isError={isError}
      isEmpty={!isLoading && total === 0}
    >
      <div className="grid h-full grid-cols-[minmax(0,9rem)_minmax(0,1fr)] items-center gap-5">
        <div className="relative aspect-square w-full">
          <Doughnut
            aria-label={charts.status_title}
            role="img"
            data={{
              labels: rows.map((row) => row.label),
              datasets: [
                {
                  data: rows.map((row) => row.count),
                  backgroundColor: rows.map((row) => row.color),
                  borderWidth: 0,
                  spacing: 2,
                  borderRadius: 4,
                  hoverOffset: 4,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              cutout: "74%",
              animation: theme.animation,
              plugins: {
                legend: { display: false },
                tooltip: tooltipOptions(theme),
              },
            }}
          />
          <div className="pointer-events-none absolute inset-0 z-10 grid place-content-center text-center">
            <span className="text-primary dark:text-dark-white text-2xl font-semibold tabular-nums">
              {formatNumber(total)}
            </span>
            <span className="text-subTitle dark:text-dark-subTitle text-xs">
              {charts.contracts_unit}
            </span>
          </div>
        </div>
        <ul className="grid max-h-full min-w-0 gap-2 overflow-y-auto text-sm">
          {rows.map((row) => (
            <li key={row.status} className="flex min-w-0 items-center gap-2">
              <span
                aria-hidden
                className="size-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: row.color }}
              />
              <span className="text-subTitle dark:text-dark-subTitle min-w-0 flex-1 truncate">
                {row.label}
              </span>
              <span className="text-primary dark:text-dark-white font-medium tabular-nums">
                {formatNumber(row.count)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </ChartCard>
  );
};
