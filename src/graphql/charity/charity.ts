import { gql } from "@apollo/client";

export const ADMIN_CHARITY_CONTRACTS_QUERY = gql`
  query adminCharityContracts($input: ContractPaginationInput) {
    adminCharityContracts(input: $input) {
      items {
        id
        publicId
        status
        charityAmount
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
            category {
              nameAr
              nameEn
            }
          }
        }
      }
      meta {
        total
        page
        totalPages
      }
    }
  }
`;

export const ADMIN_CHARITY_SUMMARY_QUERY = gql`
  query adminCharitySummary($from: DateTime, $to: DateTime) {
    adminCharitySummary(from: $from, to: $to) {
      contracts
      completedContracts
      totalAmount
    }
  }
`;
