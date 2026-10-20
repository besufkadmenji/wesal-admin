import { useDict } from "@/hooks/useDict";
import BadgeService from "@/services/badge.service";
import { showErrorMessage, showSuccessMessage } from "@/utils/show.message";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { BadgeTierForm, TIER_ORDER } from "./badgeOptions";
import { BadgeTier } from "@/gql/graphql";

const BADGES_KEY = ["badge-settings"] as const;

/** Badge thresholds form + last run summary (BRD 4.3.18). */
export const useBadges = (enabled: boolean) => {
  const dict = useDict();
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: BADGES_KEY,
    queryFn: () => BadgeService.settings(),
    enabled,
  });
  const [edits, setEdits] = useState<
    Partial<Record<BadgeTier, Partial<BadgeTierForm>>>
  >({});

  const tiers: BadgeTierForm[] | null = query.data
    ? TIER_ORDER.map((tier) => {
        const saved = query.data?.badgeSettings.find((s) => s.tier === tier);
        return {
          tier,
          maxBound: saved?.maxBound ?? null,
          minBound: saved?.minBound ?? null,
          enabled: saved?.enabled ?? false,
          ...edits[tier],
        };
      })
    : null;

  const update = (tier: BadgeTier, change: Partial<BadgeTierForm>) =>
    setEdits((current) => ({
      ...current,
      [tier]: { ...current[tier], ...change },
    }));

  const save = useMutation({
    mutationFn: (rows: BadgeTierForm[]) => BadgeService.updateSettings(rows),
    onSuccess: async () => {
      // Refetch before dropping the edits so the form never flashes empty.
      await queryClient.invalidateQueries({ queryKey: BADGES_KEY });
      setEdits({});
      showSuccessMessage(dict.badges_page.messages.saved);
    },
    onError: (error) => showErrorMessage(error.message),
  });

  const submit = () => {
    if (!tiers) return;
    // BRD alert: max and min are mandatory for an enabled badge.
    if (tiers.some((t) => t.enabled && (!t.maxBound || !t.minBound))) {
      showErrorMessage(dict.badges_page.messages.bounds_required);
      return;
    }
    save.mutate(tiers);
  };

  return {
    tiers,
    lastRun: query.data?.badgeLastRun ?? null,
    isLoading: query.isLoading,
    isSaving: save.isPending,
    isDirty: Object.keys(edits).length > 0,
    update,
    submit,
  };
};
