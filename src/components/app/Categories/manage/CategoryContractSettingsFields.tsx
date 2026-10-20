"use client";

import { FormAreaInput } from "@/components/app/shared/forms/FormAreaInput";
import { FormInput } from "@/components/app/shared/forms/FormInput";
import { CreateCategoryInput } from "@/gql/graphql";
import { useDict } from "@/hooks/useDict";
import { Switch } from "@heroui/react";
import { CONTRACT_VALUE_FIELDS, renderUndertaking } from "./contractControls";
import { ContractTextField } from "./ContractTextField";

export const CategoryContractSettingsFields = ({
  form,
  setForm,
  errors = {},
  clearError,
  readOnly = false,
}: {
  form: Partial<CreateCategoryInput>;
  setForm?: (form: Partial<CreateCategoryInput>) => void;
  errors?: Record<string, string>;
  clearError?: (field: string) => void;
  readOnly?: boolean;
}) => {
  const dict = useDict();
  const labels = dict.category_contract_settings;
  const update = (value: Partial<CreateCategoryInput>) => {
    if (readOnly || !setForm) return;
    setForm(value);
    Object.keys(value).forEach((key) => clearError?.(key));
  };
  const commission = form.commissionEnabled ? form.commissionPercent : 0;
  const minimum = form.minCommissionEnabled ? form.minCommissionAmount : 0;

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {CONTRACT_VALUE_FIELDS.map(({ key, flag, label }) => (
        <div
          key={key}
          className="border-default-200 grid gap-2 rounded-xl border p-4"
        >
          <FormInput
            label={labels[label] as string}
            placeholder={labels[label] as string}
            type="number"
            value={String(form[key] ?? "")}
            readOnly={readOnly}
            errorMessage={errors[key]}
            onChange={(value) =>
              update({
                [key]: value === "" ? null : Math.trunc(Number(value)),
              })
            }
          />
          <Switch
            isSelected={Boolean(form[flag])}
            isReadOnly={readOnly}
            onValueChange={(enabled) => {
              update({ [flag]: enabled });
              clearError?.(key);
            }}
          >
            {form[flag] ? labels.enabled : labels.disabled}
          </Switch>
        </div>
      ))}
      <ContractTextField
        title={labels.contract_document}
        enabled={Boolean(form.contractDocumentEnabled)}
        onEnabledChange={(contractDocumentEnabled) =>
          update({ contractDocumentEnabled })
        }
        readOnly={readOnly}
      >
        <FormAreaInput
          label={labels.contract_document}
          placeholder={labels.contract_document}
          value={form.contractDocumentText ?? ""}
          readOnly={readOnly}
          errorMessage={errors.contractDocumentText}
          onChange={(contractDocumentText) => update({ contractDocumentText })}
        />
      </ContractTextField>
      <ContractTextField
        title={labels.undertaking}
        enabled={Boolean(form.undertakingEnabled)}
        onEnabledChange={(undertakingEnabled) => update({ undertakingEnabled })}
        readOnly={readOnly}
        hint={
          <p className="flex flex-wrap items-center gap-2">
            {labels.placeholder_hint}
            {["{commission}", "{minimum}"].map((token) => (
              <code
                key={token}
                dir="ltr"
                className="rounded bg-default-100 px-1.5 py-0.5 text-default-700"
              >
                {token}
              </code>
            ))}
          </p>
        }
      >
        <div className="grid gap-4 md:grid-cols-2">
          {(
            [
              ["undertakingTextAr", labels.undertaking_ar, "rtl"],
              ["undertakingTextEn", labels.undertaking_en, "ltr"],
            ] as const
          ).map(([key, label, dir]) => (
            <div key={key} className="grid gap-2">
              <FormAreaInput
                label={label}
                placeholder={label}
                dir={dir}
                value={form[key] ?? ""}
                readOnly={readOnly}
                errorMessage={errors[key]}
                onChange={(value) => update({ [key]: value })}
              />
              {form[key] ? (
                <div
                  dir={dir}
                  className="bg-default-100 text-default-600 rounded-lg p-3 text-sm"
                >
                  <p className="mb-1 font-semibold">{labels.preview}</p>
                  <p className="whitespace-pre-line">
                    {renderUndertaking(form[key] ?? "", commission, minimum)}
                  </p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </ContractTextField>
      <ContractTextField
        title={labels.refund_policy}
        enabled={Boolean(form.refundPolicyEnabled)}
        onEnabledChange={(refundPolicyEnabled) =>
          update({ refundPolicyEnabled })
        }
        readOnly={readOnly}
      >
        <div className="grid gap-4 md:grid-cols-2">
          {(
            [
              ["refundPolicyAr", labels.refund_policy_ar, "rtl"],
              ["refundPolicyEn", labels.refund_policy_en, "ltr"],
            ] as const
          ).map(([key, label, dir]) => (
            <FormAreaInput
              key={key}
              label={label}
              placeholder={label}
              dir={dir}
              value={form[key] ?? ""}
              readOnly={readOnly}
              errorMessage={errors[key]}
              onChange={(value) => update({ [key]: value })}
            />
          ))}
        </div>
      </ContractTextField>
    </div>
  );
};
