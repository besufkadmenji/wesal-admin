import {
    ActivateBankMutation,
    ActivateBankMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const ACTIVATE_BANK_MUTATION: TypedDocumentNode<
  ActivateBankMutation,
  ActivateBankMutationVariables
> = gql`
  mutation activateBank($activateBankId: ID!) {
    activateBank(id: $activateBankId) {
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
