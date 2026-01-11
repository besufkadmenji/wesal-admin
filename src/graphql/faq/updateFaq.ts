import { UpdateFaqMutation, UpdateFaqMutationVariables } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const UPDATE_FAQ_MUTATION: TypedDocumentNode<
  UpdateFaqMutation,
  UpdateFaqMutationVariables
> = gql`
  mutation updateFaq($updateFaqInput: UpdateFaqInput!) {
    updateFaq(updateFaqInput: $updateFaqInput) {
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
