import { useDict } from "@/hooks/useDict";
import { Tab, Tabs } from "@heroui/react";
import {
  RANGE_KEYS,
  type RangeKey,
  useDashboardRange,
} from "./useDashboardRange";

/** UI-14: 7 days / 30 days / 12 months, shared by every dashboard chart. */
export const DashboardRangeSwitch = () => {
  const dict = useDict();
  const copy = dict.dashboard.range;
  const { key, setKey } = useDashboardRange();
  return (
    <Tabs
      aria-label={copy.label}
      selectedKey={key}
      onSelectionChange={(next) => void setKey(next as RangeKey)}
      radius="full"
      size="sm"
      classNames={{
        tabList: "bg-accent-soft gap-1 p-1 dark:bg-white/5",
        tab: "h-8 px-3.5",
        cursor: "bg-white shadow-sm dark:bg-[#6474a6]",
        tabContent:
          "text-subTitle text-[13px] font-medium group-data-[selected=true]:text-primary dark:text-dark-subTitle dark:group-data-[selected=true]:text-white",
      }}
    >
      {RANGE_KEYS.map((rangeKey) => (
        <Tab key={rangeKey} title={copy[rangeKey]} />
      ))}
    </Tabs>
  );
};
