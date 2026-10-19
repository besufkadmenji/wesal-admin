import { vi } from "vitest";

/**
 * Mutable state behind the `next/navigation` and router mocks registered in
 * setup.ts. Specs set `lang`; router calls are recorded on the spies.
 */
export const testNavigation = {
  lang: "en" as "en" | "ar",
  pathname: "/",
  router: {
    push: vi.fn(),
    replace: vi.fn(),
    back: vi.fn(),
    refresh: vi.fn(),
    prefetch: vi.fn(),
  },
};

export const resetTestNavigation = () => {
  testNavigation.lang = "en";
  testNavigation.pathname = "/";
  Object.values(testNavigation.router).forEach((spy) => spy.mockReset());
};
