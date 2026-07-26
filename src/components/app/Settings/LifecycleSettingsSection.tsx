"use client";

import { FormSection } from "@/components/app/shared/forms/AppForm";
import { FormInput } from "@/components/app/shared/forms/FormInput";
import { SettingService } from "@/services/setting.service";
import { showErrorMessage, showSuccessMessage } from "@/utils/show.message";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Spinner, Switch } from "@heroui/react";
import { useState } from "react";

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
        contractAcceptanceWindowDays:
          query.data.contractAcceptanceWindowDays,
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
      showSuccessMessage("Lifecycle settings saved");
    },
    onError: (error) => showErrorMessage(error.message),
  });
  const setNumber = (key: keyof LifecycleSettings, value: string) => {
    setOverrides((current) => ({ ...current, [key]: Number(value) }));
  };

  if (!form) {
    return (
      <FormSection title="Contract and fee settings">
        <Spinner />
      </FormSection>
    );
  }
  return (
    <FormSection title="Contract and fee settings">
      <div className="grid gap-4 md:grid-cols-2">
        <FormInput
          label="VAT rate (%)"
          placeholder="VAT rate"
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
          VAT enabled
        </Switch>
        <FormInput
          label="Acceptance window (days)"
          placeholder="Days"
          type="number"
          value={String(form.contractAcceptanceWindowDays)}
          onChange={(value) =>
            setNumber("contractAcceptanceWindowDays", value)
          }
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
          Acceptance deadline enabled
        </Switch>
        <FormInput
          label="Customer confirmation grace (hours)"
          placeholder="Hours"
          type="number"
          value={String(form.completionConfirmationGraceHours)}
          onChange={(value) =>
            setNumber("completionConfirmationGraceHours", value)
          }
        />
        <FormInput
          label="Premium-ad fee"
          placeholder="Fee"
          type="number"
          value={String(form.premiumAdFee)}
          onChange={(value) => setNumber("premiumAdFee", value)}
        />
        <FormInput
          label="Premium-ad duration (days)"
          placeholder="Days"
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
          Premium ads enabled
        </Switch>
        <Button
          color="primary"
          isLoading={save.isPending}
          onPress={() => save.mutate()}
          className="md:col-span-2"
        >
          Save contract and fee settings
        </Button>
      </div>
    </FormSection>
  );
};
