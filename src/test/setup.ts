import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";
import { resetTestNavigation, testNavigation } from "./testNavigation";

afterEach(() => {
  cleanup();
  resetTestNavigation();
  vi.clearAllMocks();
});

// Language and routing come from the Next app router, which tests don't run.
vi.mock("next/navigation", () => ({
  useParams: () => ({ lang: testNavigation.lang }),
  usePathname: () => testNavigation.pathname,
  useRouter: () => testNavigation.router,
  useSearchParams: () => new URLSearchParams(),
  redirect: vi.fn(),
}));
vi.mock("nextjs-toploader/app", () => ({
  useRouter: () => testNavigation.router,
}));
// Permissions are set on the real store by renderPage; `me` is never fetched.
vi.mock("@/hooks/useMe", () => ({
  useMe: () => ({
    me: null,
    isLoading: false,
    isError: false,
    logout: vi.fn(),
  }),
}));

// jsdom gaps that HeroUI / react-aria touch while rendering.
if (!window.matchMedia) {
  window.matchMedia = (query: string) =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }) as MediaQueryList;
}

class NoopObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
globalThis.ResizeObserver ??= NoopObserver as unknown as typeof ResizeObserver;
globalThis.IntersectionObserver ??=
  NoopObserver as unknown as typeof IntersectionObserver;
window.scrollTo ??= (() => {}) as typeof window.scrollTo;
