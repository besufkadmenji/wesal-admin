import { useDict } from "@/hooks/useDict";
import { Bar } from "react-chartjs-2";
import { timeSeriesOptions, tooltipOptions } from "./chartOptions";
import { formatBucket, formatNumber } from "./chartTheme";
import { ChartCard } from "./ChartCard";
import { ChartLegend } from "./ChartLegend";
import { useChartTheme } from "./useChartTheme";
import { useDashboardRange } from "./useDashboardRange";
import { useRevenueSeries } from "./useDashboardInsights";

/** UI-14: platform revenue per bucket, stacked by source. */
export const RevenueChart = ({ className }: { className?: string }) => {
  const dict = useDict();
  const charts = dict.dashboard.charts;
  const { range, monthly } = useDashboardRange();
  const { data = [], isLoading, isError, enabled } = useRevenueSeries(range);
  const theme = useChartTheme();
  if (!enabled) return null;

  const sar = (value: number) => `${formatNumber(value, 2)} ${charts.sar}`;
  const total = data.reduce(
    (sum, point) => sum + point.contracts + point.chatFees + point.premiumAds,
    0,
  );
  const series = [
    { key: "contracts", label: charts.contracts_commission },
    { key: "chatFees", label: charts.chat_fees },
    { key: "premiumAds", label: charts.premium_ads },
  ] as const;

  return (
    <ChartCard
      className={className}
      title={charts.revenue_title}
      subtitle={
        <span className="flex flex-wrap items-baseline gap-x-2">
          <span className="text-primary dark:text-dark-white text-2xl font-semibold tabular-nums">
            {sar(total)}
          </span>
          <span>{charts.revenue_subtitle}</span>
        </span>
      }
      isLoading={isLoading}
      isError={isError}
      isEmpty={!isLoading && total === 0}
    >
      <div className="grid h-full grid-cols-[minmax(0,1fr)] grid-rows-[auto_1fr] gap-3">
        <ChartLegend
          items={series.map((item) => ({
            key: item.key,
            label: item.label,
            color: theme.palette.series[item.key],
          }))}
        />
        <div className="relative min-h-0 min-w-0">
          <Bar
            aria-label={charts.revenue_title}
            role="img"
            data={{
              labels: data.map((p) =>
                formatBucket(p.bucket, monthly, theme.lang),
              ),
              datasets: series.map((item, index) => ({
                label: item.label,
                data: data.map((p) => p[item.key]),
                backgroundColor: theme.palette.series[item.key],
                borderRadius:
                  index === series.length - 1 ? { topLeft: 6, topRight: 6 } : 0,
                borderSkipped: false,
                maxBarThickness: 28,
                stack: "revenue",
              })),
            }}
            options={{
              ...timeSeriesOptions<"bar">(theme, true),
              plugins: {
                legend: { display: false },
                tooltip: {
                  ...tooltipOptions(theme),
                  callbacks: {
                    label: (item) =>
                      ` ${item.dataset.label}: ${sar(Number(item.raw))}`,
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </ChartCard>
  );
};
