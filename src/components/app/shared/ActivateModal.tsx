import { useDict } from "@/hooks/useDict";
import { Power } from "lucide-react";
import { useQueryState } from "nuqs";
import { ConfirmDialog } from "./dialogs/ConfirmDialog";

interface ActivateModalProps {
  queryParamName: string;
  onConfirm: (id: string) => void;
  busy: boolean;
  title?: string;
  description?: string;
}

/** Opens while `?<queryParamName>=<id>` is set; the caller closes it. */
export const ActivateModal = ({
  queryParamName,
  onConfirm,
  busy,
  title,
  description,
}: ActivateModalProps) => {
  const [id, setId] = useQueryState(queryParamName);
  const dict = useDict();

  return (
    <ConfirmDialog
      isOpen={!!id}
      onClose={() => setId(null)}
      onConfirm={() => {
        if (id) onConfirm(id);
      }}
      busy={busy}
      autoClose={false}
      tone="success"
      icon={Power}
      title={title || dict.common.dialogs.activate_title}
      description={description || dict.common.dialogs.activate_message}
      confirmLabel={dict.common.actions.activate}
    />
  );
};
