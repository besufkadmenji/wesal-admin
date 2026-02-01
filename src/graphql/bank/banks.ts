import { BanksQuery, BanksQueryVariables } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const BANKS_QUERY: TypedDocumentNode<BanksQuery, BanksQueryVariables> =
  gql`
    query banks($input: BankPaginationInput) {
      banks(input: $input) {
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
