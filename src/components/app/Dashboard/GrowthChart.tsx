import { useDict } from "@/hooks/useDict";
import { Line } from "react-chartjs-2";
import { timeSeriesOptions, tooltipOptions } from "./chartOptions";
import { formatBucket, formatNumber, withAlpha } from "./chartTheme";
import { ChartCard } from "./ChartCard";
import { ChartLegend } from "./ChartLegend";
import { useChartTheme } from "./useChartTheme";
import { useDashboardRange } from "./useDashboardRange";
import { useGrowthSeries } from "./useDashboardInsights";

/** UI-14: new customers and providers per bucket. */
export const GrowthChart = ({ className }: { className?: string }) => {
  const dict = useDict();
  const charts = dict.dashboard.charts;
  const { range, monthly } = useDashboardRange();
  const { data = [], isLoading, isError, enabled } = useGrowthSeries(range);
  const theme = useChartTheme();
  if (!enabled) return null;

  const series = [
    { key: "customers", label: charts.customers },
    { key: "providers", label: charts.providers },
  ] as const;
  const totals = Object.fromEntries(
    series.map((item) => [
      item.key,
      data.reduce((sum, point) => sum + point[item.key], 0),
    ]),
  ) as Record<(typeof series)[number]["key"], number>;

  return (
    <ChartCard
      className={className}
      title={charts.growth_title}
      subtitle={charts.growth_subtitle}
      isLoading={isLoading}
      isError={isError}
      isEmpty={!isLoading && totals.customers + totals.providers === 0}
    >
      <div className="grid h-full grid-cols-[minmax(0,1fr)] grid-rows-[auto_1fr] gap-3">
        <ChartLegend
          items={series.map((item) => ({
            key: item.key,
            label: item.label,
            color: theme.palette.series[item.key],
            value: `+${formatNumber(totals[item.key])}`,
          }))}
        />
        <div className="relative min-h-0 min-w-0">
          <Line
            aria-label={charts.growth_title}
            role="img"
            data={{
              labels: data.map((p) =>
                formatBucket(p.bucket, monthly, theme.lang),
              ),
              datasets: series.map((item) => {
                const color = theme.palette.series[item.key];
                return {
                  label: item.label,
                  data: data.map((p) => p[item.key]),
                  borderColor: color,
                  backgroundColor: withAlpha(color, 0.1),
                  fill: true,
                  // Monotone curves never dip below zero between buckets.
                  cubicInterpolationMode: "monotone" as const,
                  borderWidth: 2,
                  pointRadius: 0,
                  pointHoverRadius: 4,
                  pointHoverBackgroundColor: color,
                };
              }),
            }}
            options={{
              ...timeSeriesOptions<"line">(theme, false),
              plugins: {
                legend: { display: false },
                tooltip: tooltipOptions(theme),
              },
            }}
          />
        </div>
      </div>
    </ChartCard>
  );
};
