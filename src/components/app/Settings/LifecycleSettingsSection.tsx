"use client";
import { FieldsSkeleton } from "@/components/app/shared/states/FieldsSkeleton";

import { FormSection } from "@/components/app/shared/forms/AppForm";
import { FormInput } from "@/components/app/shared/forms/FormInput";
import { SettingService } from "@/services/setting.service";
import { showErrorMessage, showSuccessMessage } from "@/utils/show.message";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Switch } from "@heroui/react";
import { useState } from "react";
import { useDict } from "@/hooks/useDict";

type LifecycleSettings = {
  vatRate: number;
  vatEnabled: boolean;
  contractAcceptanceWindowDays: number;
  contractAcceptanceWindowEnabled: boolean;
  completionConfirmationGraceHours: number;
  premiumAdFee: number;
  premiumAdDurationDays: number;
  premiumAdEnabled: boolean;
};

export const LifecycleSettingsSection = () => {
  const copy = useDict().settings_page.lifecycle;
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ["setting"],
    queryFn: SettingService.getSetting,
  });
  const [overrides, setOverrides] = useState<Partial<LifecycleSettings>>({});
  const form: LifecycleSettings | null = query.data
    ? {
        vatRate: query.data.vatRate,
        vatEnabled: query.data.vatEnabled,
        contractAcceptanceWindowDays: query.data.contractAcceptanceWindowDays,
        contractAcceptanceWindowEnabled:
          query.data.contractAcceptanceWindowEnabled,
        completionConfirmationGraceHours:
          query.data.completionConfirmationGraceHours,
        premiumAdFee: query.data.premiumAdFee,
        premiumAdDurationDays: query.data.premiumAdDurationDays,
        premiumAdEnabled: query.data.premiumAdEnabled,
        ...overrides,
      }
    : null;
  const save = useMutation({
    mutationFn: () => SettingService.setSetting(form ?? {}),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["setting"] });
      showSuccessMessage(copy.saved);
    },
    onError: (error) => showErrorMessage(error.message),
  });
  const setNumber = (key: keyof LifecycleSettings, value: string) => {
    setOverrides((current) => ({ ...current, [key]: Number(value) }));
  };

  if (!form) {
    return (
      <FormSection title={copy.title}>
        <FieldsSkeleton />
      </FormSection>
    );
  }
  return (
    <FormSection title={copy.title}>
      <div className="grid gap-4 md:grid-cols-2">
        <FormInput
          label={copy.vat_rate}
          placeholder={copy.vat_rate_placeholder}
          type="number"
          value={String(form.vatRate)}
          onChange={(value) => setNumber("vatRate", value)}
        />
        <Switch
          isSelected={form.vatEnabled}
          onValueChange={(vatEnabled) =>
            setOverrides((current) => ({ ...current, vatEnabled }))
          }
        >
          {copy.vat_enabled}
        </Switch>
        <FormInput
          label={copy.acceptance_window}
          placeholder={copy.days}
          type="number"
          value={String(form.contractAcceptanceWindowDays)}
          onChange={(value) => setNumber("contractAcceptanceWindowDays", value)}
        />
        <Switch
          isSelected={form.contractAcceptanceWindowEnabled}
          onValueChange={(contractAcceptanceWindowEnabled) =>
            setOverrides((current) => ({
              ...current,
              contractAcceptanceWindowEnabled,
            }))
          }
        >
          {copy.acceptance_enabled}
        </Switch>
        <FormInput
          label={copy.confirmation_grace}
          placeholder={copy.hours}
          type="number"
          value={String(form.completionConfirmationGraceHours)}
          onChange={(value) =>
            setNumber("completionConfirmationGraceHours", value)
          }
        />
        <FormInput
          label={copy.premium_fee}
          placeholder={copy.fee}
          type="number"
          value={String(form.premiumAdFee)}
          onChange={(value) => setNumber("premiumAdFee", value)}
        />
        <FormInput
          label={copy.premium_duration}
          placeholder={copy.days}
          type="number"
          value={String(form.premiumAdDurationDays)}
          onChange={(value) => setNumber("premiumAdDurationDays", value)}
        />
        <Switch
          isSelected={form.premiumAdEnabled}
          onValueChange={(premiumAdEnabled) =>
            setOverrides((current) => ({ ...current, premiumAdEnabled }))
          }
        >
          {copy.premium_enabled}
        </Switch>
        <Button
          color="primary"
          isLoading={save.isPending}
          onPress={() => save.mutate()}
          className="md:col-span-2"
        >
          {copy.save}
        </Button>
      </div>
    </FormSection>
  );
};
