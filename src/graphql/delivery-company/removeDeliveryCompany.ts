import {
  RemoveDeliveryCompanyMutation,
  RemoveDeliveryCompanyMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const REMOVE_DELIVERY_COMPANY_MUTATION: TypedDocumentNode<
  RemoveDeliveryCompanyMutation,
  RemoveDeliveryCompanyMutationVariables
> = gql`
  mutation removeDeliveryCompany($removeDeliveryCompanyId: ID!) {
    removeDeliveryCompany(id: $removeDeliveryCompanyId) {
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
