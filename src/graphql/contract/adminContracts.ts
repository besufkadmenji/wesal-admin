import {
  AdminLifecycleContractsQuery,
  AdminLifecycleContractsQueryVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const ADMIN_CONTRACTS_QUERY: TypedDocumentNode<
  AdminLifecycleContractsQuery,
  AdminLifecycleContractsQueryVariables
> = gql`
  query AdminLifecycleContracts($input: ContractPaginationInput) {
    adminContracts(input: $input) {
      items {
        id
        publicId
        status
        version
        totalPayable
        createdAt
        client {
          name
          phone
        }
        provider {
          commercialName
          phone
        }
        conversation {
          listing {
            name
          }
        }
      }
      meta {
        total
        page
        limit
        totalPages
      }
    }
  }
`;
