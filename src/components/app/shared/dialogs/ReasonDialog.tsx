import { FormAreaInput } from "@/components/app/shared/forms/FormAreaInput";
import { useDict } from "@/hooks/useDict";
import type { LucideIcon } from "lucide-react";
import { useState, type ReactNode } from "react";
import { AppDialog } from "./AppDialog";
import { DialogActions } from "./DialogActions";
import type { DialogTone } from "./dialogTone";
import { useDialogAction } from "./useDialogAction";

/**
 * UI-8: a confirm dialog that asks for a reason. A missing required reason
 * shows an inline error and keeps the dialog open.
 */
export const ReasonDialog = ({
  isOpen,
  onClose,
  onConfirm,
  tone = "danger",
  icon,
  title,
  description,
  reasonLabel,
  reasonPlaceholder,
  required = true,
  confirmLabel,
  cancelLabel,
  busy,
  autoClose = true,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (reason: string) => boolean | void | Promise<boolean | void>;
  tone?: DialogTone;
  icon?: LucideIcon;
  title: ReactNode;
  description?: ReactNode;
  reasonLabel: string;
  reasonPlaceholder: string;
  required?: boolean;
  confirmLabel?: string;
  cancelLabel?: string;
  busy?: boolean;
  /**
   * false: the caller closes the dialog itself (legacy modals whose hooks
   * close on success).
   */
  autoClose?: boolean;
}) => {
  const dict = useDict();
  const [reason, setReason] = useState("");
  const [error, setError] = useState<string>();
  // Start empty every time it opens, also when the caller closes it.
  const [wasOpen, setWasOpen] = useState(isOpen);
  if (wasOpen !== isOpen) {
    setWasOpen(isOpen);
    if (!isOpen) {
      setReason("");
      setError(undefined);
    }
  }
  const close = () => {
    setReason("");
    setError(undefined);
    onClose();
  };
  const { run, isBusy } = useDialogAction(close, busy, autoClose);

  const submit = () => {
    const value = reason.trim();
    if (required && !value) {
      setError(dict.common.validation.reason_required);
      return;
    }
    void run(() => onConfirm(value));
  };

  return (
    <AppDialog
      isOpen={isOpen}
      onClose={close}
      tone={tone}
      icon={icon}
      title={title}
      description={description}
      isBusy={isBusy}
      actions={
        <DialogActions
          tone={tone}
          confirmLabel={confirmLabel}
          cancelLabel={cancelLabel}
          onConfirm={submit}
          onCancel={close}
          isBusy={isBusy}
        />
      }
    >
      <FormAreaInput
        label={reasonLabel}
        placeholder={reasonPlaceholder}
        value={reason}
        onChange={(value) => {
          setReason(value);
          if (error && value.trim()) setError(undefined);
        }}
        isOptional={!required}
        errorMessage={error}
        minRows={4}
      />
    </AppDialog>
  );
};
