import {
  AdminAttentionCountsQuery,
  AdminContractStatusBreakdownQuery,
  AdminDashboardStatsQuery,
  AdminGrowthSeriesQuery,
  AdminRevenueSeriesQuery,
  AdminTopCategoriesQuery,
  DashboardRange,
} from "@/gql/graphql";
import {
  ADMIN_DASHBOARD_STATS_QUERY,
  ADMIN_DASHBOARD_STATS_UPDATED_SUBSCRIPTION,
} from "@/graphql/statistics/adminDashboardStats";
import {
  ADMIN_ATTENTION_COUNTS_QUERY,
  ADMIN_CONTRACT_STATUS_BREAKDOWN_QUERY,
  ADMIN_GROWTH_SERIES_QUERY,
  ADMIN_REVENUE_SERIES_QUERY,
  ADMIN_TOP_CATEGORIES_QUERY,
} from "@/graphql/statistics/dashboardInsights";
import client from "@/utils/apollo.client";

export type AdminDashboardStats =
  AdminDashboardStatsQuery["adminDashboardStats"];
export type RevenuePoint =
  AdminRevenueSeriesQuery["adminRevenueSeries"][number];
export type GrowthPoint = AdminGrowthSeriesQuery["adminGrowthSeries"][number];
export type ContractStatusCount =
  AdminContractStatusBreakdownQuery["adminContractStatusBreakdown"][number];
export type TopCategory = AdminTopCategoriesQuery["adminTopCategories"][number];
export type AttentionCounts = AdminAttentionCountsQuery["adminAttentionCounts"];

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

  /** UI-14 dashboard charts; errors surface to React Query. */
  static adminRevenueSeries = async (range: DashboardRange) =>
    (
      await client().query<AdminRevenueSeriesQuery>({
        query: ADMIN_REVENUE_SERIES_QUERY,
        variables: { range },
        fetchPolicy: "network-only",
      })
    ).data?.adminRevenueSeries ?? [];

  static adminGrowthSeries = async (range: DashboardRange) =>
    (
      await client().query<AdminGrowthSeriesQuery>({
        query: ADMIN_GROWTH_SERIES_QUERY,
        variables: { range },
        fetchPolicy: "network-only",
      })
    ).data?.adminGrowthSeries ?? [];

  static adminContractStatusBreakdown = async (range: DashboardRange) =>
    (
      await client().query<AdminContractStatusBreakdownQuery>({
        query: ADMIN_CONTRACT_STATUS_BREAKDOWN_QUERY,
        variables: { range },
        fetchPolicy: "network-only",
      })
    ).data?.adminContractStatusBreakdown ?? [];

  static adminTopCategories = async (range: DashboardRange) =>
    (
      await client().query<AdminTopCategoriesQuery>({
        query: ADMIN_TOP_CATEGORIES_QUERY,
        variables: { range },
        fetchPolicy: "network-only",
      })
    ).data?.adminTopCategories ?? [];

  static adminAttentionCounts = async () =>
    (
      await client().query<AdminAttentionCountsQuery>({
        query: ADMIN_ATTENTION_COUNTS_QUERY,
        fetchPolicy: "network-only",
      })
    ).data?.adminAttentionCounts ?? null;

  static adminDashboardStatsUpdated = () =>
    client().subscribe<{ adminDashboardStatsUpdated: AdminDashboardStats }>({
      query: ADMIN_DASHBOARD_STATS_UPDATED_SUBSCRIPTION,
    });
}

export default StatisticsService;
