import {
  BulkUpdateOrderMutation,
  BulkUpdateOrderMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const BULK_UPDATE_ORDER_FAQ_MUTATION: TypedDocumentNode<
  BulkUpdateOrderMutation,
  BulkUpdateOrderMutationVariables
> = gql`
  mutation bulkUpdateOrder($input: BulkUpdateFaqOrderInput!) {
    bulkUpdateOrder(input: $input) {
      answerAr
      answerEn
      createdAt
      id
      isActive
      order
      questionAr
      questionEn
      updatedAt
    }
  }
`;
