import type { ReactNode } from "react";
import { DetailSkeleton } from "./DetailSkeleton";
import { DetailUnavailable } from "./DetailUnavailable";

/**
 * UI-10: loading → skeleton; finished without data → unavailable (with
 * retry and back); otherwise the page. Replaces the old `!data ? spinner`,
 * which spun forever on a missing record or an API error.
 */
export const DetailGate = <T,>({
  isLoading,
  data,
  onRetry,
  backHref,
  children,
}: {
  isLoading: boolean;
  data: T | null | undefined;
  onRetry?: () => void;
  backHref?: string;
  children: (data: T) => ReactNode;
}) => {
  if (isLoading) return <DetailSkeleton />;
  if (data == null) {
    return <DetailUnavailable onRetry={onRetry} backHref={backHref} />;
  }
  return <>{children(data)}</>;
};
