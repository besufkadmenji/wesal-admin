import type { StatusTone } from "@/components/app/shared/StatusChip";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";

// UI-14: register only what the dashboard charts use.
Chart.register(
  ArcElement,
  BarElement,
  CategoryScale,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
);

export type ChartPalette = {
  text: string;
  grid: string;
  tooltipBg: string;
  tooltipText: string;
  series: {
    contracts: string;
    chatFees: string;
    premiumAds: string;
    customers: string;
    providers: string;
    categories: string;
  };
  tones: Record<StatusTone, string>;
};

const LIGHT: ChartPalette = {
  text: "#667085",
  grid: "rgba(34, 40, 58, 0.06)",
  tooltipBg: "#22283a",
  tooltipText: "#ffffff",
  series: {
    contracts: "#22283a",
    chatFees: "#2bb3a3",
    premiumAds: "#f5a524",
    customers: "#22283a",
    providers: "#2bb3a3",
    categories: "#3b4a7a",
  },
  tones: {
    success: "#389441",
    warning: "#f5a524",
    info: "#3b4a7a",
    danger: "#e5484d",
    orange: "#f76b15",
    purple: "#8e4ec6",
    neutral: "#9fa2b4",
  },
};

const DARK: ChartPalette = {
  text: "#a1a1a1",
  grid: "rgba(255, 255, 255, 0.06)",
  tooltipBg: "#2b3040",
  tooltipText: "#ffffff",
  series: {
    contracts: "#8d9bd0",
    chatFees: "#3fd2c0",
    premiumAds: "#f7b955",
    customers: "#8d9bd0",
    providers: "#3fd2c0",
    categories: "#8d9bd0",
  },
  tones: {
    success: "#5cc368",
    warning: "#f7b955",
    info: "#8d9bd0",
    danger: "#ff6369",
    orange: "#ff8b3e",
    purple: "#b07ee0",
    neutral: "#8a8c94",
  },
};

export const chartPalette = (dark: boolean): ChartPalette =>
  dark ? DARK : LIGHT;

/** Hex colour with an alpha channel, for area fills. */
export const withAlpha = (hex: string, alpha: number) =>
  `${hex}${Math.round(alpha * 255)
    .toString(16)
    .padStart(2, "0")}`;

/** Latin digits in both languages, like the summary cards. */
export const formatNumber = (value: number, maximumFractionDigits = 0) =>
  new Intl.NumberFormat("en-US", { maximumFractionDigits }).format(value);

export const formatCompact = (value: number) =>
  new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);

/**
 * Bucket labels from the API's Riyadh-local "YYYY-MM-DD". Always Gregorian
 * (ar-SA defaults to the Hijri calendar) with Latin digits.
 */
export const formatBucket = (
  bucket: string,
  monthly: boolean,
  lang: string,
) => {
  const locale = lang === "ar" ? "ar-SA-u-ca-gregory-nu-latn" : "en-US";
  return new Intl.DateTimeFormat(locale, {
    timeZone: "UTC",
    month: "short",
    ...(monthly ? { year: "2-digit" } : { day: "numeric" }),
  }).format(new Date(`${bucket}T00:00:00Z`));
};
