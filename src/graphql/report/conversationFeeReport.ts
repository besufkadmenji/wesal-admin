import {
  AdminConversationFeeReportQuery,
  AdminConversationFeeReportQueryVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const CONVERSATION_FEE_REPORT_QUERY: TypedDocumentNode<
  AdminConversationFeeReportQuery,
  AdminConversationFeeReportQueryVariables
> = gql`
  query AdminConversationFeeReport($input: FeeReportInput) {
    conversationFeeReport(input: $input) {
      totalCustomerFees
      totalProviderFees
      items {
        conversationId
        conversationNumber
        customerName
        providerName
        providerPhone
        status
        customerFee
        providerFee
        startedAt
        endedAt
      }
      meta {
        total
        page
        limit
      }
    }
  }
`;
