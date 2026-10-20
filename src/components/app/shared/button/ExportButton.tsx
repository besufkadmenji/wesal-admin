"use client";

import { useDict } from "@/hooks/useDict";
import { useExport } from "@/hooks/useExport";
import { ExportModel } from "@/types/export.models";
import { Button } from "@heroui/react";
import { Download } from "lucide-react";
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
      startContent={
        <Download aria-hidden className="size-4.5" strokeWidth={1.75} />
      }
      className="text-primary bg-accent-soft h-10 rounded-lg px-3.5 text-sm leading-5 font-semibold tracking-tight dark:text-white"
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
