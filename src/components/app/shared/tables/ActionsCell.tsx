import { useDict } from "@/hooks/useDict";
import { Button } from "@heroui/react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const ICON = "size-5";

/** Table row actions; each icon button is named for screen readers (UI-13). */
export const ActionsCell = ({
  onView,
  onEdit,
  onDelete,
}: {
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}) => {
  const dict = useDict();
  const labels = dict.common.actions;
  return (
    <div className="flex items-center justify-end gap-1">
      {onView && (
        <ActionCell
          label={labels.view}
          icon={<Eye aria-hidden className={ICON} strokeWidth={1.75} />}
          onClick={onView}
        />
      )}
      {onEdit && (
        <ActionCell
          label={labels.edit}
          icon={<Pencil aria-hidden className={ICON} strokeWidth={1.75} />}
          onClick={onEdit}
        />
      )}
      {onDelete && (
        <ActionCell
          label={labels.delete}
          tone="danger"
          icon={<Trash2 aria-hidden className={ICON} strokeWidth={1.75} />}
          onClick={onDelete}
        />
      )}
    </div>
  );
};

export const ActionCell = ({
  icon,
  label,
  onClick,
  tone = "neutral",
}: {
  icon: ReactNode;
  label: string;
  onClick: () => void;
  tone?: "neutral" | "danger";
}) => {
  return (
    <Button
      isIconOnly
      aria-label={label}
      title={label}
      onPress={onClick}
      className={twMerge(
        "text-subTitle dark:text-dark-dashboard-title size-8 min-h-0 min-w-0 rounded-lg bg-transparent transition-colors duration-150",
        tone === "danger"
          ? "hover:text-danger hover:bg-red-50 dark:hover:bg-red-500/15 dark:hover:text-red-300"
          : "hover:text-primary hover:bg-[#22283a]/[0.06] dark:hover:bg-white/10 dark:hover:text-white",
      )}
    >
      {icon}
    </Button>
  );
};
