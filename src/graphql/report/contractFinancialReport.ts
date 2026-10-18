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
      totalAdminProfit
      totalCharity
      totalContractValue
      totalPaid
      totalCustomerRefunds
      totalProviderReleases
      items {
        contractId
        contractNumber
        customerName
        providerName
        deliveryCompanyNameAr
        deliveryCompanyNameEn
        status
        providerNet
        vat
        commission
        adminProfit
        isCharity
        contractTotal
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
