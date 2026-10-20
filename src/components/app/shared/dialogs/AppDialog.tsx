"use client";

import { Modal, ModalContent } from "@heroui/react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { DIALOG_TILE, type DialogTone } from "./dialogTone";

/**
 * UI-8: the shell every admin dialog shares: a tinted icon tile, title,
 * description, an optional body and the actions (confirm first).
 */
export const AppDialog = ({
  isOpen,
  onClose,
  tone = "primary",
  icon: Icon,
  title,
  description,
  children,
  actions,
  isBusy = false,
  size = "md",
}: {
  isOpen: boolean;
  onClose: () => void;
  tone?: DialogTone;
  icon?: LucideIcon;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  actions?: ReactNode;
  isBusy?: boolean;
  size?: "md" | "lg";
}) => {
  // Icon tile (size-12) + gap-4.
  const indent = Icon ? "sm:ps-16" : "";
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
      isDismissable={!isBusy}
      isKeyboardDismissDisabled={isBusy}
      hideCloseButton={isBusy}
      size={size === "lg" ? "2xl" : "lg"}
      placement="center"
      classNames={{
        base: "dark:bg-dark-black rounded-2xl bg-white",
        closeButton: "top-4 end-4 start-auto",
      }}
    >
      <ModalContent>
        <div className="grid gap-6 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            {Icon && (
              <span
                className={`grid size-12 shrink-0 place-items-center rounded-2xl ${DIALOG_TILE[tone]}`}
              >
                <Icon aria-hidden className="size-6" strokeWidth={1.75} />
              </span>
            )}
            <div className="grid min-w-0 gap-1.5 pe-6">
              <h2 className="text-primary text-lg leading-7 font-semibold dark:text-white">
                {title}
              </h2>
              {description && (
                <div className="text-subTitle dark:text-dark-subTitle text-sm leading-6">
                  {description}
                </div>
              )}
            </div>
          </div>
          {/* Body and actions line up with the title (past the icon tile) on
            wider screens; on phones they use the full width. */}
          {children && <div className={indent}>{children}</div>}
          {actions && (
            <div
              className={`grid grid-cols-2 gap-3 sm:flex sm:justify-start ${indent}`}
            >
              {actions}
            </div>
          )}
        </div>
      </ModalContent>
    </Modal>
  );
};
