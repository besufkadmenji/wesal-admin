import { gql } from "@apollo/client";

export const ADMIN_NOTIFICATIONS_QUERY = gql`
  query adminNotifications($page: Int, $limit: Int) {
    adminNotifications(page: $page, limit: $limit) {
      items {
        id
        type
        title
        message
        translations
        relatedEntityType
        relatedEntityId
        isRead
        createdAt
      }
      meta {
        total
        page
        totalPages
        hasNext
      }
    }
    adminUnreadNotificationCount
  }
`;

export const ADMIN_MARK_NOTIFICATION_READ_MUTATION = gql`
  mutation adminMarkNotificationRead($id: ID!) {
    adminMarkNotificationRead(id: $id) {
      id
      isRead
    }
  }
`;

export const ADMIN_MARK_ALL_NOTIFICATIONS_READ_MUTATION = gql`
  mutation adminMarkAllNotificationsRead {
    adminMarkAllNotificationsRead
  }
`;

export const ADMIN_NOTIFICATION_ADDED_SUBSCRIPTION = gql`
  subscription adminNotificationAdded {
    adminNotificationAdded {
      id
      type
      title
      message
      translations
      relatedEntityType
      relatedEntityId
      isRead
      createdAt
    }
  }
`;
