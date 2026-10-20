import LogoIcon from "@/assets/icons/main.logo.svg";
import { AppLink } from "@/components/app/shared/NoPrefetchLink";
import { activeHref as findActiveHref } from "@/components/app/shared/sidebar/activePath";
import { SidebarGroup } from "@/components/app/shared/sidebar/SidebarGroup";
import { SidebarLink } from "@/components/app/shared/sidebar/SidebarLink";
import { SidebarLinkSkeleton } from "@/components/app/shared/sidebar/SidebarLinkSkeleton";
import { SidebarSection } from "@/components/app/shared/sidebar/SidebarSection";
import {
  navHrefs,
  useNavSections,
} from "@/components/app/shared/sidebar/useNavSections";
import { useAdminPermissionStore } from "@/store/adminPermissionStore";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import { useMe } from "@/hooks/useMe";
import { useSidebarStore } from "@/store/sidebarStore";
import { Tooltip } from "@heroui/react";
import {
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
  PanelRightClose,
  PanelRightOpen,
  type LucideIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

// Varied label widths so the placeholder reads like a menu.
const SKELETON_WIDTHS = ["62%", "48%", "70%", "55%", "40%"];

const icon = (Icon: LucideIcon) => (
  <Icon aria-hidden className="size-5 shrink-0" strokeWidth={1.75} />
);

/**
 * UI-4 (2026-10-20): the admin navigation — grouped sections, one Lucide
 * icon style (UI-2), and an active state that follows nested pages.
 */
export const Sidebar = ({
  className,
  collapsible = true,
}: {
  className?: string;
  /** false in the phone drawer, which is always expanded. */
  collapsible?: boolean;
}) => {
  const dict = useDict();
  const nav = dict.navigation;
  const lang = useLang();
  const pathname = usePathname();
  const { me, isLoading: meLoading, logout } = useMe();
  // Gated links are hidden until the admin's permissions are in the store;
  // meanwhile they show as skeleton rows (always-visible links render).
  const permissionType = useAdminPermissionStore((s) => s.permissionType);
  const permissionsPending =
    permissionType === null && (meLoading || !!me?.permissionType);
  const sections = useNavSections();
  const storedCollapsed = useSidebarStore((s) => s.collapsed);
  const setCollapsed = useSidebarStore((s) => s.setCollapsed);
  const collapsed = collapsible && storedCollapsed;
  const ToggleIcon =
    lang === "ar"
      ? collapsed
        ? PanelRightOpen
        : PanelRightClose
      : collapsed
        ? PanelLeftOpen
        : PanelLeftClose;

  const current = findActiveHref(pathname, lang, navHrefs(sections));

  return (
    <aside
      className={twMerge(
        "hidden h-full min-h-0 grid-rows-[auto_1fr_auto] border-e border-[#22283a]/[0.06] bg-white lg:grid dark:border-white/5 dark:bg-black",
        className,
      )}
    >
      <AppLink
        href="/dashboard"
        aria-label={collapsed ? nav.brand_name : undefined}
        className={twMerge(
          "text-primary flex h-20 items-center gap-3 px-7 dark:text-[#EFF9F0]",
          collapsed && "justify-center px-0",
        )}
      >
        <LogoIcon
          className={twMerge("h-11 w-auto shrink-0", collapsed && "h-9")}
        />
        {!collapsed && (
          <span className="grid min-w-0 border-s border-[#22283a]/10 ps-3 leading-tight dark:border-white/10">
            <span className="text-lg font-semibold">{nav.brand_name}</span>
            <span className="text-subTitle dark:text-dark-subTitle text-xs font-medium">
              {nav.brand_subtitle}
            </span>
          </span>
        )}
      </AppLink>
      <nav
        className={twMerge(
          "grid min-h-0 auto-rows-max grid-cols-[minmax(0,1fr)] gap-6 overflow-x-hidden overflow-y-auto px-4 py-4",
          collapsed && "gap-3 px-3",
        )}
      >
        {sections.map((section) => {
          if (permissionsPending) {
            return (
              <SidebarSection
                key={section.label}
                label={section.label}
                collapsed={collapsed}
              >
                {section.items.map((item, index) =>
                  item.visible === true && item.kind === "link" ? (
                    <SidebarLink
                      key={item.href}
                      href={item.href}
                      icon={icon(item.Icon)}
                      label={item.label}
                      active={item.href === current}
                      collapsed={collapsed}
                    />
                  ) : (
                    <SidebarLinkSkeleton
                      key={item.label}
                      width={SKELETON_WIDTHS[index % SKELETON_WIDTHS.length]}
                      collapsed={collapsed}
                    />
                  ),
                )}
              </SidebarSection>
            );
          }
          const items = section.items.filter((item) => item.visible);
          if (items.length === 0) return null;
          return (
            <SidebarSection
              key={section.label}
              label={section.label}
              collapsed={collapsed}
            >
              {items.map((item) =>
                item.kind === "link" ? (
                  <SidebarLink
                    key={item.href}
                    href={item.href}
                    icon={icon(item.Icon)}
                    label={item.label}
                    active={item.href === current}
                    collapsed={collapsed}
                  />
                ) : (
                  <SidebarGroup
                    key={item.label}
                    icon={icon(item.Icon)}
                    label={item.label}
                    options={item.options}
                    activeHref={current}
                    collapsed={collapsed}
                  />
                ),
              )}
            </SidebarSection>
          );
        })}
      </nav>
      <div
        className={twMerge(
          "flex items-center gap-2 border-t border-[#22283a]/[0.06] p-4 dark:border-white/5",
          collapsed && "flex-col p-3",
        )}
      >
        <Tooltip
          content={nav.logout}
          placement={lang === "ar" ? "left" : "right"}
          isDisabled={!collapsed}
        >
          <button
            type="button"
            onClick={() => logout()}
            aria-label={collapsed ? nav.logout : undefined}
            className={twMerge(
              "text-subTitle hover:text-danger dark:text-dark-subTitle flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium transition-colors duration-150 hover:bg-[#d92d20]/[0.06]",
              collapsed && "justify-center px-0",
            )}
          >
            {icon(LogOut)}
            {!collapsed && <span>{nav.logout}</span>}
          </button>
        </Tooltip>
        {collapsible && (
          <button
            type="button"
            onClick={() => setCollapsed(!collapsed)}
            aria-label={collapsed ? nav.sidebar_expand : nav.sidebar_collapse}
            aria-expanded={!collapsed}
            title={collapsed ? nav.sidebar_expand : nav.sidebar_collapse}
            className="text-subTitle hover:text-primary dark:text-dark-subTitle grid size-10 shrink-0 place-items-center rounded-xl transition-colors duration-150 hover:bg-[#22283a]/[0.04] dark:hover:bg-white/5 dark:hover:text-white"
          >
            <ToggleIcon aria-hidden className="size-5" strokeWidth={1.75} />
          </button>
        )}
      </div>
    </aside>
  );
};
