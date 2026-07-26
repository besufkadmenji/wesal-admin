import { CategoriesQuery, CategoriesQueryVariables } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const CATEGORIES_QUERY: TypedDocumentNode<
  CategoriesQuery,
  CategoriesQueryVariables
> = gql`
  query categories($input: CategoryPaginationInput) {
    categories(input: $input) {
      meta {
        hasNext
        hasPrevious
        limit
        page
        total
        totalPages
      }
      items {
        publicId
        createdAt
        descriptionAr
        descriptionEn
        id
        nameAr
        nameEn
        image
        status
        updatedAt
        rulesEn
        rulesAr
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
  }
`;
