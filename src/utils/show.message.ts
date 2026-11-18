import { addToast } from "@heroui/react";
import { localizeNetworkError } from "@/utils/network-error";
export const showErrorMessage = (message: string | Error) => {
  // Never show the browser's English "Failed to fetch" on an Arabic page.
  addToast({
    description: localizeNetworkError(
      message instanceof Error ? message.message : message,
    ),
    color: "danger",

    classNames: {
      description: "font-medium",
    },
  });
};

export const showSuccessMessage = (message: string, duration?: number) => {
  addToast({
    description: message,
    color: "success",
    classNames: {
      description: "font-medium",
    },
    timeout: duration ?? 3000,
  });
};
