import {
  DeliveryCompaniesQuery,
  DeliveryCompaniesQueryVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const DELIVERY_COMPANIES_QUERY: TypedDocumentNode<
  DeliveryCompaniesQuery,
  DeliveryCompaniesQueryVariables
> = gql`
  query deliveryCompanies($input: DeliveryCompanyPaginationInput) {
    deliveryCompanies(input: $input) {
      meta {
        hasNext
        hasPrevious
        limit
        page
        total
        totalPages
      }
      items {
        createdAt
        deactivationReason
        id
        nameAr
        nameEn
        status
        updatedAt
      }
    }
  }
`;
