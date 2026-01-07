import {
  RemoveAdminMutation,
  RemoveAdminMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const REMOVE_ADMIN_MUTATION: TypedDocumentNode<
  RemoveAdminMutation,
  RemoveAdminMutationVariables
> = gql`
  mutation removeAdmin($removeAdminId: ID!) {
    removeAdmin(id: $removeAdminId)
  }
`;
