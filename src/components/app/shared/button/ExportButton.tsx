"use client";

import ExportIcon from "@/assets/icons/app/export.svg";
import { useDict } from "@/hooks/useDict";
import { useExport } from "@/hooks/useExport";
import { ExportModel } from "@/types/export.models";
import { Button } from "@heroui/react";
import { useState } from "react";

export const ExportButton = ({
  model,
  fields,
  onPress,
}: {
  model: ExportModel;
  fields?: string[];
  onPress?: () => void;
}) => {
  const dict = useDict();
  const { exportToCSV } = useExport();
  const [busy, setBusy] = useState(false);

  return (
    <Button
      startContent={<ExportIcon className="size-5" />}
      className="text-app-primary h-10 rounded-lg bg-[#5DD5C412] px-3.5 text-sm leading-5 font-semibold tracking-tight"
      onPress={async () => {
        if (onPress) {
          onPress();
          return;
        }
        setBusy(true);

        try {
          await exportToCSV(model, fields);
        } catch (error) {
          console.error("Export failed:", error);
        } finally {
          setBusy(false);
        }
      }}
      isLoading={busy}
      isDisabled={busy}
    >
      {dict.common.actions.export}
    </Button>
  );
};
