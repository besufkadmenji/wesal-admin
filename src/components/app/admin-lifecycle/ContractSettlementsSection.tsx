import { lifecycleEnumLabel } from "./lifecycle-enum-labels";
import {
  ContractSettlement,
  contractDetailCopy,
  formatContractMoney,
} from "./contract-detail-helpers";

export const ContractSettlementsSection = ({
  settlements,
  lang,
}: {
  settlements: ContractSettlement[] | null | undefined;
  lang: string;
}) => {
  const copy = contractDetailCopy(lang);
  const items = settlements ?? [];
  return (
    <section className="rounded-2xl bg-white p-6 dark:bg-black">
      <h2 className="mb-4 text-lg font-bold">{copy.settlements}</h2>
      {items.map((settlement) => (
        <div
          key={settlement.id}
          className="border-gray-background flex justify-between border-b py-3 last:border-0"
        >
          <span>{lifecycleEnumLabel(settlement.type, lang)}</span>
          <strong>{formatContractMoney(settlement.amount, lang)}</strong>
        </div>
      ))}
      {!items.length && <p className="text-gray">{copy.noSettlements}</p>}
    </section>
  );
};
