import StatisticsService, {
  AdminDashboardStats,
} from "@/services/statistics.service";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

const DASHBOARD_STATS_KEY = ["admin-dashboard-stats"] as const;

/** Admin home statistics (BRD 4.3.3), pushed live by the API on every change. */
export const useDashboardStats = () => {
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: DASHBOARD_STATS_KEY,
    queryFn: () => StatisticsService.adminDashboardStats(),
  });

  useEffect(() => {
    const subscription = StatisticsService.adminDashboardStatsUpdated().subscribe(
      {
        next: (payload) => {
          const stats = payload.data?.adminDashboardStatsUpdated;
          if (stats) {
            queryClient.setQueryData<AdminDashboardStats>(
              DASHBOARD_STATS_KEY,
              stats,
            );
          }
        },
      },
    );
    // Pushes sent while the socket was down are lost; re-read on reconnect.
    const refresh = () =>
      void queryClient.invalidateQueries({ queryKey: DASHBOARD_STATS_KEY });
    window.addEventListener("wesal:graphql-reconnected", refresh);
    return () => {
      subscription.unsubscribe();
      window.removeEventListener("wesal:graphql-reconnected", refresh);
    };
  }, [queryClient]);

  return { stats: query.data, isLoading: query.isLoading };
};
