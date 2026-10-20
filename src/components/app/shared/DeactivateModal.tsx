import { useDict } from "@/hooks/useDict";
import { PowerOff } from "lucide-react";
import { useQueryState } from "nuqs";
import { ConfirmDialog } from "./dialogs/ConfirmDialog";
import { ReasonDialog } from "./dialogs/ReasonDialog";

interface DeactivateModalProps {
  queryParamName: string;
  onConfirm: (id: string, reason: string) => void;
  busy: boolean;
  title?: string;
  description?: string;
  showReason?: boolean;
  reasonLabel?: string;
  reasonPlaceholder?: string;
}

/** Opens while `?<queryParamName>=<id>` is set; the caller closes it. */
export const DeactivateModal = ({
  queryParamName,
  onConfirm,
  busy,
  title,
  description,
  showReason = false,
  reasonLabel,
  reasonPlaceholder,
}: DeactivateModalProps) => {
  const [id, setId] = useQueryState(queryParamName);
  const dict = useDict();
  const common = {
    isOpen: !!id,
    onClose: () => setId(null),
    busy,
    autoClose: false,
    tone: "danger" as const,
    icon: PowerOff,
    title: title || dict.common.dialogs.deactivate_title,
    description: description || dict.common.dialogs.deactivate_message,
    confirmLabel: dict.common.actions.deactivate,
  };

  return showReason ? (
    <ReasonDialog
      {...common}
      reasonLabel={reasonLabel || dict.common.dialogs.reason}
      reasonPlaceholder={
        reasonPlaceholder || dict.common.dialogs.reason_placeholder
      }
      onConfirm={(reason) => {
        if (id) onConfirm(id, reason);
      }}
    />
  ) : (
    <ConfirmDialog
      {...common}
      onConfirm={() => {
        if (id) onConfirm(id, "");
      }}
    />
  );
};
