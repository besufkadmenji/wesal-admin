import { useAppRouter } from "@/hooks/useAppRouter";
import { useDict } from "@/hooks/useDict";
import { Button } from "@heroui/react";
import { FileQuestion } from "lucide-react";
import { DETAIL_CARD_SURFACE } from "@/components/app/shared/detail/DetailCard";
import { EmptyState } from "./EmptyState";

/**
 * UI-10: a detail page whose record is missing, removed or failed to load
 * (the admin services return null for all three).
 */
export const DetailUnavailable = ({
  onRetry,
  backHref,
}: {
  onRetry?: () => void;
  backHref?: string;
}) => {
  const dict = useDict();
  const copy = dict.common.states;
  const router = useAppRouter();
  return (
    <div className={DETAIL_CARD_SURFACE}>
      <EmptyState
        icon={FileQuestion}
        title={copy.not_found_title}
        message={copy.not_found_message}
        action={
          <>
            {onRetry && (
              <Button
                className="bg-primary h-11 rounded-xl px-5 text-sm font-semibold text-white dark:bg-[#6474a6]"
                onPress={onRetry}
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
