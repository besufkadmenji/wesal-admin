import { SidebarLink } from "@/components/app/shared/sidebar/SidebarLink";
import { ChevronDown } from "lucide-react";
import { useState, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

/** UI-4: an expandable menu entry; opens by itself when a child is active. */
export const SidebarGroup = ({
  icon,
  label,
  options,
  activeHref,
}: {
  icon: ReactNode;
  label: string;
  options: { href: string; label: string }[];
  activeHref?: string;
}) => {
  const containsActive = options.some((option) => option.href === activeHref);
  const [toggled, setToggled] = useState<boolean | null>(null);
  const expanded = toggled ?? containsActive;
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
