import { CreateFaqMutation, CreateFaqMutationVariables } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const CREATE_FAQ_MUTATION: TypedDocumentNode<
  CreateFaqMutation,
  CreateFaqMutationVariables
> = gql`
  mutation createFaq($createFaqInput: CreateFaqInput!) {
    createFaq(createFaqInput: $createFaqInput) {
      id
      answerAr
      answerEn
      createdAt
      isActive
      order
      questionAr
      questionEn
      updatedAt
    }
  }
`;
