import { ReasonDialog } from "@/components/app/shared/dialogs/ReasonDialog";
import { useDict } from "@/hooks/useDict";
import { FileX2 } from "lucide-react";
import { useQueryState } from "nuqs";
import { useSignSignature } from "./useSignSignature";

/** The admin's own e-contract termination (deactivates the provider). */
export const CancelContract = ({ userId }: { userId: string }) => {
  const { terminateContract, busy } = useSignSignature();
  const dict = useDict();
  const [open, setOpen] = useQueryState("cancelContract", {
    defaultValue: "false",
  });
  const copy = dict.contract.cancelReason;

  return (
    <ReasonDialog
      isOpen={open === "true"}
      onClose={() => setOpen(null)}
      onConfirm={(reason) => terminateContract(userId, reason)}
      busy={busy}
      tone="danger"
      icon={FileX2}
      title={copy.title}
      description={copy.subtitle}
      reasonLabel={dict.common.dialogs.reason}
      reasonPlaceholder={copy.placeholder}
      confirmLabel={copy.send}
      cancelLabel={copy.cancel}
    />
  );
};
