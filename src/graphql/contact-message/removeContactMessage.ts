import {
    RemoveContactMessageMutation,
    RemoveContactMessageMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const REMOVE_CONTACT_MESSAGE_MUTATION: TypedDocumentNode<
  RemoveContactMessageMutation,
  RemoveContactMessageMutationVariables
> = gql`
  mutation removeContactMessage($removeContactMessageId: ID!) {
    removeContactMessage(id: $removeContactMessageId)
  }
`;
