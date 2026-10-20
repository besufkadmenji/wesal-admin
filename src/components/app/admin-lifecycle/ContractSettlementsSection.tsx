import { DetailCard } from "@/components/app/shared/detail/DetailCard";
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
    <DetailCard title={copy.settlements}>
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
    </DetailCard>
  );
};
