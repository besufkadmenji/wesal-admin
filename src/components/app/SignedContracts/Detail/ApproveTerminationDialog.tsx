import { ConfirmDialog } from "@/components/app/shared/dialogs/ConfirmDialog";
import { useDict } from "@/hooks/useDict";
import { TriangleAlert } from "lucide-react";
import { useSignSignature } from "./useSignSignature";

/** S4-58: confirm approving a termination request (the account is deleted). */
export const ApproveTerminationDialog = ({
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
  const { approveTermination, busy } = useSignSignature();
  return (
    <ConfirmDialog
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={() => approveTermination(providerId)}
      busy={busy}
      tone="danger"
      icon={TriangleAlert}
      title={copy.approveTitle}
      description={copy.approveMessage}
      confirmLabel={copy.approve}
    />
  );
};
