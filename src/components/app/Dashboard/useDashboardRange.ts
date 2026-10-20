import { DashboardRange } from "@/gql/graphql";
import { parseAsStringLiteral, useQueryState } from "nuqs";

export const RANGE_KEYS = ["7d", "30d", "12m"] as const;
export type RangeKey = (typeof RANGE_KEYS)[number];

export const RANGE_BY_KEY: Record<RangeKey, DashboardRange> = {
  "7d": DashboardRange.Last_7Days,
  "30d": DashboardRange.Last_30Days,
  "12m": DashboardRange.Last_12Months,
};

/** UI-14: chart period, kept in the URL (?range=30d) so it survives reloads. */
export const useDashboardRange = () => {
  const [key, setKey] = useQueryState(
    "range",
    parseAsStringLiteral(RANGE_KEYS).withDefault("30d"),
  );
  return {
    key,
    setKey,
    range: RANGE_BY_KEY[key],
    monthly: key === "12m",
  };
};
