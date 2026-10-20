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
  ["sellerLegalNameAr", "legal_name_ar", "rtl"],
  ["sellerLegalNameEn", "legal_name_en", "ltr"],
  ["sellerVatNumber", "vat_number", "ltr"],
  ["sellerCrNumber", "cr_number", "ltr"],
  ["sellerAddress", "address", undefined],
] as const;

type SellerKey = (typeof FIELDS)[number][0];

/** S4-37: seller identity printed on internal tax invoices. */
export const InvoiceSellerSection = () => {
  const dict = useDict();
  const labels = dict.invoice_seller_settings;
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ["setting"],
    queryFn: SettingService.getSetting,
  });
  const [overrides, setOverrides] = useState<
    Partial<Record<SellerKey, string>>
  >({});
  const value = (key: SellerKey) => overrides[key] ?? query.data?.[key] ?? "";
  const save = useMutation({
    mutationFn: () =>
      SettingService.setSetting(
        Object.fromEntries(
          FIELDS.map(([key]) => [key, value(key).trim() || null]),
        ),
      ),
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
          {FIELDS.map(([key, label, dir]) => (
            <FormInput
              key={key}
              label={labels[label]}
              placeholder={labels[label]}
              dir={dir}
              value={value(key)}
              onChange={(next) =>
                setOverrides((current) => ({ ...current, [key]: next }))
              }
            />
          ))}
          <Button
            color="primary"
            isLoading={save.isPending}
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
