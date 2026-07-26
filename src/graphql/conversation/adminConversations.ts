import {
  AdminLifecycleConversationsQuery,
  AdminLifecycleConversationsQueryVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const ADMIN_CONVERSATIONS_QUERY: TypedDocumentNode<
  AdminLifecycleConversationsQuery,
  AdminLifecycleConversationsQueryVariables
> = gql`
  query AdminLifecycleConversations($input: ConversationPaginationInput) {
    adminConversations(input: $input) {
      items {
        id
        publicId
        status
        feeCycle
        createdAt
        closedAt
        user {
          name
          phone
        }
        provider {
          commercialName
          phone
        }
        listing {
          name
        }
      }
      meta {
        total
        page
        limit
        totalPages
      }
    }
  }
`;
