import {
  BadgeSettingInput,
  BadgeSettingsQuery,
  UpdateBadgeSettingsMutation,
} from "@/gql/graphql";
import {
  BADGE_SETTINGS_QUERY,
  UPDATE_BADGE_SETTINGS_MUTATION,
} from "@/graphql/badge/badgeSettings";
import client from "@/utils/apollo.client";

export type BadgeSettingRow = BadgeSettingsQuery["badgeSettings"][number];
export type BadgeLastRun = NonNullable<BadgeSettingsQuery["badgeLastRun"]>;

class BadgeService {
  static settings = async (): Promise<BadgeSettingsQuery | null> => {
    try {
      const result = await client().query<BadgeSettingsQuery>({
        query: BADGE_SETTINGS_QUERY,
        fetchPolicy: "network-only",
      });
      return result.data ?? null;
    } catch (e) {
      console.error("badgeSettingsResult", e);
    }
    return null;
  };

  static updateSettings = async (settings: BadgeSettingInput[]) => {
    const result = await client().mutate<UpdateBadgeSettingsMutation>({
      mutation: UPDATE_BADGE_SETTINGS_MUTATION,
      variables: { input: { settings } },
    });
    if (result.error) throw result.error;
    return result.data?.updateBadgeSettings ?? [];
  };
}

export default BadgeService;
