import { lifecycleEnumLabel } from "./lifecycle-enum-labels";
import {
  ContractAudit,
  contractDetailCopy,
  formatContractDate,
} from "./contract-detail-helpers";

export const ContractAuditsSection = ({
  audits,
  lang,
}: {
  audits: ContractAudit[] | null | undefined;
  lang: string;
}) => {
  const copy = contractDetailCopy(lang);
  const items = audits ?? [];
  return (
    <section className="rounded-2xl bg-white p-6 dark:bg-black">
      <h2 className="mb-4 text-lg font-bold">{copy.audits}</h2>
      <div className="grid gap-4">
        {items.map((audit) => (
          <div
            key={audit.id}
            className="border-gray-background border-s-2 ps-4"
          >
            <strong>{lifecycleEnumLabel(audit.action, lang)}</strong>
            <p className="text-sm">
              {lifecycleEnumLabel(audit.previousStatus, lang)} →{" "}
              {lifecycleEnumLabel(audit.newStatus, lang)} ·{" "}
              {lifecycleEnumLabel(audit.actorType, lang)}
            </p>
            {audit.reason && <p className="text-gray">{audit.reason}</p>}
            <time className="text-gray text-xs">
              {formatContractDate(audit.createdAt, lang)}
            </time>
          </div>
        ))}
        {!items.length && <p className="text-gray">{copy.noAudits}</p>}
      </div>
    </section>
  );
};
