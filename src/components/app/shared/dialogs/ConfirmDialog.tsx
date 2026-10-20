import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { AppDialog } from "./AppDialog";
import { DialogActions } from "./DialogActions";
import type { DialogTone } from "./dialogTone";
import { useDialogAction } from "./useDialogAction";

/** UI-8: a yes/no dialog. `onConfirm` returning false keeps it open. */
export const ConfirmDialog = ({
  isOpen,
  onClose,
  onConfirm,
  tone = "primary",
  icon,
  title,
  description,
  confirmLabel,
  cancelLabel,
  busy,
  autoClose = true,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => boolean | void | Promise<boolean | void>;
  tone?: DialogTone;
  icon?: LucideIcon;
  title: ReactNode;
  description?: ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  busy?: boolean;
  /**
   * false: the caller closes the dialog itself (legacy modals whose hooks
   * close on success).
   */
  autoClose?: boolean;
  children?: ReactNode;
}) => {
  const { run, isBusy } = useDialogAction(onClose, busy, autoClose);
  return (
    <AppDialog
      isOpen={isOpen}
      onClose={onClose}
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
          onConfirm={() => void run(onConfirm)}
          onCancel={onClose}
          isBusy={isBusy}
        />
      }
    >
      {children}
    </AppDialog>
  );
};
