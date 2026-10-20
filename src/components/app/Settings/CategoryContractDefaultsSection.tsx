"use client";
import { FieldsSkeleton } from "@/components/app/shared/states/FieldsSkeleton";

import { FormSection } from "@/components/app/shared/forms/AppForm";
import { FormInput } from "@/components/app/shared/forms/FormInput";
import { useDict } from "@/hooks/useDict";
import { SettingService } from "@/services/setting.service";
import { showErrorMessage, showSuccessMessage } from "@/utils/show.message";
import { Button } from "@heroui/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const FIELDS = [
  ["defaultCommissionPercent", "commission_percent", 100],
  ["defaultMinCommissionAmount", "min_commission_amount"],
  ["defaultDepositPercent", "deposit_percent", 100],
  ["defaultCustomerConversationFee", "customer_conversation_fee"],
  ["defaultProviderConversationFee", "provider_conversation_fee"],
  ["defaultMaxExecutionHours", "max_execution_hours"],
  ["defaultMaxTerminationHours", "max_termination_hours"],
] as const;

type DefaultKey = (typeof FIELDS)[number][0];

/** BRD 4.3.17: values new categories start with (BRD 4.3.8). */
export const CategoryContractDefaultsSection = () => {
  const dict = useDict();
  const labels = dict.category_contract_settings;
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ["setting"],
    queryFn: SettingService.getSetting,
  });
  const [overrides, setOverrides] = useState<
    Partial<Record<DefaultKey, number>>
  >({});
  const value = (key: DefaultKey) => overrides[key] ?? query.data?.[key] ?? 0;
  const invalid = FIELDS.some(
    ([key, , max]) =>
      !Number.isInteger(value(key)) ||
      value(key) < 0 ||
      (max !== undefined && value(key) > max),
  );
  const save = useMutation({
    mutationFn: () =>
      SettingService.setSetting(
        Object.fromEntries(FIELDS.map(([key]) => [key, value(key)])),
      ),
    onSuccess: async () => {
      setOverrides({});
      await queryClient.invalidateQueries({ queryKey: ["setting"] });
      showSuccessMessage(labels.settings.saved);
    },
    onError: (error) => showErrorMessage(error.message),
  });

  return (
    <FormSection title={labels.settings.title}>
      {!query.data ? (
        <FieldsSkeleton />
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          <p className="text-default-500 text-sm md:col-span-2">
            {labels.settings.hint}
          </p>
          {FIELDS.map(([key, label, max]) => (
            <FormInput
              key={key}
              label={labels[label]}
              placeholder={labels[label]}
              type="number"
              value={String(value(key))}
              errorMessage={
                max !== undefined && value(key) > max
                  ? labels.validation.percent_max
                  : undefined
              }
              onChange={(next) =>
                setOverrides((current) => ({
                  ...current,
                  [key]:
                    next === "" ? 0 : Math.max(0, Math.trunc(Number(next))),
                }))
              }
            />
          ))}
          <Button
            color="primary"
            isLoading={save.isPending}
            isDisabled={invalid}
            onPress={() => save.mutate()}
            className="md:col-span-2"
          >
            {labels.settings.save}
          </Button>
        </div>
      )}
    </FormSection>
  );
};
