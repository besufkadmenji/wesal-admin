import { Button } from "@heroui/react";
import { CircleCheck } from "lucide-react";
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { AppDialog } from "./AppDialog";
import { DIALOG_BUTTON, DIALOG_CONFIRM } from "./dialogTone";

/** UI-8: the one "done" dialog (created, approved, sent…). */
export const SuccessDialog = ({
  isOpen,
  onClose,
  title,
  message,
  actionLabel,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: ReactNode;
  message?: ReactNode;
  actionLabel?: string;
}) => (
  <AppDialog
    isOpen={isOpen}
    onClose={onClose}
    tone="success"
    icon={CircleCheck}
    title={title}
    description={message}
    actions={
      actionLabel ? (
        <Button
          className={twMerge(
            DIALOG_BUTTON,
            DIALOG_CONFIRM.success,
            "col-span-2 sm:min-w-36",
          )}
          onPress={onClose}
        >
          {actionLabel}
        </Button>
      ) : undefined
    }
  />
);
