import en from "@/config/i18n/locales/en.json";
import StatisticsService from "@/services/statistics.service";
import { renderPage } from "@/test/renderPage";
import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { AttentionPanel } from "./AttentionPanel";

vi.mock("@/services/statistics.service", () => ({
  default: { adminAttentionCounts: vi.fn() },
}));

const copy = en.dashboard.attention;

describe("AttentionPanel (UI-14)", () => {
  it("links each waiting item to its list", async () => {
    vi.mocked(StatisticsService.adminAttentionCounts).mockResolvedValue({
      pendingProviderRequests: 2,
      openComplaints: 5,
      cancellationRequests: 0,
      disputedContracts: 1,
    });
    renderPage(<AttentionPanel />);

    const requests = await screen.findByRole("link", {
      name: new RegExp(copy.pending_provider_requests),
    });
    expect(requests).toHaveAttribute("href", "/providers/requests");
    expect(requests).toHaveTextContent("2");
    expect(
      screen.getByRole("link", { name: new RegExp(copy.open_complaints) }),
    ).toHaveAttribute("href", "/complaints");
    expect(screen.queryByText(copy.all_clear)).not.toBeInTheDocument();
  });

  it("hides items the admin cannot read and says when all is clear", async () => {
    vi.mocked(StatisticsService.adminAttentionCounts).mockResolvedValue({
      pendingProviderRequests: null,
      openComplaints: 0,
      cancellationRequests: null,
      disputedContracts: null,
    });
    renderPage(<AttentionPanel />);

    expect(await screen.findByText(copy.all_clear)).toBeInTheDocument();
    expect(screen.getAllByRole("link")).toHaveLength(1);
    expect(
      screen.queryByText(copy.pending_provider_requests),
    ).not.toBeInTheDocument();
  });

  it("explains an empty panel when nothing is readable", async () => {
    vi.mocked(StatisticsService.adminAttentionCounts).mockResolvedValue({
      pendingProviderRequests: null,
      openComplaints: null,
      cancellationRequests: null,
      disputedContracts: null,
    });
    renderPage(<AttentionPanel />);

    expect(await screen.findByText(copy.nothing_to_show)).toBeInTheDocument();
  });
});
