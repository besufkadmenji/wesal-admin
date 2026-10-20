import { AdminNotification } from "@/services/admin-notification.service";

/** Admin page an admin header notification opens (BRD 4.3.25). */
export const adminNotificationHref = (
  notification: AdminNotification,
): string | null => {
  const id = notification.relatedEntityId;
  switch (notification.relatedEntityType) {
    case "contract":
      return id ? `/contracts/${id}` : "/contracts";
    case "provider_request":
      return id ? `/providers/requests/${id}` : "/providers/requests";
    case "user":
      return id ? `/users/${id}` : "/users";
    case "contact_message":
      return "/contact-messages";
    case "complaint":
      return id ? `/complaints/${id}` : "/complaints";
    case "badge":
      return "/badges";
    default:
      return null;
  }
};

/** Arabic is stored in title/message; other languages in `translations`. */
export const localizedCopy = (
  notification: AdminNotification,
  lang: string,
): { title: string; message: string } => {
  const translations = notification.translations as
    | Partial<Record<string, { title: string; message: string }>>
    | null
    | undefined;
  const translated = lang === "ar" ? undefined : translations?.[lang];
  return translated ?? { title: notification.title, message: notification.message };
};
