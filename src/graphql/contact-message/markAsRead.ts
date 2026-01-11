import { MarkAsReadMutation, MarkAsReadMutationVariables } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const MARK_AS_READ_MUTATION: TypedDocumentNode<
  MarkAsReadMutation,
  MarkAsReadMutationVariables
> = gql`
  mutation markAsRead($markAsReadId: ID!) {
    markAsRead(id: $markAsReadId) {
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
    }
  }
`;
