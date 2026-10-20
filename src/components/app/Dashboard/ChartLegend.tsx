/** UI-14: compact legend row above a chart (Chart.js legend stays off). */
export const ChartLegend = ({
  items,
}: {
  items: { key: string; label: string; color: string; value?: string }[];
}) => (
  <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium">
    {items.map((item) => (
      <li
        key={item.key}
        className="text-subTitle dark:text-dark-subTitle flex items-center gap-1.5"
      >
        <span
          aria-hidden
          className="size-2.5 rounded-[3px]"
          style={{ backgroundColor: item.color }}
        />
        {item.label}
        {item.value && (
          <span className="text-primary dark:text-dark-white tabular-nums">
            {item.value}
          </span>
        )}
      </li>
    ))}
  </ul>
);
