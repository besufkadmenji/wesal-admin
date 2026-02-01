import {
  UpdateDeliveryCompanyMutation,
  UpdateDeliveryCompanyMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const UPDATE_DELIVERY_COMPANY_MUTATION: TypedDocumentNode<
  UpdateDeliveryCompanyMutation,
  UpdateDeliveryCompanyMutationVariables
> = gql`
  mutation updateDeliveryCompany($input: UpdateDeliveryCompanyInput!) {
    updateDeliveryCompany(input: $input) {
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
