import {
  ReportData,
  financialReportCopy,
  formatReportMoney,
} from "./financial-report-helpers";

/** BRD 4.3.22 footer: totals over every filtered contract, not one page. */
export const ReportTotalsFooter = ({
  lang,
  data,
}: {
  lang: string;
  data: ReportData | undefined;
}) => {
  const copy = financialReportCopy(lang);
  const money = (key: string) =>
    `${formatReportMoney(Number(data?.[key] ?? 0), lang)} ${copy.moneySubTitle}`;
  const items = [
    [copy.footer.contracts, String(data?.meta.total ?? 0)],
    [copy.footer.providerNet, money("totalProviderNet")],
    [copy.footer.vat, money("totalVat")],
    [copy.footer.adminProfit, money("totalAdminProfit")],
    [copy.footer.completed, String(data?.completedCount ?? 0)],
  ];
  return (
    <dl className="bg-gray-border dark:bg-title grid grid-cols-2 gap-4 rounded-lg p-4 md:grid-cols-5">
      {items.map(([label, value]) => (
        <div key={label} className="grid gap-1">
          <dt className="text-subTitle dark:text-dark-white text-xs">
            {label}
          </dt>
          <dd className="text-title text-base font-semibold dark:text-white">
            {value}
          </dd>
        </div>
      ))}
    </dl>
  );
};
