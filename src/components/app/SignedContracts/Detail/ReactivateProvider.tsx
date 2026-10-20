import { ConfirmDialog } from "@/components/app/shared/dialogs/ConfirmDialog";
import { useDict } from "@/hooks/useDict";
import { RotateCcw } from "lucide-react";
import { useQueryState } from "nuqs";
import { useSignSignature } from "./useSignSignature";

export const ReactivateProvider = ({ providerId }: { providerId: string }) => {
  const { reactivateProvider, busy } = useSignSignature();
  const dict = useDict();
  const [open, setOpen] = useQueryState("reactivateProvider", {
    defaultValue: "false",
  });
  const copy = dict.contract.reactivateReason;

  return (
    <ConfirmDialog
      isOpen={open === "true"}
      onClose={() => setOpen(null)}
      onConfirm={() => reactivateProvider(providerId)}
      busy={busy}
      tone="success"
      icon={RotateCcw}
      title={copy.title}
      description={copy.subtitle}
      confirmLabel={copy.confirm}
      cancelLabel={copy.cancel}
    />
  );
};
