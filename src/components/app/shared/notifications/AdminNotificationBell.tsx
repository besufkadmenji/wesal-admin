"use client";

import { Bell as NotificationIcon } from "lucide-react";
import { useAppRouter } from "@/hooks/useAppRouter";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import { useMe } from "@/hooks/useMe";
import {
  Badge,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Spinner,
} from "@heroui/react";
import { useState } from "react";
import { adminNotificationHref } from "./adminNotificationHref";
import { AdminNotificationItem } from "./AdminNotificationItem";
import { useAdminNotifications } from "./useAdminNotifications";

/** Dashboard header bell with live admin notifications (BRD 4.3.25). */
export const AdminNotificationBell = () => {
  const dict = useDict();
  const lang = useLang();
  const router = useAppRouter();
  const { me } = useMe();
  const [open, setOpen] = useState(false);
  const feed = useAdminNotifications(Boolean(me));
  const copy = dict.admin_notifications;

  if (!me) return null;
  return (
    <Popover placement="bottom" showArrow isOpen={open} onOpenChange={setOpen}>
      <PopoverTrigger>
        <Button
          isIconOnly
          aria-label={dict.common.notifications}
          className="overflow-visible rounded-full bg-white dark:bg-black"
        >
          <Badge
            classNames={{ badge: "bg-[#EA5455] text-white" }}
            content={feed.unread > 99 ? "99+" : feed.unread}
            isInvisible={feed.unread === 0}
            size="sm"
          >
            <NotificationIcon className="size-5" />
          </Badge>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="grid w-[92vw] auto-rows-max grid-cols-1 items-start gap-3 px-0 py-5 sm:w-[28rem]">
        <div className="flex items-center justify-between gap-2 px-5">
          <p className="text-title text-xl font-semibold dark:text-white">
            {dict.common.notifications}
          </p>
          {feed.unread > 0 && (
            <Button
              size="sm"
              variant="light"
              className="text-app-link font-medium"
              isLoading={feed.isMarkingAll}
              onPress={() => feed.markAllRead()}
            >
              {copy.mark_all_read}
            </Button>
          )}
        </div>
        <div className="grid max-h-[65vh] w-full grid-cols-1 gap-2 overflow-y-auto px-5">
          {feed.isLoading ? (
            <Spinner />
          ) : feed.items.length === 0 ? (
            <p className="text-subTitle p-6 text-center text-sm">{copy.empty}</p>
          ) : (
            feed.items.map((notification) => (
              <AdminNotificationItem
                key={notification.id}
                notification={notification}
                onOpen={() => {
                  if (!notification.isRead) feed.markRead(notification.id);
                  const href = adminNotificationHref(notification);
                  setOpen(false);
                  if (href) router.push(`/${lang}${href}`);
                }}
              />
            ))
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};
