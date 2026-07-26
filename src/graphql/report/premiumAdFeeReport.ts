import {
  AdminPremiumAdReportQuery,
  AdminPremiumAdReportQueryVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const PREMIUM_AD_FEE_REPORT_QUERY: TypedDocumentNode<
  AdminPremiumAdReportQuery,
  AdminPremiumAdReportQueryVariables
> = gql`
  query AdminPremiumAdReport($input: FeeReportInput) {
    premiumAdFeeReport(input: $input) {
      totalFees
      items {
        paymentId
        listingId
        listingName
        providerName
        providerPhone
        status
        fee
        createdAt
        featuredStartsAt
        featuredEndsAt
      }
      meta {
        total
        page
        limit
      }
    }
  }
`;
