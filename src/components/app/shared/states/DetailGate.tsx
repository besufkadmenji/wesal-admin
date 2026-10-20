import type { ReactNode } from "react";
import { DetailSkeleton } from "./DetailSkeleton";
import { detailErrorReason } from "@/utils/detail.error";
import { DetailUnavailable } from "./DetailUnavailable";

/**
 * UI-10: loading → skeleton; finished without data → unavailable (with
 * retry and back); otherwise the page. Replaces the old `!data ? spinner`,
 * which spun forever on a missing record or an API error.
 * H-33: a query error (permission, network, server) is told apart from a
 * missing record, which the services resolve to null.
 */
export const DetailGate = <T,>({
  isLoading,
  data,
  error,
  onRetry,
  backHref,
  children,
}: {
  isLoading: boolean;
  data: T | null | undefined;
  error?: unknown;
  onRetry?: () => void;
  backHref?: string;
  children: (data: T) => ReactNode;
}) => {
  if (isLoading) return <DetailSkeleton />;
  if (error) {
    return (
      <DetailUnavailable
        reason={detailErrorReason(error)}
        onRetry={onRetry}
        backHref={backHref}
      />
    );
  }
  if (data == null) {
    return <DetailUnavailable onRetry={onRetry} backHref={backHref} />;
  }
  return <>{children(data)}</>;
};
