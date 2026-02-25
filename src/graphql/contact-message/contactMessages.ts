import {
  ContactMessagesQuery,
  ContactMessagesQueryVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const CONTACT_MESSAGES_QUERY: TypedDocumentNode<
  ContactMessagesQuery,
  ContactMessagesQueryVariables
> = gql`
  query contactMessages($paginationInput: ContactMessagePaginationInput) {
    contactMessages(paginationInput: $paginationInput) {
      items {
        attachmentFilename
        createdAt
        dialCode
        email
        id
        isRead
        messageContent
        messageType
        name
        phone
        updatedAt
        reply
      }
      meta {
        hasNext
        hasPrevious
        limit
        page
        total
        totalPages
      }
    }
  }
`;
