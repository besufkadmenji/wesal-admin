import {
  ActivateDeliveryCompanyMutation,
  ActivateDeliveryCompanyMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const ACTIVATE_DELIVERY_COMPANY_MUTATION: TypedDocumentNode<
  ActivateDeliveryCompanyMutation,
  ActivateDeliveryCompanyMutationVariables
> = gql`
  mutation activateDeliveryCompany($activateDeliveryCompanyId: ID!) {
    activateDeliveryCompany(id: $activateDeliveryCompanyId) {
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
