import { showAdminNotificationToast } from "./adminNotificationToast";
import type { AdminNotification } from "@/services/admin-notification.service";
import { isValidElement, type ReactElement } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

const { addToast } = vi.hoisted(() => ({ addToast: vi.fn() }));
vi.mock("@heroui/react", () => ({ addToast, Button: () => null }));

const notification = (overrides: Partial<AdminNotification> = {}) =>
  ({
    id: "n1",
    title: "طلب انضمام جديد",
    message: "قدّم مزود خدمة طلب انضمام",
    translations: {
      en: { title: "New join request", message: "A provider applied" },
    },
    relatedEntityType: "provider_request",
    relatedEntityId: "r1",
    isRead: false,
    ...overrides,
  }) as unknown as AdminNotification;

describe("showAdminNotificationToast (ClickUp 869fp1jmt)", () => {
  beforeEach(() => addToast.mockReset());

  it("pops up the notification in the admin's language with a View button", () => {
    const onView = vi.fn();
    showAdminNotificationToast(notification(), {
      lang: "en",
      viewLabel: "View",
      onView,
    });

    const [options] = addToast.mock.calls[0];
    expect(options.title).toBe("New join request");
    expect(options.description).toBe("A provider applied");
    expect(isValidElement(options.endContent)).toBe(true);
    const button = options.endContent as ReactElement<{
      onPress: () => void;
      children: string;
    }>;
    expect(button.props.children).toBe("View");
    button.props.onPress();
    expect(onView).toHaveBeenCalledWith("/providers/requests/r1");
  });

  it("uses the stored Arabic text for Arabic", () => {
    showAdminNotificationToast(notification(), {
      lang: "ar",
      viewLabel: "عرض",
      onView: vi.fn(),
    });
    expect(addToast.mock.calls[0][0].title).toBe("طلب انضمام جديد");
  });

  it("has no View button when the notification has no page", () => {
    showAdminNotificationToast(
      notification({ relatedEntityType: "payment" }),
      { lang: "en", viewLabel: "View", onView: vi.fn() },
    );
    expect(addToast.mock.calls[0][0].endContent).toBeUndefined();
  });
});
