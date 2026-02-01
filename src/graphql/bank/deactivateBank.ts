import {
    DeactivateBankMutation,
    DeactivateBankMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const DEACTIVATE_BANK_MUTATION: TypedDocumentNode<
  DeactivateBankMutation,
  DeactivateBankMutationVariables
> = gql`
  mutation deactivateBank(
    $deactivateBankId: ID!
    $input: DeactivateBankInput!
  ) {
    deactivateBank(id: $deactivateBankId, input: $input) {
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
