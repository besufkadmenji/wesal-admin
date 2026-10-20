import { ReasonDialog } from "@/components/app/shared/dialogs/ReasonDialog";
import { useDict } from "@/hooks/useDict";
import { FileX2 } from "lucide-react";
import { useSignSignature } from "./useSignSignature";

/** S4-58: reject a termination request with a reason the provider sees. */
export const RejectTerminationDialog = ({
  providerId,
  isOpen,
  onClose,
}: {
  providerId: string;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const dict = useDict();
  const copy = dict.contract.terminationRequest;
  const { rejectTermination, busy } = useSignSignature();
  return (
    <ReasonDialog
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={(reason) => rejectTermination(providerId, reason)}
      busy={busy}
      tone="primary"
      icon={FileX2}
      title={copy.rejectTitle}
      description={copy.rejectMessage}
      reasonLabel={dict.common.dialogs.reason}
      reasonPlaceholder={copy.rejectPlaceholder}
      confirmLabel={copy.reject}
    />
  );
};
