import { FaqQuery, FaqQueryVariables } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const FAQ_QUERY: TypedDocumentNode<FaqQuery, FaqQueryVariables> = gql`
  query faq($faqId: ID!) {
    faq(id: $faqId) {
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
