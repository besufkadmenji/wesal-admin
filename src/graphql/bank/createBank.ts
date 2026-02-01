import { CreateBankMutation, CreateBankMutationVariables } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const CREATE_BANK_MUTATION: TypedDocumentNode<
  CreateBankMutation,
  CreateBankMutationVariables
> = gql`
  mutation createBank($input: CreateBankInput!) {
    createBank(input: $input) {
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
