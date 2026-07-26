import {
  AdminLifecycleConversationQuery,
  AdminLifecycleConversationQueryVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const ADMIN_CONVERSATION_QUERY: TypedDocumentNode<
  AdminLifecycleConversationQuery,
  AdminLifecycleConversationQueryVariables
> = gql`
  query AdminLifecycleConversation($id: String!) {
    adminConversation(id: $id) {
      id
      publicId
      status
      feeCycle
      createdAt
      closedAt
      customerFeePaidAt
      providerFeePaidAt
      user {
        name
        phone
      }
      provider {
        commercialName
        phone
      }
      listing {
        id
        name
      }
      messages {
        id
        senderType
        content
        kind
        createdAt
      }
    }
    adminContracts(input: { conversationId: $id, limit: 20 }) {
      items {
        id
        publicId
        status
      }
    }
    adminComplaints(input: { conversationId: $id, limit: 20 }) {
      items {
        id
        publicId
        status
      }
    }
  }
`;
