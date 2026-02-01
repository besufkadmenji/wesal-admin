import { UpdateBankMutation, UpdateBankMutationVariables } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const UPDATE_BANK_MUTATION: TypedDocumentNode<
  UpdateBankMutation,
  UpdateBankMutationVariables
> = gql`
  mutation updateBank($input: UpdateBankInput!) {
    updateBank(input: $input) {
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
