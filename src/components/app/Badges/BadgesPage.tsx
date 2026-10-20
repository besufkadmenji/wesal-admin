"use client";
import { ListSkeleton } from "@/components/app/shared/states/ListSkeleton";

import { PermissionGate } from "@/components/app/admin-lifecycle/PermissionGate";
import { PageBar } from "@/components/app/shared/PageBar";
import { PageWrapper } from "@/components/app/shared/PageWrapper";
import { useCanAccess } from "@/hooks/useCanAccess";
import { useDict } from "@/hooks/useDict";
import { Button } from "@heroui/react";
import { BadgeLastRun } from "./BadgeLastRun";
import { BadgeTierBlock } from "./BadgeTierBlock";
import { useBadges } from "./useBadges";

/** Badges (medals) management, BRD 4.3.18. */
export const BadgesPage = () => {
  const dict = useDict();
  const canRead = useCanAccess("badge", "read");
  const canUpdate = useCanAccess("badge", "update");
  const badges = useBadges(canRead);

  return (
    <PermissionGate resource="badge">
      <PageWrapper>
        <PageBar title={dict.badges_page.title}>
          {canUpdate && (
            <Button
              className="bg-app-primary h-12 rounded-lg px-8 font-semibold text-white"
              onPress={badges.submit}
              isLoading={badges.isSaving}
              isDisabled={!badges.isDirty}
            >
              {dict.badges_page.save}
            </Button>
          )}
        </PageBar>
        <p className="text-subTitle pt-2 text-sm dark:text-white/70">
          {dict.badges_page.description}
        </p>
        {!badges.tiers ? (
          <div className="py-6">
            <ListSkeleton rows={3} size="card" />
          </div>
        ) : (
          <div className="grid gap-5 py-6">
            {badges.tiers.map((tier) => (
              <BadgeTierBlock
                key={tier.tier}
                value={tier}
                readOnly={!canUpdate}
                onChange={(change) => badges.update(tier.tier, change)}
              />
            ))}
            <BadgeLastRun run={badges.lastRun} />
          </div>
        )}
      </PageWrapper>
    </PermissionGate>
  );
};
