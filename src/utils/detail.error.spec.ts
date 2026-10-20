import { CombinedGraphQLErrors } from "@apollo/client";
import { describe, expect, it } from "vitest";
import {
  detailErrorReason,
  isNotFoundError,
  nullIfNotFound,
} from "./detail.error";

const graphQLError = (extensions: Record<string, unknown>) =>
  new CombinedGraphQLErrors({
    errors: [{ message: "failed", extensions }],
  });

// The API's shape for an I18nNotFoundException (H-33).
const notFound = graphQLError({
  code: "INTERNAL_SERVER_ERROR",
  status: 404,
  originalError: { statusCode: 404, message: "City not found" },
});

describe("detail errors (H-33)", () => {
  it("resolves a missing record to null", () => {
    expect(isNotFoundError(notFound)).toBe(true);
    expect(nullIfNotFound(notFound)).toBeNull();
  });

  it("rethrows permission, server and network failures", () => {
    const forbidden = graphQLError({ code: "FORBIDDEN" });
    const server = graphQLError({ code: "INTERNAL_SERVER_ERROR" });
    const network = new TypeError("Failed to fetch");
    expect(() => nullIfNotFound(forbidden)).toThrow(forbidden);
    expect(() => nullIfNotFound(server)).toThrow(server);
    expect(() => nullIfNotFound(network)).toThrow(network);
  });

  it("tells a permission problem from a failed load", () => {
    expect(detailErrorReason(graphQLError({ code: "FORBIDDEN" }))).toBe(
      "forbidden",
    );
    expect(detailErrorReason(graphQLError({ code: "UNAUTHENTICATED" }))).toBe(
      "forbidden",
    );
    expect(detailErrorReason(graphQLError({ status: 403 }))).toBe("forbidden");
    expect(detailErrorReason(new TypeError("Failed to fetch"))).toBe("failed");
  });
});
