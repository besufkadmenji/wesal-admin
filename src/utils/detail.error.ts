import { CombinedGraphQLErrors } from "@apollo/client";

/**
 * H-33: the API keeps an HTTP exception's status in the GraphQL error
 * (`extensions.status`, or `extensions.originalError.statusCode`).
 */
const errorStatuses = (error: unknown): number[] => {
  if (!CombinedGraphQLErrors.is(error)) return [];
  return error.errors.flatMap((item) => {
    const extensions = item.extensions as
      | { status?: unknown; originalError?: { statusCode?: unknown } }
      | undefined;
    const status = extensions?.status ?? extensions?.originalError?.statusCode;
    return typeof status === "number" ? [status] : [];
  });
};

/** A missing record, or an id the API rejects as malformed. */
export const isNotFoundError = (error: unknown) =>
  errorStatuses(error).some((status) => status === 404 || status === 400);

/**
 * For detail reads: a missing record resolves to null, every other failure
 * (permission, network, server) is thrown so React Query reports it.
 */
export const nullIfNotFound = (error: unknown): null => {
  if (isNotFoundError(error)) return null;
  throw error;
};

export type DetailErrorReason = "forbidden" | "failed";

export const detailErrorReason = (error: unknown): DetailErrorReason =>
  errorStatuses(error).some((status) => status === 401 || status === 403) ||
  (CombinedGraphQLErrors.is(error) &&
    error.errors.some((item) =>
      ["UNAUTHENTICATED", "FORBIDDEN"].includes(
        String(item.extensions?.code ?? ""),
      ),
    ))
    ? "forbidden"
    : "failed";
