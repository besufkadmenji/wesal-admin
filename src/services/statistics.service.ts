import { AdminDashboardStatsQuery } from "@/gql/graphql";
import {
  ADMIN_DASHBOARD_STATS_QUERY,
  ADMIN_DASHBOARD_STATS_UPDATED_SUBSCRIPTION,
} from "@/graphql/statistics/adminDashboardStats";
import client from "@/utils/apollo.client";

export type AdminDashboardStats =
  AdminDashboardStatsQuery["adminDashboardStats"];

class StatisticsService {
  static adminDashboardStats =
    async (): Promise<AdminDashboardStats | null> => {
      try {
        const result = await client().query<AdminDashboardStatsQuery>({
          query: ADMIN_DASHBOARD_STATS_QUERY,
          fetchPolicy: "network-only",
        });
        return result.data?.adminDashboardStats ?? null;
      } catch (e) {
        console.error("adminDashboardStatsResult", e);
      }
      return null;
    };

  static adminDashboardStatsUpdated = () =>
    client().subscribe<{ adminDashboardStatsUpdated: AdminDashboardStats }>({
      query: ADMIN_DASHBOARD_STATS_UPDATED_SUBSCRIPTION,
    });
}

export default StatisticsService;
