import {
  SummaryCard,
  SummaryCardType,
} from "@/components/app/shared/summary/SummaryCard";
import { SummaryCardSkeleton } from "@/components/app/shared/summary/SummaryCardSkeleton";
import { useDict } from "@/hooks/useDict";
import { useDashboardStats } from "./useDashboardStats";

/** The six admin home statistics (BRD 4.3.3); 0 when there is no data. */
export const Summary = () => {
  const dict = useDict();
  const cards = dict.dashboard.cards;
  const { stats, isLoading } = useDashboardStats();

  const items = [
    {
      type: SummaryCardType.CLIENTS,
      title: cards.customers,
      value: stats?.customers,
    },
    {
      type: SummaryCardType.PROVIDERS,
      title: cards.providers,
      value: stats?.providers,
    },
    {
      type: SummaryCardType.CONTRACTS,
      title: cards.completed_contracts,
      value: stats?.completedContracts,
    },
    {
      type: SummaryCardType.CONVERSATIONS,
      title: cards.messages_today,
      value: stats?.messagesToday,
    },
    {
      type: SummaryCardType.FEATURES,
      title: cards.featured_listings,
      value: stats?.featuredListings,
    },
    {
      type: SummaryCardType.LISTINGS,
      title: cards.free_listings,
      value: stats?.freeListings,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) =>
        isLoading ? (
          <SummaryCardSkeleton key={item.type} />
        ) : (
          <SummaryCard
            key={item.type}
            type={item.type}
            title={item.title}
            subTitle=""
            value={(item.value ?? 0).toLocaleString("en-US")}
          />
        ),
      )}
    </div>
  );
};
