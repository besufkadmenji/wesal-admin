import { Dashboard } from "@/components/app/Dashboard/Dashboard";
import ar from "@/config/i18n/locales/ar.json";
import en from "@/config/i18n/locales/en.json";
import { AdminPermissionType, ContractStatus } from "@/gql/graphql";
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
    adminRevenueSeries: vi.fn(),
    adminGrowthSeries: vi.fn(),
    adminContractStatusBreakdown: vi.fn(),
    adminTopCategories: vi.fn(),
    adminAttentionCounts: vi.fn(),
  },
}));
// Canvas charts don't render in jsdom; expose what they were given instead.
vi.mock("react-chartjs-2", () => {
  const Chart = ({
    "aria-label": label,
    data,
  }: {
    "aria-label": string;
    data: { labels: string[] };
  }) => (
    <figure aria-label={label}>
      {data.labels.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </figure>
  );
  return { Bar: Chart, Line: Chart, Doughnut: Chart };
});

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
    vi.mocked(StatisticsService.adminRevenueSeries).mockResolvedValue([]);
    vi.mocked(StatisticsService.adminGrowthSeries).mockResolvedValue([]);
    vi.mocked(StatisticsService.adminContractStatusBreakdown).mockResolvedValue(
      [],
    );
    vi.mocked(StatisticsService.adminTopCategories).mockResolvedValue([]);
    vi.mocked(StatisticsService.adminAttentionCounts).mockResolvedValue(null);
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

describe("Dashboard insights (UI-14)", () => {
  beforeEach(() => {
    vi.mocked(StatisticsService.adminDashboardStats).mockResolvedValue(stats);
    vi.mocked(StatisticsService.adminRevenueSeries).mockResolvedValue([
      { bucket: "2026-10-19", contracts: 0, chatFees: 0, premiumAds: 0 },
      { bucket: "2026-10-20", contracts: 20, chatFees: 10, premiumAds: 5.5 },
    ]);
    vi.mocked(StatisticsService.adminGrowthSeries).mockResolvedValue([
      { bucket: "2026-10-20", customers: 3, providers: 1 },
    ]);
    vi.mocked(StatisticsService.adminContractStatusBreakdown).mockResolvedValue(
      [
        { status: ContractStatus.Completed, count: 4 },
        { status: ContractStatus.Disputed, count: 1 },
      ],
    );
    vi.mocked(StatisticsService.adminTopCategories).mockResolvedValue([
      { categoryId: "c1", nameAr: "سباكة", nameEn: "Plumbing", contracts: 9 },
    ]);
    vi.mocked(StatisticsService.adminAttentionCounts).mockResolvedValue({
      pendingProviderRequests: 2,
      openComplaints: 0,
      cancellationRequests: 0,
      disputedContracts: 1,
      terminationRequests: 0,
    });
  });

  it("renders every chart with its totals for a super admin", async () => {
    const charts = en.dashboard.charts;
    renderPage(<Dashboard />);

    expect(await screen.findByText("35.5 SAR")).toBeInTheDocument();
    expect(StatisticsService.adminRevenueSeries).toHaveBeenCalledWith(
      "LAST_30_DAYS",
    );
    expect(screen.getByLabelText(charts.revenue_title)).toBeInTheDocument();
    expect(await screen.findByText("+3")).toBeInTheDocument();
    expect(screen.getByLabelText(charts.status_title)).toBeInTheDocument();
    // Donut legend: one row per status, labelled like the status chips.
    expect(screen.getAllByText("Disputed").length).toBeGreaterThan(0);
    expect(await screen.findByText("Plumbing")).toBeInTheDocument();
  });

  it("shows category names and the range switch in Arabic", async () => {
    renderPage(<Dashboard />, { lang: "ar", searchParams: { range: "12m" } });

    expect(await screen.findByText("سباكة")).toBeInTheDocument();
    expect(StatisticsService.adminTopCategories).toHaveBeenCalledWith(
      "LAST_12_MONTHS",
    );
    expect(
      screen.getByRole("tab", { name: ar.dashboard.range["12m"] }),
    ).toHaveAttribute("aria-selected", "true");
  });

  it("shows the empty state when a period has no data", async () => {
    vi.mocked(StatisticsService.adminRevenueSeries).mockResolvedValue([
      { bucket: "2026-10-20", contracts: 0, chatFees: 0, premiumAds: 0 },
    ]);
    renderPage(<Dashboard />);

    expect(
      (await screen.findAllByText(en.dashboard.charts.empty)).length,
    ).toBeGreaterThan(0);
  });

  it("hides the charts an admin has no permission for", async () => {
    renderPage(<Dashboard />, {
      permissionType: AdminPermissionType.Custom,
      permissions: [{ module: "user", action: "read" }],
    });

    expect(
      await screen.findByLabelText(en.dashboard.charts.growth_title),
    ).toBeInTheDocument();
    expect(
      screen.queryByText(en.dashboard.charts.revenue_title),
    ).not.toBeInTheDocument();
    expect(StatisticsService.adminRevenueSeries).not.toHaveBeenCalled();
    expect(
      StatisticsService.adminContractStatusBreakdown,
    ).not.toHaveBeenCalled();
  });
});
