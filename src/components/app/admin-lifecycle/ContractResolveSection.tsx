"use client";

import { FormInput } from "@/components/app/shared/forms/FormInput";
import { ContractResolution } from "@/gql/graphql";
import { Button, Select, SelectItem } from "@heroui/react";
import { useState } from "react";
import { lifecycleEnumLabel } from "./lifecycle-enum-labels";
import { contractDetailCopy } from "./contract-detail-helpers";

export const ContractResolveSection = ({
  disputed,
  lang,
  isPending,
  onResolve,
}: {
  disputed: boolean;
  lang: string;
  isPending: boolean;
  onResolve: (input: { resolution: ContractResolution; reason: string }) => void;
}) => {
  const copy = contractDetailCopy(lang);
  const [resolution, setResolution] = useState<ContractResolution>(
    disputed
      ? ContractResolution.RefundCustomer
      : ContractResolution.Complete,
  );
  const [reason, setReason] = useState("");
  const selected =
    disputed &&
    [ContractResolution.Complete, ContractResolution.Cancel].includes(
      resolution,
    )
      ? ContractResolution.RefundCustomer
      : !disputed &&
          [
            ContractResolution.RefundCustomer,
            ContractResolution.ReleaseProvider,
          ].includes(resolution)
        ? ContractResolution.Complete
        : resolution;

  return (
    <section className="grid gap-4 rounded-2xl bg-white p-6 dark:bg-black">
      <h2 className="text-lg font-bold">{copy.resolve}</h2>
      <Select
        label={copy.resolveOutcome}
        selectedKeys={[selected]}
        onSelectionChange={(keys) =>
          setResolution(String(Array.from(keys)[0]) as ContractResolution)
        }
      >
        {disputed ? (
          <>
            <SelectItem key={ContractResolution.RefundCustomer}>
              {lifecycleEnumLabel("REFUND_CUSTOMER", lang)}
            </SelectItem>
            <SelectItem key={ContractResolution.ReleaseProvider}>
              {lifecycleEnumLabel("RELEASE_PROVIDER", lang)}
            </SelectItem>
          </>
        ) : (
          <>
            <SelectItem key={ContractResolution.Complete}>
              {lifecycleEnumLabel("COMPLETE", lang)}
            </SelectItem>
            <SelectItem key={ContractResolution.Cancel}>
              {lifecycleEnumLabel("CANCEL", lang)}
            </SelectItem>
          </>
        )}
      </Select>
      <FormInput
        label={copy.resolveReason}
        placeholder={copy.resolveReasonPlaceholder}
        value={reason}
        onChange={setReason}
      />
      <Button
        color="primary"
        isLoading={isPending}
        isDisabled={reason.trim().length < 3}
        onPress={() => onResolve({ resolution: selected, reason })}
      >
        {copy.resolveSubmit}
      </Button>
    </section>
  );
};
