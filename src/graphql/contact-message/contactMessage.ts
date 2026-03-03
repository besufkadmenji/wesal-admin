import {
  ContactMessageQuery,
  ContactMessageQueryVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const CONTACT_MESSAGE_QUERY: TypedDocumentNode<
  ContactMessageQuery,
  ContactMessageQueryVariables
> = gql`
  query contactMessage($contactMessageId: ID!) {
    contactMessage(id: $contactMessageId) {
      attachmentFilename
      createdAt
      dialCode
      email
      id
      messageContent
      messageType
      name
      phone
      updatedAt
      reply
      publicId
      senderId
      senderType
      status
    }
  }
`;
