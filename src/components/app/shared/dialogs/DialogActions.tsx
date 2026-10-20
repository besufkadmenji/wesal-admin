import { useDict } from "@/hooks/useDict";
import { Button } from "@heroui/react";
import { twMerge } from "tailwind-merge";
import {
  DIALOG_BUTTON,
  DIALOG_CANCEL,
  DIALOG_CONFIRM,
  type DialogTone,
} from "./dialogTone";

/** UI-8: confirm (start side) and cancel (end side) for every dialog. */
export const DialogActions = ({
  tone,
  confirmLabel,
  cancelLabel,
  onConfirm,
  onCancel,
  isBusy,
  confirmType = "button",
}: {
  tone: DialogTone;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onCancel: () => void;
  isBusy: boolean;
  confirmType?: "button" | "submit";
}) => {
  const dict = useDict();
  return (
    <>
      <Button
        type={confirmType}
        className={twMerge(DIALOG_BUTTON, DIALOG_CONFIRM[tone], "sm:min-w-36")}
        onPress={onConfirm}
        isLoading={isBusy}
        isDisabled={isBusy}
      >
        {confirmLabel ?? dict.common.actions.confirm}
      </Button>
      <Button
        className={twMerge(DIALOG_BUTTON, DIALOG_CANCEL, "sm:min-w-28")}
        onPress={onCancel}
        isDisabled={isBusy}
      >
        {cancelLabel ?? dict.common.actions.cancel}
      </Button>
    </>
  );
};
