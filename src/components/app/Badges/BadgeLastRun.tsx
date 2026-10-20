import { formatDate } from "@/utils/date.time.helpers";
import { FormSection } from "@/components/app/shared/forms/AppForm";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import { BadgeLastRun as LastRun } from "@/services/badge.service";

/** Summary of the latest monthly run; stands in for the admin header alert. */
export const BadgeLastRun = ({ run }: { run: LastRun | null }) => {
  const dict = useDict();
  const lang = useLang();
  const copy = dict.badges_page.last_run;

  if (!run) {
    return (
      <FormSection title={copy.title}>
        <p className="text-subTitle text-sm dark:text-white/70">{copy.never}</p>
      </FormSection>
    );
  }

  const names = (providers: LastRun["deletedProviders"]) =>
    providers.length
      ? providers.map((provider) => provider.name ?? provider.id).join("، ")
      : copy.none;
  const rows: Array<[string, string]> = [
    [copy.ran_at, formatDate(run.ranAt, lang, { withTime: true })],
    [copy.trust, String(run.trustCount)],
    [copy.diligence, String(run.diligenceCount)],
    [copy.under_improvement, String(run.underImprovementCount)],
    [copy.changed, String(run.changedCount)],
    [copy.deleted, names(run.deletedProviders)],
    [copy.skipped, names(run.skippedProviders)],
  ];

  return (
    <FormSection title={copy.title} subTitle={copy.subtitle}>
      <dl className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {rows.map(([label, value]) => (
          <div
            key={label}
            className="border-gray-border-alt dark:border-dark-border grid gap-1 rounded-lg border p-3"
          >
            <dt className="text-subTitle text-sm dark:text-white/70">
              {label}
            </dt>
            <dd className="text-title font-semibold dark:text-white">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </FormSection>
  );
};
