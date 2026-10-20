import { gql } from "@apollo/client";

export const ADMIN_DASHBOARD_STATS_QUERY = gql`
  query adminDashboardStats {
    adminDashboardStats {
      customers
      providers
      completedContracts
      messagesToday
      featuredListings
      freeListings
    }
  }
`;

export const ADMIN_DASHBOARD_STATS_UPDATED_SUBSCRIPTION = gql`
  subscription adminDashboardStatsUpdated {
    adminDashboardStatsUpdated {
      customers
      providers
      completedContracts
      messagesToday
      featuredListings
      freeListings
    }
  }
`;
