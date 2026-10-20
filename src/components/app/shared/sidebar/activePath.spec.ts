import { activeHref } from "@/components/app/shared/sidebar/activePath";
import { describe, expect, it } from "vitest";

const hrefs = ["/dashboard", "/contracts", "/providers", "/providers/requests"];

describe("sidebar active item (UI-4)", () => {
  it("follows nested pages", () => {
    expect(activeHref("/en/contracts/123", "en", hrefs)).toBe("/contracts");
  });

  it("prefers the most specific match", () => {
    expect(activeHref("/ar/providers/requests", "ar", hrefs)).toBe(
      "/providers/requests",
    );
    expect(activeHref("/ar/providers/42", "ar", hrefs)).toBe("/providers");
  });

  it("keeps Home exact, so it isn't active everywhere", () => {
    expect(activeHref("/en/dashboard", "en", hrefs)).toBe("/dashboard");
    expect(activeHref("/en/dashboard/other", "en", hrefs)).toBeUndefined();
    expect(activeHref("/en/contractsx", "en", hrefs)).toBeUndefined();
  });
});
