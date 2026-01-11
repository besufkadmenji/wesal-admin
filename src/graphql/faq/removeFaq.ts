import { RemoveFaqMutation, RemoveFaqMutationVariables } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const REMOVE_FAQ_MUTATION: TypedDocumentNode<
  RemoveFaqMutation,
  RemoveFaqMutationVariables
> = gql`
  mutation removeFaq($removeFaqId: ID!) {
    removeFaq(id: $removeFaqId)
  }
`;
