import { addToast } from "@heroui/react";
export const showErrorMessage = (message: string | Error) => {
  addToast({
    description: message instanceof Error ? message.message : message,
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
