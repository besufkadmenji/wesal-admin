import { useState } from "react";

type Result = boolean | void | undefined;

/**
 * UI-8: runs a dialog's action; the dialog closes only when it resolves to
 * anything but `false` and doesn't throw (errors are shown by the caller).
 */
export const useDialogAction = (
  onClose: () => void,
  busy = false,
  autoClose = true,
) => {
  const [running, setRunning] = useState(false);
  const run = async (action: () => Result | Promise<Result>) => {
    setRunning(true);
    try {
      const result = await action();
      if (autoClose && result !== false) onClose();
    } catch {
      // Keep the dialog open; the action reports its own error.
    } finally {
      setRunning(false);
    }
  };
  return { run, isBusy: running || busy };
};
