import { BadgesPage } from "@/components/app/Badges/BadgesPage";
import ar from "@/config/i18n/locales/ar.json";
import en from "@/config/i18n/locales/en.json";
import { AdminPermissionType, BadgeBound, BadgeTier } from "@/gql/graphql";
import BadgeService from "@/services/badge.service";
import { renderPage } from "@/test/renderPage";
import { showErrorMessage } from "@/utils/show.message";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/services/badge.service", () => ({
  default: { settings: vi.fn(), updateSettings: vi.fn() },
}));
vi.mock("@/utils/show.message", () => ({
  showErrorMessage: vi.fn(),
  showSuccessMessage: vi.fn(),
}));

const settings = {
  badgeSettings: [
    {
      tier: BadgeTier.Trust,
      maxBound: BadgeBound.Eq_5,
      minBound: BadgeBound.Eq_4,
      enabled: true,
    },
    {
      tier: BadgeTier.Diligence,
      maxBound: BadgeBound.Lt_4,
      minBound: BadgeBound.Eq_3,
      enabled: true,
    },
    // Not configured yet: no bounds, disabled.
  ],
  badgeLastRun: {
    id: "run-1",
    period: "2026-10",
    ranAt: "2026-10-01T00:00:00.000Z",
    trustCount: 3,
    diligenceCount: 2,
    underImprovementCount: 1,
    changedCount: 4,
    deletedProviders: [{ id: "p9", name: "Removed Provider" }],
    skippedProviders: [],
  },
};

describe("BadgesPage (S4-27 badge settings)", () => {
  beforeEach(() => {
    vi.mocked(BadgeService.settings).mockResolvedValue(settings as never);
  });

  it.each([
    ["en", en],
    ["ar", ar],
  ] as const)(
    "shows the three badges and the last run in %s",
    async (lang, dict) => {
      renderPage(<BadgesPage />, { lang });
      const copy = dict.badges_page;

      expect(
        await screen.findByText(copy.tiers[BadgeTier.Trust]),
      ).toBeInTheDocument();
      expect(
        screen.getByText(copy.tiers[BadgeTier.Diligence]),
      ).toBeInTheDocument();
      expect(
        screen.getByText(copy.tiers[BadgeTier.UnderImprovement]),
      ).toBeInTheDocument();
      expect(
        screen.getAllByText(copy.bounds[BadgeBound.Eq_5]).length,
      ).toBeGreaterThan(0);
      expect(screen.getByText(copy.last_run.title)).toBeInTheDocument();
      expect(screen.getByText("Removed Provider")).toBeInTheDocument();
    },
  );

  it("keeps Save off until a change, and blocks enabling a badge without bounds", async () => {
    renderPage(<BadgesPage />);
    const save = await screen.findByRole("button", {
      name: en.badges_page.save,
    });
    expect(save).toBeDisabled();

    // The third block is "Under improvement", which has no bounds yet.
    const enable = await screen.findAllByRole("radio", {
      name: en.badges_page.labels.enabled,
    });
    expect(enable).toHaveLength(3);
    await userEvent.click(enable[2]);
    expect(save).toBeEnabled();
    await userEvent.click(save);

    expect(showErrorMessage).toHaveBeenCalledWith(
      en.badges_page.messages.bounds_required,
    );
    expect(BadgeService.updateSettings).not.toHaveBeenCalled();
  });

  it("is read-only without badge:update", async () => {
    renderPage(<BadgesPage />, {
      permissionType: AdminPermissionType.Custom,
      permissions: [{ module: "badge", action: "read" }],
    });

    expect(
      await screen.findByText(en.badges_page.tiers[BadgeTier.Trust]),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: en.badges_page.save }),
    ).not.toBeInTheDocument();
    for (const radio of screen.getAllByRole("radio")) {
      expect(radio).toBeDisabled();
    }
  });

  it("explains that no run has happened yet", async () => {
    vi.mocked(BadgeService.settings).mockResolvedValue({
      ...settings,
      badgeLastRun: null,
    } as never);
    renderPage(<BadgesPage />);

    expect(
      await screen.findByText(en.badges_page.last_run.never),
    ).toBeInTheDocument();
  });
});
