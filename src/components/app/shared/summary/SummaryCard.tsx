import {
  Bell,
  ChartColumn,
  FileCheck2,
  Landmark,
  Mail,
  MapPin,
  Megaphone,
  MessageSquareWarning,
  MessagesSquare,
  Shapes,
  ShieldCheck,
  Sparkles,
  Store,
  Truck,
  UserPlus,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Dictionary } from "@/config/i18n/types";
import { useDict } from "@/hooks/useDict";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
export enum SummaryCardType {
  SUBSCRIBERS_REQUESTS = "SUBSCRIBERS_REQUESTS",
  SUBSCRIBERS = "SUBSCRIBERS",
  ADMINS = "ADMINS",
  NOTIFICATIONS = "NOTIFICATIONS",
  MESSAGES = "MESSAGES",
  CLIENTS = "CLIENTS",
  FEATURES = "FEATURES",
  CATEGORIES = "CATEGORIES",
  CITIES = "CITIES",
  USERS = "USERS",
  BANKS = "BANKS",
  DELIVERY_COMPANIES = "DELIVERY_COMPANIES",
  LISTINGS = "LISTINGS",
  PROVIDER_REQUESTS = "PROVIDER_REQUESTS",
  PROVIDERS = "PROVIDERS",
  SIGNED_CONTRACTS = "SIGNED_CONTRACTS",
  CONTRACTS = "CONTRACTS",
  CONVERSATIONS = "CONVERSATIONS",
  COMPLAINTS = "COMPLAINTS",
  REPORTS = "REPORTS",
}

type Tone = "navy" | "green" | "amber" | "violet" | "teal" | "rose";

/** UI-5: one Lucide icon per card on a tinted tile (UI-2 icon set). */
const iconMap: Record<SummaryCardType, { Icon: LucideIcon; tone: Tone }> = {
  [SummaryCardType.SUBSCRIBERS_REQUESTS]: { Icon: UserPlus, tone: "amber" },
  [SummaryCardType.SUBSCRIBERS]: { Icon: Users, tone: "navy" },
  [SummaryCardType.ADMINS]: { Icon: ShieldCheck, tone: "navy" },
  [SummaryCardType.NOTIFICATIONS]: { Icon: Bell, tone: "violet" },
  [SummaryCardType.MESSAGES]: { Icon: Mail, tone: "violet" },
  [SummaryCardType.CLIENTS]: { Icon: Users, tone: "navy" },
  [SummaryCardType.FEATURES]: { Icon: Sparkles, tone: "amber" },
  [SummaryCardType.CATEGORIES]: { Icon: Shapes, tone: "navy" },
  [SummaryCardType.CITIES]: { Icon: MapPin, tone: "green" },
  [SummaryCardType.USERS]: { Icon: Users, tone: "navy" },
  [SummaryCardType.BANKS]: { Icon: Landmark, tone: "navy" },
  [SummaryCardType.DELIVERY_COMPANIES]: { Icon: Truck, tone: "amber" },
  [SummaryCardType.LISTINGS]: { Icon: Megaphone, tone: "teal" },
  [SummaryCardType.PROVIDER_REQUESTS]: { Icon: UserPlus, tone: "amber" },
  [SummaryCardType.PROVIDERS]: { Icon: Store, tone: "amber" },
  [SummaryCardType.SIGNED_CONTRACTS]: { Icon: FileCheck2, tone: "green" },
  [SummaryCardType.CONTRACTS]: { Icon: FileCheck2, tone: "green" },
  [SummaryCardType.CONVERSATIONS]: { Icon: MessagesSquare, tone: "violet" },
  [SummaryCardType.COMPLAINTS]: { Icon: MessageSquareWarning, tone: "rose" },
  [SummaryCardType.REPORTS]: { Icon: ChartColumn, tone: "teal" },
};

const TONE_TILES: Record<Tone, string> = {
  navy: "bg-[#22283a]/[0.07] text-[#22283a] dark:bg-[#6474a6]/25 dark:text-[#c3cbe6]",
  green:
    "bg-[#389441]/12 text-[#2d7a35] dark:bg-[#389441]/20 dark:text-[#8fd99a]",
  amber: "bg-amber-100 text-amber-700 dark:bg-amber-400/15 dark:text-amber-300",
  violet:
    "bg-violet-100 text-violet-700 dark:bg-violet-400/15 dark:text-violet-300",
  teal: "bg-teal-100 text-teal-700 dark:bg-teal-400/15 dark:text-teal-300",
  rose: "bg-rose-100 text-rose-700 dark:bg-rose-400/15 dark:text-rose-300",
};

export type SummaryCardProps = {
  type: SummaryCardType;
  title?: string;
  subTitle?: string;
  value?: string | number;
};

const labelMap = (dict: Dictionary) => ({
  [SummaryCardType.SUBSCRIBERS_REQUESTS]:
    dict.subscription_requests_page.total_requests,
  [SummaryCardType.SUBSCRIBERS]: dict.subscribers_page.total_subscribers,
  [SummaryCardType.ADMINS]: dict.system_managers_page.total_managers,
  [SummaryCardType.NOTIFICATIONS]: dict.notifications_page.total_notifications,
  [SummaryCardType.MESSAGES]: dict.contact_messages_page.total_messages,
  [SummaryCardType.CLIENTS]: dict.clients_management.total_clients,
  [SummaryCardType.FEATURES]: dict.features_management.total_features,
  [SummaryCardType.CATEGORIES]: dict.categories_page.total_categories,
  [SummaryCardType.CITIES]: dict.cities_page.total_cities,
  [SummaryCardType.USERS]: dict.users_page.total_users,
  [SummaryCardType.BANKS]: dict.banks_page.total_banks,
  [SummaryCardType.DELIVERY_COMPANIES]:
    dict.delivery_companies_page.total_delivery_companies,
  [SummaryCardType.LISTINGS]: dict.listings_page.total_listings,
  [SummaryCardType.PROVIDER_REQUESTS]:
    dict.providers_request_page.total_requests,
  [SummaryCardType.PROVIDERS]: dict.providers_page.total_providers,
  [SummaryCardType.SIGNED_CONTRACTS]:
    dict.signed_contracts_page.total_signed_contracts,
  [SummaryCardType.CONTRACTS]: dict.summary_cards.contracts,
  [SummaryCardType.CONVERSATIONS]: dict.summary_cards.conversations,
  [SummaryCardType.COMPLAINTS]: dict.summary_cards.complaints,
  [SummaryCardType.REPORTS]: dict.summary_cards.reports,
});

const subLabelMap = (dict: Dictionary) => ({
  [SummaryCardType.SUBSCRIBERS_REQUESTS]:
    dict.subscription_requests_page.total_count,
  [SummaryCardType.SUBSCRIBERS]: dict.subscribers_page.total_count,
  [SummaryCardType.ADMINS]: dict.system_managers_page.total_count,
  [SummaryCardType.NOTIFICATIONS]: dict.notifications_page.total_count,
  [SummaryCardType.MESSAGES]: dict.contact_messages_page.total_count,
  [SummaryCardType.CLIENTS]: dict.clients_management.total_count,
  [SummaryCardType.FEATURES]: dict.features_management.total_count,
  [SummaryCardType.CATEGORIES]: dict.categories_page.total_count,
  [SummaryCardType.CITIES]: dict.cities_page.total_count,
  [SummaryCardType.USERS]: dict.users_page.total_count,
  [SummaryCardType.BANKS]: dict.banks_page.total_count,
  [SummaryCardType.DELIVERY_COMPANIES]:
    dict.delivery_companies_page.total_count,
  [SummaryCardType.LISTINGS]: dict.listings_page.total_count,
  [SummaryCardType.PROVIDER_REQUESTS]: dict.providers_request_page.total_count,
  [SummaryCardType.PROVIDERS]: dict.providers_page.total_count,
  [SummaryCardType.SIGNED_CONTRACTS]: dict.signed_contracts_page.total_count,
  [SummaryCardType.CONTRACTS]: dict.summary_cards.contracts_unit,
  [SummaryCardType.CONVERSATIONS]: dict.summary_cards.conversations_unit,
  [SummaryCardType.COMPLAINTS]: dict.summary_cards.complaints_unit,
  [SummaryCardType.REPORTS]: dict.summary_cards.reports_unit,
});

export const SummaryCard = ({
  type,
  value,
  endContent,
  title,
  subTitle,
}: SummaryCardProps & {
  value: string | number;
  endContent?: ReactNode;
}) => {
  const dict = useDict();
  const { Icon, tone } = iconMap[type];

  const label = title ?? labelMap(dict)[type];
  const subLabel = subTitle ?? subLabelMap(dict)[type];

  return (
    <div className="dark:bg-dark-black grid grid-cols-1 items-start gap-4 rounded-2xl border border-[#22283a]/[0.07] bg-white p-6 shadow-[0_1px_2px_rgba(34,40,58,0.04),0_8px_24px_-12px_rgba(34,40,58,0.10)] lg:grid-cols-[1fr_auto] dark:border-white/8">
      <div className="grid grid-cols-1 gap-5">
        <span
          className={twMerge(
            "grid size-11 place-content-center rounded-xl",
            TONE_TILES[tone],
          )}
        >
          <Icon aria-hidden className="size-5" strokeWidth={1.75} />
        </span>
        <div className="grid grid-cols-1 gap-1.5">
          <p className="text-subTitle dark:text-dark-subTitle text-sm leading-5 font-medium">
            {label}
          </p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-primary dark:text-dark-white text-3xl leading-9 font-semibold tracking-tight tabular-nums">
              {value}
            </h3>
            {subLabel && (
              <p className="text-subTitle-alt dark:text-dark-gray-4 text-sm font-medium">
                {subLabel}
              </p>
            )}
          </div>
        </div>
      </div>
      {endContent && (
        <div className="row-start-1 grid grid-cols-1 lg:row-start-auto lg:justify-self-end">
          {endContent}
        </div>
      )}
    </div>
  );
};
