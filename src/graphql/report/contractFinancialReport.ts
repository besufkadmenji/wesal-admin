import {
  AdminContractFinancialReportQuery,
  AdminContractFinancialReportQueryVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const CONTRACT_FINANCIAL_REPORT_QUERY: TypedDocumentNode<
  AdminContractFinancialReportQuery,
  AdminContractFinancialReportQueryVariables
> = gql`
  query AdminContractFinancialReport($input: FeeReportInput) {
    contractFinancialReport(input: $input) {
      completedCount
      totalProviderNet
      totalVat
      totalCommission
      totalPaid
      totalCustomerRefunds
      totalProviderReleases
      items {
        contractId
        contractNumber
        customerName
        providerName
        status
        providerNet
        vat
        commission
        totalPaid
        customerRefund
        providerRelease
        createdAt
      }
      meta {
        total
        page
        limit
      }
    }
  }
`;
