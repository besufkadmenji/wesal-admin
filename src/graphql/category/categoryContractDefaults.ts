import { CategoryContractDefaultsQuery } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const CATEGORY_CONTRACT_DEFAULTS_QUERY: TypedDocumentNode<CategoryContractDefaultsQuery> = gql`
  query categoryContractDefaults {
    categoryContractDefaults {
      commissionPercent
      minCommissionAmount
      depositPercent
      maxExecutionHours
      maxTerminationHours
      customerConversationFee
      providerConversationFee
      contractDocumentText
      undertakingTextAr
      undertakingTextEn
      refundPolicyAr
      refundPolicyEn
    }
  }
`;
