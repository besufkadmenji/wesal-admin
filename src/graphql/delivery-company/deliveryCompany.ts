import {
  DeliveryCompanyQuery,
  DeliveryCompanyQueryVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const DELIVERY_COMPANY_QUERY: TypedDocumentNode<
  DeliveryCompanyQuery,
  DeliveryCompanyQueryVariables
> = gql`
  query deliveryCompany($deliveryCompanyId: ID!) {
    deliveryCompany(id: $deliveryCompanyId) {
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
