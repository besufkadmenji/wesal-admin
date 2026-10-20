import { CommentsPage } from "@/components/app/Comments/CommentsPage";
import ar from "@/config/i18n/locales/ar.json";
import en from "@/config/i18n/locales/en.json";
import { AdminPermissionType, RatingStatus } from "@/gql/graphql";
import RatingService from "@/services/rating.service";
import { renderPage } from "@/test/renderPage";
import { testNavigation } from "@/test/testNavigation";
import { screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/services/rating.service", () => ({
  default: { adminRatings: vi.fn(), setStatus: vi.fn() },
}));
vi.mock("@/utils/show.message", () => ({
  showErrorMessage: vi.fn(),
  showSuccessMessage: vi.fn(),
}));

const rating = (overrides: object) => ({
  id: "rating-1",
  rating: 5,
  comment: "Quick and professional",
  status: RatingStatus.Published,
  createdAt: "2026-10-15T10:00:00.000Z",
  user: { id: "u1", name: "Local Customer", phone: "+966511110001" },
  listing: { id: "l1", name: "Emergency plumbing repair" },
  provider: { id: "p1", commercialName: "Local Plumbing Co" },
  contract: { id: "c1", publicId: 1184 },
  ...overrides,
});

const page = (items: object[]) => ({
  items,
  meta: {
    hasNext: false,
    hasPrevious: false,
    limit: 10,
    page: 1,
    total: items.length,
    totalPages: 1,
  },
});

describe("CommentsPage (S4-23 comments management)", () => {
  beforeEach(() => {
    vi.mocked(RatingService.adminRatings).mockResolvedValue(
      page([
        rating({}),
        rating({
          id: "rating-2",
          rating: 4,
          status: RatingStatus.Hidden,
          comment: "خدمة ممتازة",
          contract: { id: "c2", publicId: 1170 },
        }),
      ]) as never,
    );
  });

  it.each([
    ["en", en],
    ["ar", ar],
  ] as const)("lists comments with their status in %s", async (lang, dict) => {
    renderPage(<CommentsPage />, { lang });

    const published = (await screen.findByText("#1184")).closest("tr")!;
    const hidden = screen.getByText("#1170").closest("tr")!;
    expect(
      screen.getAllByText(dict.navigation.comments).length,
    ).toBeGreaterThan(0);
    expect(
      within(published).getByText("Quick and professional"),
    ).toBeInTheDocument();
    expect(
      within(published).getByText(
        dict.comments_page.status[RatingStatus.Published],
      ),
    ).toBeInTheDocument();
    expect(within(hidden).getByText("خدمة ممتازة")).toBeInTheDocument();
    expect(
      within(hidden).getByText(dict.comments_page.status[RatingStatus.Hidden]),
    ).toBeInTheDocument();
  });

  it("asks for confirmation, then hides a published comment", async () => {
    vi.mocked(RatingService.setStatus).mockResolvedValue({} as never);
    renderPage(<CommentsPage />);

    const row = (await screen.findByText("#1184")).closest("tr")!;
    await userEvent.click(
      within(row).getByRole("button", { name: en.comments_page.actions.hide }),
    );
    const dialog = await screen.findByRole("dialog");
    expect(
      within(dialog).getByText(en.comments_page.confirm.hide.title),
    ).toBeInTheDocument();
    await userEvent.click(
      within(dialog).getByRole("button", {
        name: en.comments_page.confirm.hide.action,
      }),
    );
    await waitFor(() =>
      expect(RatingService.setStatus).toHaveBeenCalledWith(
        "rating-1",
        RatingStatus.Hidden,
      ),
    );
  });

  it("offers no publish/hide action to a read-only admin", async () => {
    renderPage(<CommentsPage />, {
      permissionType: AdminPermissionType.Custom,
      permissions: [{ module: "rating", action: "read" }],
    });

    expect(await screen.findByText("#1184")).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: en.comments_page.actions.hide }),
    ).not.toBeInTheDocument();
  });

  it("sends an admin without access back to the dashboard", async () => {
    renderPage(<CommentsPage />, {
      permissionType: AdminPermissionType.Custom,
      permissions: [],
    });

    await waitFor(() =>
      expect(testNavigation.router.replace).toHaveBeenCalledWith("/dashboard"),
    );
    expect(RatingService.adminRatings).not.toHaveBeenCalled();
  });

  it("shows the empty state", async () => {
    vi.mocked(RatingService.adminRatings).mockResolvedValue(page([]) as never);
    renderPage(<CommentsPage />);

    expect(await screen.findByText(en.comments_page.empty)).toBeInTheDocument();
  });
});
