import { AdminNotification } from "@/services/admin-notification.service";
import { addToast, Button } from "@heroui/react";
import { adminNotificationHref, localizedCopy } from "./adminNotificationHref";

/**
 * ClickUp 869fp1jmt: pops up an admin notification that arrived while the
 * panel is open. "View" opens the related page, like the bell list does.
 */
export const showAdminNotificationToast = (
  notification: AdminNotification,
  options: { lang: string; viewLabel: string; onView: (href: string) => void },
) => {
  const copy = localizedCopy(notification, options.lang);
  const href = adminNotificationHref(notification);
  addToast({
    title: copy.title,
    description: copy.message,
    color: "primary",
    timeout: 6000,
    shouldShowTimeoutProgress: true,
    endContent: href ? (
      <Button
        size="sm"
        variant="flat"
        color="primary"
        onPress={() => options.onView(href)}
      >
        {options.viewLabel}
      </Button>
    ) : undefined,
  });
};
