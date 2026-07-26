import {
  SummaryCard,
  SummaryCardType,
} from "@/components/app/shared/summary/SummaryCard";
import { SummaryCardSkeleton } from "@/components/app/shared/summary/SummaryCardSkeleton";
import {
  ReportData,
  ReportKind,
  financialReportCopy,
  formatReportMoney,
  reportConfig,
  reportCountCardType,
} from "./financial-report-helpers";

export const ReportSummarySection = ({
  kind,
  lang,
  loading,
  data,
}: {
  kind: ReportKind;
  lang: string;
  loading: boolean;
  data: ReportData | undefined;
}) => {
  const copy = financialReportCopy(lang);
  const config = reportConfig[kind];
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {loading ? (
        <SummaryCardSkeleton />
      ) : (
        <SummaryCard
          type={reportCountCardType[kind]}
          value={data?.meta.total ?? 0}
          title={copy.countLabels[kind]}
          subTitle={copy.countSubTitle}
        />
      )}
      {config.totals.map((total) =>
        loading ? (
          <SummaryCardSkeleton key={total.key} />
        ) : (
          <SummaryCard
            key={total.key}
            type={SummaryCardType.REPORTS}
            value={formatReportMoney(Number(data?.[total.key] ?? 0), lang)}
            title={copy.totals[total.labelKey]}
            subTitle={copy.moneySubTitle}
          />
        ),
      )}
    </section>
  );
};
