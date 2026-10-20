import type { ChartOptions } from "chart.js";
import { formatCompact } from "./chartTheme";
import type { useChartTheme } from "./useChartTheme";

type Theme = ReturnType<typeof useChartTheme>;

/** UI-14: tooltip styling shared by every dashboard chart. */
export const tooltipOptions = (theme: Theme) => ({
  rtl: theme.rtl,
  textDirection: theme.rtl ? "rtl" : "ltr",
  backgroundColor: theme.palette.tooltipBg,
  titleColor: theme.palette.tooltipText,
  bodyColor: theme.palette.tooltipText,
  titleFont: theme.font,
  bodyFont: theme.font,
  padding: 10,
  cornerRadius: 10,
  boxPadding: 4,
  usePointStyle: true,
});

/**
 * Time-series axes: quiet category x axis, compact-number y axis. The same
 * cartesian options fit bar and line charts; Chart.js types them per type.
 */
export const timeSeriesOptions = <T extends "bar" | "line">(
  theme: Theme,
  stacked: boolean,
): ChartOptions<T> =>
  ({
    responsive: true,
    maintainAspectRatio: false,
    animation: theme.animation,
    interaction: { mode: "index", intersect: false },
    scales: {
      x: {
        stacked,
        grid: { display: false },
        border: { display: false },
        ticks: {
          color: theme.palette.text,
          font: theme.font,
          maxRotation: 0,
          autoSkipPadding: 12,
        },
      },
      y: {
        stacked,
        position: theme.rtl ? "right" : "left",
        beginAtZero: true,
        grid: { color: theme.palette.grid },
        border: { display: false },
        ticks: {
          color: theme.palette.text,
          font: theme.font,
          maxTicksLimit: 5,
          precision: 0,
          callback: (value: string | number) => formatCompact(Number(value)),
        },
      },
    },
  }) as unknown as ChartOptions<T>;
