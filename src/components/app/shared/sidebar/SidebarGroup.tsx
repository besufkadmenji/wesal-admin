import { SidebarLink } from "@/components/app/shared/sidebar/SidebarLink";
import { useLang } from "@/hooks/useLang";
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/react";
import { ChevronDown } from "lucide-react";
import { useState, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

/**
 * UI-4: an expandable menu entry; opens by itself when a child is active.
 * Collapsed (icon rail): an icon button whose sub-links open in a popover.
 */
export const SidebarGroup = ({
  icon,
  label,
  options,
  activeHref,
  collapsed = false,
}: {
  icon: ReactNode;
  label: string;
  options: { href: string; label: string }[];
  activeHref?: string;
  collapsed?: boolean;
}) => {
  const lang = useLang();
  const containsActive = options.some((option) => option.href === activeHref);
  const [toggled, setToggled] = useState<boolean | null>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const expanded = toggled ?? containsActive;

  if (collapsed) {
    return (
      <Popover
        placement={lang === "ar" ? "left-start" : "right-start"}
        isOpen={popoverOpen}
        onOpenChange={setPopoverOpen}
      >
        <PopoverTrigger>
          <button
            type="button"
            aria-label={label}
            className={twMerge(
              "relative flex items-center justify-center rounded-xl py-2.5 transition-colors duration-150",
              containsActive
                ? "bg-accent-soft text-primary dark:text-white"
                : "text-subTitle hover:text-primary dark:text-dark-subTitle hover:bg-[#22283a]/[0.04] dark:hover:bg-white/5 dark:hover:text-white",
            )}
          >
            {containsActive && (
              <span
                aria-hidden
                className="bg-app-primary absolute inset-y-2 -start-3 w-1 rounded-e-full"
              />
            )}
            {icon}
          </button>
        </PopoverTrigger>
        <PopoverContent className="dark:bg-dark-black grid min-w-56 gap-0.5 rounded-2xl p-2">
          <p className="text-subTitle-alt dark:text-dark-subTitle-alt px-3 pt-1 pb-2 text-[11px] font-semibold tracking-wider uppercase">
            {label}
          </p>
          {options.map((option) => (
            <SidebarLink
              key={option.href}
              href={option.href}
              label={option.label}
              active={option.href === activeHref}
              onClick={() => setPopoverOpen(false)}
            />
          ))}
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <div className="grid gap-1">
      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => setToggled(!expanded)}
        className={twMerge(
          "flex items-center gap-3 rounded-xl px-3 py-2.5 text-start text-[13px] leading-snug font-medium transition-colors duration-150",
          containsActive
            ? "text-primary dark:text-white"
            : "text-subTitle hover:text-primary dark:text-dark-subTitle hover:bg-[#22283a]/[0.04] dark:hover:bg-white/5 dark:hover:text-white",
        )}
      >
        {icon}
        <span className="min-w-0 grow break-words">{label}</span>
        <ChevronDown
          aria-hidden
          strokeWidth={1.75}
          className={twMerge(
            "size-4 shrink-0 transition-transform duration-200",
            expanded && "rotate-180",
          )}
        />
      </button>
      {expanded && (
        <div className="grid gap-0.5">
          {options.map((option) => (
            <SidebarLink
              key={option.href}
              href={option.href}
              label={option.label}
              active={option.href === activeHref}
              nested
            />
          ))}
        </div>
      )}
    </div>
  );
};
