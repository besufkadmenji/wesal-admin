import { gql } from "@apollo/client";

export const ADMIN_BROADCASTS_QUERY = gql`
  query adminBroadcasts($input: BroadcastPaginationInput) {
    adminBroadcasts(input: $input) {
      items {
        id
        publicId
        title
        message
        recipientTypes
        audience
        recipientCount
        createdAt
      }
      meta {
        total
        page
        limit
        totalPages
        hasNext
        hasPrevious
      }
    }
  }
`;

export const ADMIN_BROADCAST_QUERY = gql`
  query adminBroadcast($id: ID!) {
    adminBroadcast(id: $id) {
      id
      publicId
      title
      message
      recipientTypes
      audience
      recipientCount
      createdAt
      recipients {
        id
        type
        name
      }
    }
  }
`;

export const BROADCAST_RECIPIENT_OPTIONS_QUERY = gql`
  query broadcastRecipientOptions(
    $type: BroadcastRecipientType!
    $search: String
  ) {
    broadcastRecipientOptions(type: $type, search: $search) {
      id
      type
      name
      detail
    }
  }
`;

export const SEND_BROADCAST_MUTATION = gql`
  mutation sendBroadcast($input: SendBroadcastInput!) {
    sendBroadcast(input: $input) {
      id
      recipientCount
    }
  }
`;
