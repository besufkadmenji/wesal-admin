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
  ["tabbyMinAmount", "tabby_min"],
  ["tabbyMaxAmount", "tabby_max"],
  ["tamaraMinAmount", "tamara_min"],
  ["tamaraMaxAmount", "tamara_max"],
] as const;

type LimitKey = (typeof FIELDS)[number][0];

const toAmount = (text: string) =>
  text.trim() === "" ? null : Number(text.trim());

/**
 * S4-10: the contract amounts for which Tabby and Tamara are offered. Empty
 * means no bound; the API hides and refuses a method outside its bounds.
 */
export const InstallmentLimitsSection = () => {
  const dict = useDict();
  const labels = dict.installment_limits;
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ["setting"],
    queryFn: SettingService.getSetting,
  });
  const [overrides, setOverrides] = useState<Partial<Record<LimitKey, string>>>(
    {},
  );
  const value = (key: LimitKey) => {
    if (overrides[key] !== undefined) return overrides[key];
    const saved = query.data?.[key];
    return saved == null ? "" : String(saved);
  };
  const amounts = Object.fromEntries(
    FIELDS.map(([key]) => [key, toAmount(value(key))]),
  ) as Record<LimitKey, number | null>;
  const invalid = FIELDS.some(([key]) => {
    const amount = amounts[key];
    return amount !== null && (Number.isNaN(amount) || amount < 0);
  });
  const inverted = (min: number | null, max: number | null) =>
    min !== null && max !== null && min > max;
  const tabbyInverted = inverted(
    amounts.tabbyMinAmount,
    amounts.tabbyMaxAmount,
  );
  const tamaraInverted = inverted(
    amounts.tamaraMinAmount,
    amounts.tamaraMaxAmount,
  );

  const save = useMutation({
    mutationFn: () => SettingService.setSetting(amounts),
    onSuccess: async () => {
      setOverrides({});
      await queryClient.invalidateQueries({ queryKey: ["setting"] });
      showSuccessMessage(labels.saved);
    },
    onError: (error) => showErrorMessage(error.message),
  });

  return (
    <FormSection title={labels.title}>
      {!query.data ? (
        <FieldsSkeleton />
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          <p className="text-default-500 text-sm md:col-span-2">
            {labels.hint}
          </p>
          {FIELDS.map(([key, label]) => (
            <FormInput
              key={key}
              label={labels[label]}
              placeholder={labels.no_limit}
              type="number"
              dir="ltr"
              value={value(key)}
              onChange={(next) =>
                setOverrides((current) => ({ ...current, [key]: next }))
              }
              errorMessage={
                (key === "tabbyMinAmount" && tabbyInverted) ||
                (key === "tamaraMinAmount" && tamaraInverted)
                  ? labels.min_above_max
                  : undefined
              }
            />
          ))}
          <Button
            color="primary"
            isLoading={save.isPending}
            isDisabled={invalid || tabbyInverted || tamaraInverted}
            onPress={() => save.mutate()}
            className="md:col-span-2"
          >
            {labels.save}
          </Button>
        </div>
      )}
    </FormSection>
  );
};
