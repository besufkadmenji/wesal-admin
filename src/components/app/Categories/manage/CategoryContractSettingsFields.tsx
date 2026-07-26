"use client";

import { FormAreaInput } from "@/components/app/shared/forms/FormAreaInput";
import { FormInput } from "@/components/app/shared/forms/FormInput";
import { CreateCategoryInput } from "@/gql/graphql";
import { Switch } from "@heroui/react";

type NumericKey =
  | "commissionPercent"
  | "minCommissionAmount"
  | "depositPercent"
  | "customerConversationFee"
  | "providerConversationFee"
  | "maxCompletionDays"
  | "maxTerminationDays";

export const CategoryContractSettingsFields = ({
  form,
  setForm,
}: {
  form: CreateCategoryInput;
  setForm: (form: Partial<CreateCategoryInput>) => void;
}) => {
  const numeric = (key: NumericKey, value: string) =>
    setForm({ [key]: value === "" ? null : Number(value) });
  const fields: Array<[string, NumericKey, keyof CreateCategoryInput]> = [
    ["Commission (%)", "commissionPercent", "commissionEnabled"],
    ["Minimum commission", "minCommissionAmount", "minCommissionEnabled"],
    ["Deposit (%)", "depositPercent", "depositEnabled"],
    ["Customer chat fee", "customerConversationFee", "customerConversationFeeEnabled"],
    ["Provider chat fee", "providerConversationFee", "providerConversationFeeEnabled"],
    ["Completion limit (days)", "maxCompletionDays", "maxCompletionDaysEnabled"],
    ["Termination limit (days)", "maxTerminationDays", "maxTerminationDaysEnabled"],
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {fields.map(([label, valueKey, enabledKey]) => (
        <div key={valueKey} className="grid gap-2 rounded-xl border border-default-200 p-4">
          <FormInput
            label={label}
            placeholder={label}
            type="number"
            value={String(form[valueKey] ?? "")}
            onChange={(value) => numeric(valueKey, value)}
          />
          <Switch
            isSelected={Boolean(form[enabledKey])}
            onValueChange={(enabled) => setForm({ [enabledKey]: enabled })}
          >
            Enabled
          </Switch>
        </div>
      ))}
      <div className="grid gap-2 rounded-xl border border-default-200 p-4 md:col-span-2">
        <Switch
          isSelected={Boolean(form.contractDocumentEnabled)}
          onValueChange={(contractDocumentEnabled) =>
            setForm({ contractDocumentEnabled })
          }
        >
          Contract document enabled
        </Switch>
        <FormAreaInput
          label="Contract document text"
          placeholder="Bilingual contract template text"
          value={form.contractDocumentText ?? ""}
          onChange={(contractDocumentText) => setForm({ contractDocumentText })}
        />
      </div>
      <Switch
        isSelected={Boolean(form.undertakingEnabled)}
        onValueChange={(undertakingEnabled) =>
          setForm({ undertakingEnabled })
        }
      >
        Undertaking text enabled
      </Switch>
      <Switch
        isSelected={Boolean(form.refundPolicyEnabled)}
        onValueChange={(refundPolicyEnabled) =>
          setForm({ refundPolicyEnabled })
        }
      >
        Refund policy enabled
      </Switch>
      {[
        ["Undertaking text (Arabic)", "undertakingTextAr"],
        ["Undertaking text (English)", "undertakingTextEn"],
        ["Refund policy (Arabic)", "refundPolicyAr"],
        ["Refund policy (English)", "refundPolicyEn"],
      ].map(([label, key]) => (
        <FormAreaInput
          key={key}
          label={label}
          placeholder={label}
          value={String(form[key as keyof CreateCategoryInput] ?? "")}
          onChange={(value) => setForm({ [key]: value })}
        />
      ))}
    </div>
  );
};
