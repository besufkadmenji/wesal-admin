import {
  CreateDeliveryCompanyMutation,
  CreateDeliveryCompanyMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const CREATE_DELIVERY_COMPANY_MUTATION: TypedDocumentNode<
  CreateDeliveryCompanyMutation,
  CreateDeliveryCompanyMutationVariables
> = gql`
  mutation createDeliveryCompany($input: CreateDeliveryCompanyInput!) {
    createDeliveryCompany(input: $input) {
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
