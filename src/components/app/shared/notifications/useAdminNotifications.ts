import { AdminNotificationsQuery } from "@/gql/graphql";
import AdminNotificationService from "@/services/admin-notification.service";
import { useAppRouter } from "@/hooks/useAppRouter";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { showAdminNotificationToast } from "./adminNotificationToast";

const KEY = ["admin-notifications"] as const;

/** Header bell feed: initial page, live pushes, read state. */
export const useAdminNotifications = (enabled: boolean) => {
  const queryClient = useQueryClient();
  // Read through a ref so a language switch doesn't reopen the socket.
  const dict = useDict();
  const lang = useLang();
  const router = useAppRouter();
  const toastContextRef = useRef({ dict, lang, router });
  useEffect(() => {
    toastContextRef.current = { dict, lang, router };
  }, [dict, lang, router]);
  const query = useQuery({
    queryKey: KEY,
    queryFn: () => AdminNotificationService.list(),
    enabled,
  });

  useEffect(() => {
    if (!enabled) return;
    const subscription = AdminNotificationService.added().subscribe({
      next: (payload) => {
        const added = payload.data?.adminNotificationAdded;
        if (!added) return;
        const known = queryClient
          .getQueryData<AdminNotificationsQuery | null>(KEY)
          ?.adminNotifications.items.some((n) => n.id === added.id);
        if (!known && !added.isRead) {
          const { dict, lang, router } = toastContextRef.current;
          showAdminNotificationToast(added, {
            lang,
            viewLabel: dict.admin_notifications.view,
            onView: (href) => {
              void AdminNotificationService.markRead(added.id).finally(() =>
                queryClient.invalidateQueries({ queryKey: KEY }),
              );
              router.push(`/${lang}${href}`);
            },
          });
        }
        queryClient.setQueryData<AdminNotificationsQuery | null>(
          KEY,
          (current) => {
            if (!current) return current;
            if (current.adminNotifications.items.some((n) => n.id === added.id)) {
              return current;
            }
            return {
              ...current,
              adminUnreadNotificationCount:
                current.adminUnreadNotificationCount + (added.isRead ? 0 : 1),
              adminNotifications: {
                ...current.adminNotifications,
                items: [added, ...current.adminNotifications.items].slice(0, 20),
                meta: {
                  ...current.adminNotifications.meta,
                  total: current.adminNotifications.meta.total + 1,
                },
              },
            };
          },
        );
      },
    });
    // Pushes sent while the socket was down are lost; re-read on reconnect.
    const refresh = () => void queryClient.invalidateQueries({ queryKey: KEY });
    window.addEventListener("wesal:graphql-reconnected", refresh);
    return () => {
      subscription.unsubscribe();
      window.removeEventListener("wesal:graphql-reconnected", refresh);
    };
  }, [enabled, queryClient]);

  const markRead = useMutation({
    mutationFn: (id: string) => AdminNotificationService.markRead(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: KEY }),
  });
  const markAllRead = useMutation({
    mutationFn: () => AdminNotificationService.markAllRead(),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: KEY }),
  });

  return {
    items: query.data?.adminNotifications.items ?? [],
    unread: query.data?.adminUnreadNotificationCount ?? 0,
    isLoading: query.isLoading,
    markRead: markRead.mutate,
    markAllRead: markAllRead.mutate,
    isMarkingAll: markAllRead.isPending,
  };
};
