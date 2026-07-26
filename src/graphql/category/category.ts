import { CategoryQuery, CategoryQueryVariables } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const CATEGORY_QUERY: TypedDocumentNode<
  CategoryQuery,
  CategoryQueryVariables
> = gql`
  query category($categoryId: String!) {
    category(id: $categoryId) {
      createdAt
      descriptionAr
      descriptionEn
      id
      nameAr
      nameEn
      rulesEn
      rulesAr
      status
      image
      updatedAt
      publicId
      commissionPercent
      commissionEnabled
      minCommissionAmount
      minCommissionEnabled
      depositPercent
      depositEnabled
      customerConversationFee
      customerConversationFeeEnabled
      providerConversationFee
      providerConversationFeeEnabled
      maxCompletionDays
      maxCompletionDaysEnabled
      maxTerminationDays
      maxTerminationDaysEnabled
      contractDocumentEnabled
      contractDocumentText
      undertakingTextAr
      undertakingTextEn
      undertakingEnabled
      refundPolicyAr
      refundPolicyEn
      refundPolicyEnabled
    }
  }
`;
