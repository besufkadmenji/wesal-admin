import { NotificationsPage } from "@/components/app/Notifications/NotificationsPage";
import ar from "@/config/i18n/locales/ar.json";
import en from "@/config/i18n/locales/en.json";
import {
  AdminPermissionType,
  BroadcastAudience,
  BroadcastRecipientType,
} from "@/gql/graphql";
import BroadcastService from "@/services/broadcast.service";
import { renderPage } from "@/test/renderPage";
import { testNavigation } from "@/test/testNavigation";
import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/services/broadcast.service", () => ({
  default: { list: vi.fn() },
}));

const broadcast = {
  id: "broadcast-1",
  publicId: 31,
  title: "Weekend offer",
  message: "Featured ads are half price this weekend.",
  recipientTypes: [
    BroadcastRecipientType.User,
    BroadcastRecipientType.Provider,
  ],
  audience: BroadcastAudience.All,
  recipientCount: 6,
  createdAt: "2026-10-18T13:07:43.000Z",
};

const list = (items: object[]) => ({
  items,
  meta: {
    total: items.length,
    page: 1,
    limit: 10,
    totalPages: 1,
    hasNext: false,
    hasPrevious: false,
  },
});

describe("NotificationsPage (S4-41 notification management)", () => {
  beforeEach(() => {
    vi.mocked(BroadcastService.list).mockResolvedValue(
      list([broadcast]) as never,
    );
  });

  it.each([
    ["en", en],
    ["ar", ar],
  ] as const)("lists sent broadcasts in %s", async (lang, dict) => {
    renderPage(<NotificationsPage />, { lang });
    const copy = dict.notifications_page;

    const row = (await screen.findByText("Weekend offer")).closest("tr")!;
    expect(screen.getAllByText(copy.title).length).toBeGreaterThan(0);
    expect(
      within(row).getByText("Featured ads are half price this weekend."),
    ).toBeInTheDocument();
    expect(
      within(row).getByText(
        `${copy.recipient_types.USER}، ${copy.recipient_types.PROVIDER}`,
      ),
    ).toBeInTheDocument();
    expect(
      within(row).getByText(`6 (${copy.audience.ALL})`),
    ).toBeInTheDocument();
  });

  it("lets an admin with notification:create add a broadcast", async () => {
    renderPage(<NotificationsPage />);

    await userEvent.click(
      await screen.findByRole("button", {
        name: en.notifications_page.buttons.add_notification,
      }),
    );
    expect(testNavigation.router.push).toHaveBeenCalledWith(
      "/en/notifications/add",
    );
  });

  it("hides Add from an admin who can only read", async () => {
    renderPage(<NotificationsPage />, {
      permissionType: AdminPermissionType.Custom,
      permissions: [{ module: "notification", action: "read" }],
    });

    expect(await screen.findByText("Weekend offer")).toBeInTheDocument();
    expect(
      screen.queryByRole("button", {
        name: en.notifications_page.buttons.add_notification,
      }),
    ).not.toBeInTheDocument();
  });

  it("shows the empty state", async () => {
    vi.mocked(BroadcastService.list).mockResolvedValue(list([]) as never);
    renderPage(<NotificationsPage />);

    expect(
      await screen.findByText(en.notifications_page.empty),
    ).toBeInTheDocument();
  });
});
