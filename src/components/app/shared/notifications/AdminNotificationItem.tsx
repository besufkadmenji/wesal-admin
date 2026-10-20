import { formatDate } from "@/utils/date.time.helpers";
import { useLang } from "@/hooks/useLang";
import { AdminNotification } from "@/services/admin-notification.service";
import { twMerge } from "tailwind-merge";
import { localizedCopy } from "./adminNotificationHref";

export const AdminNotificationItem = ({
  notification,
  onOpen,
}: {
  notification: AdminNotification;
  onOpen: () => void;
}) => {
  const lang = useLang();
  const copy = localizedCopy(notification, lang);
  return (
    <button
      type="button"
      onClick={onOpen}
      className={twMerge(
        "dark:border-dark-border grid w-full grid-cols-[auto_1fr] items-start gap-3 rounded-xl border border-[#F8F7FC] p-4 text-start",
        !notification.isRead && "dark:bg-dark-black bg-[#F8F7FC]",
      )}
    >
      <span
        className={twMerge(
          "mt-2 size-2 rounded-full",
          notification.isRead ? "bg-transparent" : "bg-app-primary",
        )}
      />
      <span className="grid gap-1">
        <span className="text-title text-sm font-semibold dark:text-white">
          {copy.title}
        </span>
        <span className="text-subTitle text-sm leading-6 dark:text-white/70">
          {copy.message}
        </span>
        <span className="text-subTitle text-xs dark:text-white/50">
          {formatDate(notification.createdAt, lang, { withTime: true })}
        </span>
      </span>
    </button>
  );
};
