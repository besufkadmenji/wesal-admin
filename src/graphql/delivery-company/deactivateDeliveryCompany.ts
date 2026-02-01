import {
  DeactivateDeliveryCompanyMutation,
  DeactivateDeliveryCompanyMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const DEACTIVATE_DELIVERY_COMPANY_MUTATION: TypedDocumentNode<
  DeactivateDeliveryCompanyMutation,
  DeactivateDeliveryCompanyMutationVariables
> = gql`
  mutation deactivateDeliveryCompany(
    $deactivateDeliveryCompanyId: ID!
    $input: DeactivateDeliveryCompanyInput!
  ) {
    deactivateDeliveryCompany(id: $deactivateDeliveryCompanyId, input: $input) {
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
