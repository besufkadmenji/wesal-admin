import { AppLink } from "@/components/app/shared/NoPrefetchLink";
import { ContractStatus, SignedContractStatus } from "@/gql/graphql";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import {
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  FileWarning,
  FileX2,
  Gavel,
  MessageSquareWarning,
  UserPlus,
  type LucideIcon,
} from "lucide-react";
import { twMerge } from "tailwind-merge";
import { formatNumber } from "./chartTheme";
import { useAttentionCounts } from "./useDashboardInsights";

type Row = {
  key: string;
  label: string;
  href: string;
  Icon: LucideIcon;
  count: number | null | undefined;
};

/** UI-14: work waiting for an admin, limited to modules this admin can read. */
export const AttentionPanel = ({ className }: { className?: string }) => {
  const dict = useDict();
  const copy = dict.dashboard.attention;
  const lang = useLang();
  const { data, isLoading, isError } = useAttentionCounts();
  const Chevron = lang === "ar" ? ChevronLeft : ChevronRight;

  const rows: Row[] = [
    {
      key: "providers",
      label: copy.pending_provider_requests,
      href: "/providers/requests",
      Icon: UserPlus,
      count: data?.pendingProviderRequests,
    },
    {
      key: "complaints",
      label: copy.open_complaints,
      href: "/complaints",
      Icon: MessageSquareWarning,
      count: data?.openComplaints,
    },
    {
      key: "cancellations",
      label: copy.cancellation_requests,
      href: `/contracts?status=${ContractStatus.CancellationRequested}`,
      Icon: FileWarning,
      count: data?.cancellationRequests,
    },
    {
      key: "disputes",
      label: copy.disputed_contracts,
      href: `/contracts?status=${ContractStatus.Disputed}`,
      Icon: Gavel,
      count: data?.disputedContracts,
    },
    {
      // S4-58: provider e-contract termination requests (BRD 4.3.7.3).
      key: "terminations",
      label: copy.termination_requests,
      href: `/providers/e-contracts?status=${SignedContractStatus.TerminationRequested}`,
      Icon: FileX2,
      count: data?.terminationRequests,
    },
  ];
  const visible = rows.filter((row) => row.count != null);
  const allClear =
    !isLoading && visible.length > 0 && visible.every((row) => row.count === 0);

  return (
    <section
      className={twMerge(
        "dark:bg-dark-black grid min-w-0 grid-cols-[minmax(0,1fr)] content-start gap-4 rounded-2xl border border-[#22283a]/[0.07] bg-white p-6 shadow-[0_1px_2px_rgba(34,40,58,0.04),0_8px_24px_-12px_rgba(34,40,58,0.10)] dark:border-white/8",
        className,
      )}
    >
      <header className="grid gap-1">
        <h2 className="text-primary dark:text-dark-white text-base font-semibold">
          {copy.title}
        </h2>
        <p className="text-subTitle dark:text-dark-subTitle text-sm">
          {copy.subtitle}
        </p>
      </header>
      {isLoading ? (
        <div className="grid gap-2" aria-busy>
          {rows.map((row) => (
            <div
              key={row.key}
              className="bg-accent-soft h-14 animate-pulse rounded-xl motion-reduce:animate-none"
            />
          ))}
        </div>
      ) : isError || visible.length === 0 ? (
        <p className="text-subTitle dark:text-dark-subTitle py-6 text-center text-sm">
          {isError ? dict.dashboard.charts.error : copy.nothing_to_show}
        </p>
      ) : (
        <>
          {allClear && (
            <p className="flex items-center gap-2 rounded-xl bg-[#389441]/10 px-3 py-2.5 text-sm font-medium text-[#2d7a35] dark:bg-[#389441]/20 dark:text-[#8fd99a]">
              <CircleCheck aria-hidden className="size-4 shrink-0" />
              {copy.all_clear}
            </p>
          )}
          <ul className="grid gap-1">
            {visible.map(({ key, label, href, Icon, count }) => {
              const active = (count ?? 0) > 0;
              return (
                <li key={key}>
                  <AppLink
                    href={href}
                    className="group flex items-center gap-3 rounded-xl px-3 py-3 transition-colors duration-150 hover:bg-[#22283a]/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22283a] dark:hover:bg-white/5"
                  >
                    <span
                      className={twMerge(
                        "grid size-9 shrink-0 place-items-center rounded-lg",
                        active
                          ? "bg-orange-50 text-orange-600 dark:bg-orange-500/15 dark:text-orange-300"
                          : "bg-accent-soft text-subTitle dark:text-dark-subTitle",
                      )}
                    >
                      <Icon
                        aria-hidden
                        className="size-4.5"
                        strokeWidth={1.75}
                      />
                    </span>
                    <span className="text-primary dark:text-dark-white min-w-0 flex-1 text-sm font-medium">
                      {label}
                    </span>
                    <span
                      className={twMerge(
                        "min-w-7 rounded-full px-2 py-0.5 text-center text-xs font-semibold tabular-nums",
                        active
                          ? "bg-orange-600 text-white dark:bg-orange-500"
                          : "bg-accent-soft text-subTitle dark:text-dark-subTitle",
                      )}
                    >
                      {formatNumber(count ?? 0)}
                    </span>
                    <Chevron
                      aria-hidden
                      className="text-subTitle-alt size-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transition-none rtl:group-hover:-translate-x-0.5"
                    />
                  </AppLink>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </section>
  );
};
