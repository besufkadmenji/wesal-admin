import { DashboardRange } from "@/gql/graphql";
import { useCanAccess } from "@/hooks/useCanAccess";
import StatisticsService from "@/services/statistics.service";
import { useQuery } from "@tanstack/react-query";

/** UI-14 charts are not live: refresh every minute and on window focus. */
const REFRESH = { refetchInterval: 60_000, refetchOnWindowFocus: true };

export const useRevenueSeries = (range: DashboardRange) => {
  const enabled = useCanAccess("report", "read");
  const query = useQuery({
    queryKey: ["dashboard-revenue", range],
    queryFn: () => StatisticsService.adminRevenueSeries(range),
    enabled,
    placeholderData: (previous) => previous,
    ...REFRESH,
  });
  return { ...query, enabled };
};

export const useGrowthSeries = (range: DashboardRange) => {
  const enabled = useCanAccess("user", "read");
  const query = useQuery({
    queryKey: ["dashboard-growth", range],
    queryFn: () => StatisticsService.adminGrowthSeries(range),
    enabled,
    placeholderData: (previous) => previous,
    ...REFRESH,
  });
  return { ...query, enabled };
};

export const useContractStatusBreakdown = (range: DashboardRange) => {
  const enabled = useCanAccess("contract", "read");
  const query = useQuery({
    queryKey: ["dashboard-contract-status", range],
    queryFn: () => StatisticsService.adminContractStatusBreakdown(range),
    enabled,
    placeholderData: (previous) => previous,
    ...REFRESH,
  });
  return { ...query, enabled };
};

export const useTopCategories = (range: DashboardRange) => {
  const enabled = useCanAccess("contract", "read");
  const query = useQuery({
    queryKey: ["dashboard-top-categories", range],
    queryFn: () => StatisticsService.adminTopCategories(range),
    enabled,
    placeholderData: (previous) => previous,
    ...REFRESH,
  });
  return { ...query, enabled };
};

export const useAttentionCounts = () =>
  useQuery({
    queryKey: ["dashboard-attention"],
    queryFn: () => StatisticsService.adminAttentionCounts(),
    ...REFRESH,
  });
