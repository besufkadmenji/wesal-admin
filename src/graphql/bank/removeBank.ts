import { RemoveBankMutation, RemoveBankMutationVariables } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const REMOVE_BANK_MUTATION: TypedDocumentNode<
  RemoveBankMutation,
  RemoveBankMutationVariables
> = gql`
  mutation removeBank($removeBankId: ID!) {
    removeBank(id: $removeBankId) {
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
