import { gql } from "@apollo/client";

export const ADMIN_REVENUE_SERIES_QUERY = gql`
  query adminRevenueSeries($range: DashboardRange!) {
    adminRevenueSeries(range: $range) {
      bucket
      contracts
      chatFees
      premiumAds
    }
  }
`;

export const ADMIN_GROWTH_SERIES_QUERY = gql`
  query adminGrowthSeries($range: DashboardRange!) {
    adminGrowthSeries(range: $range) {
      bucket
      customers
      providers
    }
  }
`;

export const ADMIN_CONTRACT_STATUS_BREAKDOWN_QUERY = gql`
  query adminContractStatusBreakdown($range: DashboardRange!) {
    adminContractStatusBreakdown(range: $range) {
      status
      count
    }
  }
`;

export const ADMIN_TOP_CATEGORIES_QUERY = gql`
  query adminTopCategories($range: DashboardRange!) {
    adminTopCategories(range: $range) {
      categoryId
      nameAr
      nameEn
      contracts
    }
  }
`;

export const ADMIN_ATTENTION_COUNTS_QUERY = gql`
  query adminAttentionCounts {
    adminAttentionCounts {
      pendingProviderRequests
      openComplaints
      cancellationRequests
      disputedContracts
      terminationRequests
    }
  }
`;
