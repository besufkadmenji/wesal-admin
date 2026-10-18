import { CreateCategoryInput } from "@/gql/graphql";
import type { Dictionary } from "@/config/i18n/types";

export type ContractValueKey =
  | "commissionPercent"
  | "minCommissionAmount"
  | "depositPercent"
  | "customerConversationFee"
  | "providerConversationFee"
  | "maxExecutionHours"
  | "maxTerminationHours";

export type ContractForm = Omit<Partial<CreateCategoryInput>, "image">;
type ContractKey = keyof ContractForm;

type LabelKey = keyof Dictionary["category_contract_settings"];

/** Mirrors the API rules (wesal-api src/category/contract-controls.ts). */
export const CONTRACT_VALUE_FIELDS: Array<{
  key: ContractValueKey;
  flag: ContractKey;
  label: LabelKey;
  min: number;
  max?: number;
}> = [
  {
    key: "commissionPercent",
    flag: "commissionEnabled",
    label: "commission_percent",
    min: 1,
    max: 100,
  },
  {
    key: "minCommissionAmount",
    flag: "minCommissionEnabled",
    label: "min_commission_amount",
    min: 0,
  },
  {
    key: "depositPercent",
    flag: "depositEnabled",
    label: "deposit_percent",
    min: 1,
    max: 100,
  },
  {
    key: "customerConversationFee",
    flag: "customerConversationFeeEnabled",
    label: "customer_conversation_fee",
    min: 1,
  },
  {
    key: "providerConversationFee",
    flag: "providerConversationFeeEnabled",
    label: "provider_conversation_fee",
    min: 1,
  },
  {
    key: "maxExecutionHours",
    flag: "maxExecutionHoursEnabled",
    label: "max_execution_hours",
    min: 1,
  },
  {
    key: "maxTerminationHours",
    flag: "maxTerminationHoursEnabled",
    label: "max_termination_hours",
    min: 1,
  },
];

export const CONTRACT_TEXT_FIELDS: Array<{
  flag: ContractKey;
  fields: ContractKey[];
}> = [
  { flag: "contractDocumentEnabled", fields: ["contractDocumentText"] },
  {
    flag: "undertakingEnabled",
    fields: ["undertakingTextAr", "undertakingTextEn"],
  },
  { flag: "refundPolicyEnabled", fields: ["refundPolicyAr", "refundPolicyEn"] },
];

export const contractControlErrors = (
  form: ContractForm,
  dict: Dictionary,
): Record<string, string> => {
  const messages = dict.category_contract_settings.validation;
  const errors: Record<string, string> = {};
  for (const { key, flag, min, max } of CONTRACT_VALUE_FIELDS) {
    if (!form[flag]) continue;
    const value = form[key];
    if (
      value === null ||
      value === undefined ||
      !Number.isInteger(value) ||
      value < min
    ) {
      errors[key] =
        min === 0 ? messages.min_commission_required : messages.value_required;
    } else if (max !== undefined && value > max) {
      errors[key] = messages.percent_max;
    }
  }
  for (const { flag, fields } of CONTRACT_TEXT_FIELDS) {
    if (!form[flag]) continue;
    for (const field of fields) {
      if (!String(form[field] ?? "").trim())
        errors[field] = messages.text_required;
    }
  }
  return errors;
};

/** Same filling the contract snapshot does with `{commission}` / `{minimum}`. */
export const renderUndertaking = (
  text: string,
  commissionPercent?: number | null,
  minimumAmount?: number | null,
) =>
  text
    .split("{commission}")
    .join(String(commissionPercent ?? 0))
    .split("{minimum}")
    .join(String(minimumAmount ?? 0));
