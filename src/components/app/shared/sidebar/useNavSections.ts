import { useCanAccess } from "@/hooks/useCanAccess";
import { useDict } from "@/hooks/useDict";
import {
  Bell,
  ChartColumn,
  FileText,
  Globe,
  HandHeart,
  LayoutDashboard,
  Landmark,
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

export type NavLink = {
  kind: "link";
  href: string;
  label: string;
  Icon: LucideIcon;
  visible: boolean;
};
export type NavGroup = {
  kind: "group";
  label: string;
  Icon: LucideIcon;
  visible: boolean;
  options: { href: string; label: string }[];
};
export type NavSection = { label: string; items: Array<NavLink | NavGroup> };

/** Every href in the menu (links and group options). */
export const navHrefs = (sections: NavSection[]) =>
  sections.flatMap((section) =>
    section.items.flatMap((item) =>
      item.kind === "link" ? [item.href] : item.options.map((o) => o.href),
    ),
  );

/**
 * UI-4: the admin menu, shared by the sidebar and the breadcrumbs. Items
 * carry `visible` from the admin's permissions.
 */
export const useNavSections = (): NavSection[] => {
  const nav = useDict().navigation;
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

  return [
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
};
