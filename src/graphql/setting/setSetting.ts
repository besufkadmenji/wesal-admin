import { SetSettingMutation, SetSettingMutationVariables } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const SET_SETTING_MUTATION: TypedDocumentNode<
  SetSettingMutation,
  SetSettingMutationVariables
> = gql`
  mutation setSetting($input: SettingInput!) {
    setSetting(input: $input) {
      aboutAr
      aboutEn
      email
      phones
      privacyPolicyAr
      privacyPolicyEn
      socialMediaLinks {
        link
        name
      }
      termsAr
      termsEn
      whatsappNumber
      rulesAr
      rulesEn
      platformManagerName
      platformManagerSignature
      defaultCommissionPercent
      defaultMinCommissionAmount
      defaultMaxExecutionHours
      defaultMaxTerminationHours
      defaultDepositPercent
      defaultCustomerConversationFee
      defaultProviderConversationFee
      sellerLegalNameAr
      sellerLegalNameEn
      sellerVatNumber
      sellerCrNumber
      sellerAddress
    }
  }
`;
