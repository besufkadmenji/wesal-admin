import {
  ReplyToContactMessageMutation,
  ReplyToContactMessageMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";
import { TypeDefinitionNode } from "graphql";

export const REPLY_TO_CONTACT_MESSAGE: TypedDocumentNode<
  ReplyToContactMessageMutation,
  ReplyToContactMessageMutationVariables
> = gql`
  mutation replyToContactMessage(
    $replyToContactMessageId: ID!
    $message: String!
  ) {
    replyToContactMessage(id: $replyToContactMessageId, message: $message) {
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
