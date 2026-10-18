import { gql } from "@apollo/client";

export const BADGE_SETTINGS_QUERY = gql`
  query badgeSettings {
    badgeSettings {
      tier
      maxBound
      minBound
      enabled
    }
    badgeLastRun {
      id
      period
      ranAt
      trustCount
      diligenceCount
      underImprovementCount
      changedCount
      deletedProviders {
        id
        name
      }
      skippedProviders {
        id
        name
      }
    }
  }
`;

export const UPDATE_BADGE_SETTINGS_MUTATION = gql`
  mutation updateBadgeSettings($input: UpdateBadgeSettingsInput!) {
    updateBadgeSettings(input: $input) {
      tier
      maxBound
      minBound
      enabled
    }
  }
`;
