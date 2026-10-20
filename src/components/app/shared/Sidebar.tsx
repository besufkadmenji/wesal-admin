import LogoIcon from "@/assets/icons/main.logo.svg";
import { AppLink } from "@/components/app/shared/NoPrefetchLink";
import { activeHref as findActiveHref } from "@/components/app/shared/sidebar/activePath";
import { SidebarGroup } from "@/components/app/shared/sidebar/SidebarGroup";
import { SidebarLink } from "@/components/app/shared/sidebar/SidebarLink";
import { SidebarLinkSkeleton } from "@/components/app/shared/sidebar/SidebarLinkSkeleton";
import { SidebarSection } from "@/components/app/shared/sidebar/SidebarSection";
import { useAdminPermissionStore } from "@/store/adminPermissionStore";
import { useCanAccess } from "@/hooks/useCanAccess";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import { useMe } from "@/hooks/useMe";
import {
  Bell,
  ChartColumn,
  FileText,
  Globe,
  HandHeart,
  LayoutDashboard,
  Landmark,
  LogOut,
  MapPin,
  Medal,
  Megaphone,
  MessageSquareWarning,
  MessagesSquare,
  Settings,
  Shapes,
  ShieldCheck,
  Star,
  Store,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

type NavLink = {
  kind: "link";
  href: string;
  label: string;
  Icon: LucideIcon;
  visible: boolean;
};
type NavGroup = {
  kind: "group";
  label: string;
  Icon: LucideIcon;
  visible: boolean;
  options: { href: string; label: string }[];
};
type NavSection = { label: string; items: Array<NavLink | NavGroup> };

// Varied label widths so the placeholder reads like a menu.
const SKELETON_WIDTHS = ["62%", "48%", "70%", "55%", "40%"];

const icon = (Icon: LucideIcon) => (
  <Icon aria-hidden className="size-5 shrink-0" strokeWidth={1.75} />
);

/**
 * UI-4 (2026-10-20): the admin navigation — grouped sections, one Lucide
 * icon style (UI-2), and an active state that follows nested pages.
 */
export const Sidebar = ({ className }: { className?: string }) => {
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
  const can = {
    admins: useCanAccess("admin", "read"),
    categories: useCanAccess("category", "read"),
    listings: useCanAccess("listing", "read"),
    cities: useCanAccess("city", "read"),
    users: useCanAccess("user", "read"),
    providers: useCanAccess("provider", "read"),
    banks: useCanAccess("bank", "read"),
    deliveryCompanies: useCanAccess("delivery_company", "read"),
    settings: useCanAccess("setting", "read"),
    contactMessages: useCanAccess("contact_message", "read"),
    faq: useCanAccess("faq", "read"),
    contracts: useCanAccess("contract", "read"),
    conversations: useCanAccess("conversation", "read"),
    complaints: useCanAccess("complaint", "read"),
    comments: useCanAccess("rating", "read"),
    badges: useCanAccess("badge", "read"),
    notifications: useCanAccess("notification", "read"),
    charity: useCanAccess("charity", "read"),
    reports: useCanAccess("report", "read"),
  };

  const sections: NavSection[] = [
    {
      label: nav.section_overview,
      items: [
        {
          kind: "link",
          href: "/dashboard",
          label: nav.home,
          Icon: LayoutDashboard,
          visible: true,
        },
      ],
    },
    {
      label: nav.section_marketplace,
      items: [
        {
          kind: "link",
          href: "/categories",
          label: nav.categories,
          Icon: Shapes,
          visible: can.categories,
        },
        {
          kind: "link",
          href: "/listings",
          label: nav.ads,
          Icon: Megaphone,
          visible: can.listings,
        },
        {
          kind: "link",
          href: "/contracts",
          label: nav.contracts,
          Icon: FileText,
          visible: can.contracts,
        },
        {
          kind: "link",
          href: "/conversations",
          label: nav.conversations,
          Icon: MessagesSquare,
          visible: can.conversations,
        },
        {
          kind: "link",
          href: "/complaints",
          label: nav.complaints,
          Icon: MessageSquareWarning,
          visible: can.complaints,
        },
        {
          kind: "link",
          href: "/comments",
          label: nav.comments,
          Icon: Star,
          visible: can.comments,
        },
      ],
    },
    {
      label: nav.section_people,
      items: [
        {
          kind: "link",
          href: "/users",
          label: nav.users,
          Icon: Users,
          visible: can.users,
        },
        {
          kind: "group",
          label: nav.providers,
          Icon: Store,
          visible: can.providers,
          options: [
            { href: "/providers/requests", label: nav.join_requests },
            { href: "/providers", label: nav.providers },
            { href: "/providers/e-contracts", label: nav.electronicContracts },
          ],
        },
        {
          kind: "link",
          href: "/admins",
          label: nav.system_managers,
          Icon: ShieldCheck,
          visible: can.admins,
        },
      ],
    },
    {
      label: nav.section_operations,
      items: [
        {
          kind: "link",
          href: "/charity",
          label: nav.charity,
          Icon: HandHeart,
          visible: can.charity,
        },
        {
          kind: "link",
          href: "/badges",
          label: nav.badges,
          Icon: Medal,
          visible: can.badges,
        },
        {
          kind: "link",
          href: "/notifications",
          label: nav.notifications,
          Icon: Bell,
          visible: can.notifications,
        },
        {
          kind: "group",
          label: nav.reports,
          Icon: ChartColumn,
          visible: can.reports,
          options: [
            {
              href: "/reports/contracts",
              label: nav.contract_financial_report,
            },
            {
              href: "/reports/conversations",
              label: nav.conversation_fee_report,
            },
            { href: "/reports/premium", label: nav.premium_ad_report },
          ],
        },
      ],
    },
    {
      label: nav.section_configuration,
      items: [
        {
          kind: "link",
          href: "/cities",
          label: nav.cities,
          Icon: MapPin,
          visible: can.cities,
        },
        {
          kind: "link",
          href: "/banks",
          label: nav.banks,
          Icon: Landmark,
          visible: can.banks,
        },
        {
          kind: "link",
          href: "/delivery-companies",
          label: nav.delivery_companies,
          Icon: Truck,
          visible: can.deliveryCompanies,
        },
        {
          kind: "link",
          href: "/settings",
          label: nav.settings,
          Icon: Settings,
          visible: can.settings,
        },
        {
          kind: "group",
          label: nav.website_content,
          Icon: Globe,
          visible: can.contactMessages || can.faq,
          options: [
            { href: "/content/contact-management", label: nav.contact_admin },
            { href: "/content/about-platform", label: nav.about },
            { href: "/content/terms", label: nav.terms_and_conditions },
            { href: "/content/privacy-policy", label: nav.privacy_policy },
            ...(can.faq ? [{ href: "/content/faq", label: nav.faq }] : []),
            ...(can.contactMessages
              ? [{ href: "/content/contact-messages", label: nav.contact_us }]
              : []),
          ],
        },
      ],
    },
  ];

  const allHrefs = sections.flatMap((section) =>
    section.items.flatMap((item) =>
      item.kind === "link" ? [item.href] : item.options.map((o) => o.href),
    ),
  );
  const current = findActiveHref(pathname, lang, allHrefs);

  return (
    <aside
      className={twMerge(
        "hidden h-full min-h-0 grid-rows-[auto_1fr_auto] border-e border-[#22283a]/[0.06] bg-white lg:grid dark:border-white/5 dark:bg-black",
        className,
      )}
    >
      <AppLink
        href="/dashboard"
        className="text-primary flex h-20 items-center gap-3 px-7 dark:text-[#EFF9F0]"
      >
        <LogoIcon className="h-11 w-auto shrink-0" />
        <span className="grid min-w-0 border-s border-[#22283a]/10 ps-3 leading-tight dark:border-white/10">
          <span className="text-lg font-semibold">{nav.brand_name}</span>
          <span className="text-subTitle dark:text-dark-subTitle text-xs font-medium">
            {nav.brand_subtitle}
          </span>
        </span>
      </AppLink>
      <nav className="grid min-h-0 auto-rows-max grid-cols-[minmax(0,1fr)] gap-6 overflow-x-hidden overflow-y-auto px-4 py-4">
        {sections.map((section) => {
          if (permissionsPending) {
            return (
              <SidebarSection key={section.label} label={section.label}>
                {section.items.map((item, index) =>
                  item.visible === true && item.kind === "link" ? (
                    <SidebarLink
                      key={item.href}
                      href={item.href}
                      icon={icon(item.Icon)}
                      label={item.label}
                      active={item.href === current}
                    />
                  ) : (
                    <SidebarLinkSkeleton
                      key={item.label}
                      width={SKELETON_WIDTHS[index % SKELETON_WIDTHS.length]}
                    />
                  ),
                )}
              </SidebarSection>
            );
          }
          const items = section.items.filter((item) => item.visible);
          if (items.length === 0) return null;
          return (
            <SidebarSection key={section.label} label={section.label}>
              {items.map((item) =>
                item.kind === "link" ? (
                  <SidebarLink
                    key={item.href}
                    href={item.href}
                    icon={icon(item.Icon)}
                    label={item.label}
                    active={item.href === current}
                  />
                ) : (
                  <SidebarGroup
                    key={item.label}
                    icon={icon(item.Icon)}
                    label={item.label}
                    options={item.options}
                    activeHref={current}
                  />
                ),
              )}
            </SidebarSection>
          );
        })}
      </nav>
      <div className="border-t border-[#22283a]/[0.06] p-4 dark:border-white/5">
        <button
          type="button"
          onClick={() => logout()}
          className="text-subTitle hover:text-danger dark:text-dark-subTitle flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium transition-colors duration-150 hover:bg-[#d92d20]/[0.06]"
        >
          {icon(LogOut)}
          <span>{nav.logout}</span>
        </button>
      </div>
    </aside>
  );
};
