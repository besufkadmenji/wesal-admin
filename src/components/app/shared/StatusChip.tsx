import { twMerge } from "tailwind-merge";

export type StatusTone =
  "success" | "warning" | "info" | "danger" | "orange" | "purple" | "neutral";

const TONES: Record<StatusTone, string> = {
  success:
    "bg-[#389441]/10 text-[#2d7a35] ring-[#389441]/20 dark:bg-[#389441]/20 dark:text-[#8fd99a]",
  warning:
    "bg-amber-50 text-amber-700 ring-amber-600/20 dark:bg-amber-400/15 dark:text-amber-300",
  info: "bg-[#22283a]/[0.06] text-[#3b4a7a] ring-[#22283a]/12 dark:bg-[#6474a6]/25 dark:text-[#c3cbe6]",
  danger:
    "bg-red-50 text-red-700 ring-red-600/15 dark:bg-red-500/15 dark:text-red-300",
  orange:
    "bg-orange-50 text-orange-700 ring-orange-600/20 dark:bg-orange-500/15 dark:text-orange-300",
  purple:
    "bg-purple-50 text-purple-700 ring-purple-600/15 dark:bg-purple-500/15 dark:text-purple-300",
  neutral:
    "bg-gray-100 text-gray-600 ring-gray-500/15 dark:bg-white/10 dark:text-white/70",
};

/** UI-7: the one status pill used across the admin (tables and details). */
export const StatusChip = ({
  tone,
  label,
  className,
}: {
  tone: StatusTone;
  label: string;
  className?: string;
}) => (
  <span
    className={twMerge(
      "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs leading-4 font-medium whitespace-nowrap ring-1 ring-inset",
      TONES[tone],
      className,
    )}
  >
    <span aria-hidden className="size-1.5 rounded-full bg-current opacity-70" />
    {label}
  </span>
);
