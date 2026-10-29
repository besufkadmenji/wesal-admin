import type { AdminNotification } from "@/services/admin-notification.service";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { adminNotificationHref } from "./adminNotificationHref";

const notification = (relatedEntityType: string, relatedEntityId?: string) =>
  ({ relatedEntityType, relatedEntityId }) as AdminNotification;

/** The App Router folder a link resolves to, with `[id]` for the id. */
const routeExists = (href: string) =>
  existsSync(
    join(
      process.cwd(),
      "src/app/[lang]/(app)",
      ...href
        .split("/")
        .filter(Boolean)
        .map((part) => (part === "x1" ? "[id]" : part)),
      "page.tsx",
    ),
  );

/** ClickUp 869fmny3z: a contact-message notification opened a 404. */
describe("adminNotificationHref", () => {
  // Every entity type the API sends to admins (`notifyAdmins` calls).
  const types = [
    "contract",
    "provider_request",
    "user",
    "contact_message",
    "complaint",
    "badge",
    "signed_contract",
  ];

  it.each(types)(
    "links %s to an existing page, with and without an id",
    (type) => {
      for (const id of ["x1", undefined]) {
        const href = adminNotificationHref(notification(type, id));
        expect(href).not.toBeNull();
        expect(routeExists(href!), href!).toBe(true);
      }
    },
  );

  it("opens the contact message itself", () => {
    expect(adminNotificationHref(notification("contact_message", "m1"))).toBe(
      "/content/contact-messages/m1",
    );
  });

  it("has no page for a payment without a contract", () => {
    expect(adminNotificationHref(notification("payment", "p1"))).toBeNull();
  });
});
