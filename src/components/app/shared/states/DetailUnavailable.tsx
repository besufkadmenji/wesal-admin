import { useAppRouter } from "@/hooks/useAppRouter";
import { useDict } from "@/hooks/useDict";
import { Button } from "@heroui/react";
import { CloudOff, FileQuestion, ShieldOff } from "lucide-react";
import { DETAIL_CARD_SURFACE } from "@/components/app/shared/detail/DetailCard";
import type { DetailErrorReason } from "@/utils/detail.error";
import { EmptyState } from "./EmptyState";

const REASONS = {
  not_found: {
    icon: FileQuestion,
    title: "not_found_title",
    message: "not_found_message",
  },
  forbidden: {
    icon: ShieldOff,
    title: "forbidden_title",
    message: "forbidden_message",
  },
  failed: { icon: CloudOff, title: "failed_title", message: "failed_message" },
} as const;

/**
 * UI-10: a detail page that can't be shown. H-33: a missing record, missing
 * permission and a failed load each get their own message; retry is offered
 * except when the admin lacks permission.
 */
export const DetailUnavailable = ({
  reason = "not_found",
  onRetry,
  backHref,
}: {
  reason?: "not_found" | DetailErrorReason;
  onRetry?: () => void;
  backHref?: string;
}) => {
  const dict = useDict();
  const copy = dict.common.states;
  const router = useAppRouter();
  const view = REASONS[reason];
  const retry = reason === "forbidden" ? undefined : onRetry;
  return (
    <div className={DETAIL_CARD_SURFACE}>
      <EmptyState
        icon={view.icon}
        title={copy[view.title]}
        message={copy[view.message]}
        action={
          <>
            {retry && (
              <Button
                className="bg-primary h-11 rounded-xl px-5 text-sm font-semibold text-white dark:bg-[#6474a6]"
                onPress={retry}
              >
                {copy.retry}
              </Button>
            )}
            {backHref && (
              <Button
                className="bg-accent-soft text-primary h-11 rounded-xl px-5 text-sm font-semibold dark:text-white"
                onPress={() => router.push(backHref)}
              >
                {copy.back_to_list}
              </Button>
            )}
          </>
        }
      />
    </div>
  );
};
