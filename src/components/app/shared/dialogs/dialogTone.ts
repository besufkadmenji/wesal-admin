/** UI-8: one colour language for every admin dialog. */
export type DialogTone = "danger" | "warning" | "success" | "primary";

export const DIALOG_TILE: Record<DialogTone, string> = {
  danger: "bg-red-50 text-danger dark:bg-red-500/15 dark:text-red-300",
  warning:
    "bg-amber-50 text-amber-700 dark:bg-amber-400/15 dark:text-amber-300",
  success:
    "bg-[#389441]/10 text-success dark:bg-[#389441]/20 dark:text-[#8fd99a]",
  primary: "bg-accent-soft text-primary dark:text-white",
};

export const DIALOG_CONFIRM: Record<DialogTone, string> = {
  danger: "bg-danger text-white",
  warning: "bg-amber-600 text-white",
  success: "bg-success text-white",
  primary: "bg-primary text-white dark:bg-[#6474a6]",
};

export const DIALOG_CANCEL = "bg-accent-soft text-primary dark:text-white";

export const DIALOG_BUTTON = "h-12 rounded-xl px-6 text-sm font-semibold";
