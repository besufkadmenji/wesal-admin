"use client";

import { Summary } from "@/components/app/Dashboard/Summary";
import { useDict } from "@/hooks/useDict";
import { AttentionPanel } from "./AttentionPanel";
import { ContractStatusChart } from "./ContractStatusChart";
import { DashboardRangeSwitch } from "./DashboardRangeSwitch";
import { GrowthChart } from "./GrowthChart";
import { RevenueChart } from "./RevenueChart";
import { TopCategoriesChart } from "./TopCategoriesChart";

/**
 * Admin home: the six BRD 4.3.3 cards, then the UI-14 charts and the
 * "needs attention" panel (each hidden when the admin lacks its permission).
 */
export const Dashboard = () => {
  const dict = useDict();
  return (
    <div className="grid grid-cols-1 gap-6">
      <h1 className="text-dashboard-title text-2xl font-bold dark:text-white">
        {dict.dashboard.title}
      </h1>
      <Summary />
      <div className="flex flex-wrap items-end justify-between gap-3 pt-2">
        <div className="grid gap-1">
          <h2 className="text-primary text-lg font-semibold dark:text-white">
            {dict.dashboard.insights_title}
          </h2>
          <p className="text-subTitle dark:text-dark-subTitle text-sm">
            {dict.dashboard.insights_subtitle}
          </p>
        </div>
        <DashboardRangeSwitch />
      </div>
      <div className="grid grid-cols-[minmax(0,1fr)] gap-6 xl:grid-cols-6">
        <RevenueChart className="xl:col-span-4" />
        <AttentionPanel className="xl:col-span-2" />
        <GrowthChart className="xl:col-span-3" />
        <ContractStatusChart className="xl:col-span-3" />
        <TopCategoriesChart className="xl:col-span-6" />
      </div>
    </div>
  );
};
