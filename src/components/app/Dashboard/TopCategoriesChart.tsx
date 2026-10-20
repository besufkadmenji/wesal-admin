import { useDict } from "@/hooks/useDict";
import { Bar } from "react-chartjs-2";
import { tooltipOptions } from "./chartOptions";
import { formatCompact } from "./chartTheme";
import { ChartCard } from "./ChartCard";
import { useChartTheme } from "./useChartTheme";
import { useDashboardRange } from "./useDashboardRange";
import { useTopCategories } from "./useDashboardInsights";

/** UI-14: the six categories with the most contracts in the period. */
export const TopCategoriesChart = ({ className }: { className?: string }) => {
  const dict = useDict();
  const charts = dict.dashboard.charts;
  const { range } = useDashboardRange();
  const { data = [], isLoading, isError, enabled } = useTopCategories(range);
  const theme = useChartTheme();
  if (!enabled) return null;

  return (
    <ChartCard
      className={className}
      title={charts.categories_title}
      subtitle={charts.categories_subtitle}
      isLoading={isLoading}
      isError={isError}
      isEmpty={!isLoading && data.length === 0}
      bodyHeight={Math.max(data.length, 3) * 44 + 32}
    >
      <Bar
        aria-label={charts.categories_title}
        role="img"
        data={{
          labels: data.map((row) => (theme.rtl ? row.nameAr : row.nameEn)),
          datasets: [
            {
              label: charts.contracts_unit,
              data: data.map((row) => row.contracts),
              backgroundColor: theme.palette.series.categories,
              borderRadius: 6,
              borderSkipped: false,
              maxBarThickness: 22,
            },
          ],
        }}
        options={{
          indexAxis: "y",
          responsive: true,
          maintainAspectRatio: false,
          animation: theme.animation,
          plugins: {
            legend: { display: false },
            tooltip: tooltipOptions(theme),
          },
          scales: {
            x: {
              // Bars grow from the reading start: right in Arabic.
              reverse: theme.rtl,
              beginAtZero: true,
              grid: { color: theme.palette.grid },
              border: { display: false },
              ticks: {
                color: theme.palette.text,
                font: theme.font,
                maxTicksLimit: 5,
                precision: 0,
                callback: (value) => formatCompact(Number(value)),
              },
            },
            y: {
              position: theme.rtl ? "right" : "left",
              grid: { display: false },
              border: { display: false },
              ticks: { color: theme.palette.text, font: theme.font },
            },
          },
        }}
      />
    </ChartCard>
  );
};
