import { BadgeBound, BadgeTier } from "@/gql/graphql";

/** BRD 4.3.18 dropdown order: =5, =4, <4, =3, <3, =2, <2, =1, <1. */
export const MAX_BOUNDS: BadgeBound[] = [
  BadgeBound.Eq_5,
  BadgeBound.Eq_4,
  BadgeBound.Lt_4,
  BadgeBound.Eq_3,
  BadgeBound.Lt_3,
  BadgeBound.Eq_2,
  BadgeBound.Lt_2,
  BadgeBound.Eq_1,
  BadgeBound.Lt_1,
];

/** The min dropdown adds "zero stars". */
export const MIN_BOUNDS: BadgeBound[] = [...MAX_BOUNDS, BadgeBound.Zero];

export const TIER_ORDER: BadgeTier[] = [
  BadgeTier.Trust,
  BadgeTier.Diligence,
  BadgeTier.UnderImprovement,
];

export type BadgeTierForm = {
  tier: BadgeTier;
  maxBound: BadgeBound | null;
  minBound: BadgeBound | null;
  enabled: boolean;
};
