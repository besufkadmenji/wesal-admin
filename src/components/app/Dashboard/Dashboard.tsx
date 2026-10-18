"use client";

import { Summary } from "@/components/app/Dashboard/Summary";
import { useDict } from "@/hooks/useDict";

export const Dashboard = () => {
  const dict = useDict();
  return (
    <div className="grid grid-cols-1 gap-5">
      <h1 className="text-dashboard-title dark:text-white text-2xl font-bold">
        {dict.dashboard.title}
      </h1>
      <Summary />
    </div>
  );
};
