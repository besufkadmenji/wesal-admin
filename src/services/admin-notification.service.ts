import {
  AdminMarkAllNotificationsReadMutation,
  AdminMarkNotificationReadMutation,
  AdminNotificationAddedSubscription,
  AdminNotificationsQuery,
} from "@/gql/graphql";
import {
  ADMIN_MARK_ALL_NOTIFICATIONS_READ_MUTATION,
  ADMIN_MARK_NOTIFICATION_READ_MUTATION,
  ADMIN_NOTIFICATION_ADDED_SUBSCRIPTION,
  ADMIN_NOTIFICATIONS_QUERY,
} from "@/graphql/notification/adminNotifications";
import client from "@/utils/apollo.client";

export type AdminNotification =
  AdminNotificationsQuery["adminNotifications"]["items"][number];

/** Dashboard header notifications (BRD 4.3.25). */
class AdminNotificationService {
  static list = async (limit = 20): Promise<AdminNotificationsQuery | null> => {
    try {
      const result = await client().query<AdminNotificationsQuery>({
        query: ADMIN_NOTIFICATIONS_QUERY,
        variables: { page: 1, limit },
        fetchPolicy: "network-only",
      });
      return result.data ?? null;
    } catch (e) {
      console.error("adminNotificationsResult", e);
    }
    return null;
  };

  static markRead = async (id: string) => {
    const result = await client().mutate<AdminMarkNotificationReadMutation>({
      mutation: ADMIN_MARK_NOTIFICATION_READ_MUTATION,
      variables: { id },
    });
    if (result.error) throw result.error;
  };

  static markAllRead = async () => {
    const result = await client().mutate<AdminMarkAllNotificationsReadMutation>(
      { mutation: ADMIN_MARK_ALL_NOTIFICATIONS_READ_MUTATION },
    );
    if (result.error) throw result.error;
  };

  static added = () =>
    client().subscribe<AdminNotificationAddedSubscription>({
      query: ADMIN_NOTIFICATION_ADDED_SUBSCRIPTION,
    });
}

export default AdminNotificationService;
