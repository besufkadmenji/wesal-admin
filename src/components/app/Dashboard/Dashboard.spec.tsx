import { Dashboard } from "@/components/app/Dashboard/Dashboard";
import ar from "@/config/i18n/locales/ar.json";
import en from "@/config/i18n/locales/en.json";
import StatisticsService from "@/services/statistics.service";
import { renderPage } from "@/test/renderPage";
import { screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/services/statistics.service", () => ({
  default: {
    adminDashboardStats: vi.fn(),
    adminDashboardStatsUpdated: vi.fn(() => ({
      subscribe: () => ({ unsubscribe: vi.fn() }),
    })),
  },
}));

const stats = {
  customers: 1250,
  providers: 34,
  completedContracts: 7,
  messagesToday: 18,
  featuredListings: 5,
  freeListings: 42,
};

describe("Dashboard (S4-30/31 live statistics)", () => {
  beforeEach(() => {
    vi.mocked(StatisticsService.adminDashboardStats).mockResolvedValue(stats);
  });

  it.each([
    ["en", en],
    ["ar", ar],
  ] as const)("shows the six live counters in %s", async (lang, dict) => {
    renderPage(<Dashboard />, { lang });

    expect(screen.getByText(dict.dashboard.title)).toBeInTheDocument();
    expect(await screen.findByText("1,250")).toBeInTheDocument();
    for (const [title, value] of [
      [dict.dashboard.cards.customers, "1,250"],
      [dict.dashboard.cards.providers, "34"],
      [dict.dashboard.cards.completed_contracts, "7"],
      [dict.dashboard.cards.messages_today, "18"],
      [dict.dashboard.cards.featured_listings, "5"],
      [dict.dashboard.cards.free_listings, "42"],
    ]) {
      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(value)).toBeInTheDocument();
    }
  });

  it("shows zeros instead of crashing when the API returns nothing", async () => {
    vi.mocked(StatisticsService.adminDashboardStats).mockResolvedValue(null);
    renderPage(<Dashboard />);

    expect(await screen.findAllByText("0")).toHaveLength(6);
  });
});
