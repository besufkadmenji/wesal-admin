import { BankQuery, BankQueryVariables } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const BANK_QUERY: TypedDocumentNode<BankQuery, BankQueryVariables> = gql`
  query bank($bankId: ID!) {
    bank(id: $bankId) {
      createdAt
      deactivationReason
      id
      nameAr
      nameEn
      status
      updatedAt
    }
  }
`;
