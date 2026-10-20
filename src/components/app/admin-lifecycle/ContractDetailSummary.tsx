import { DetailCard } from "@/components/app/shared/detail/DetailCard";
import { LifecycleStatusBadge } from "./LifecycleStatusBadge";
import { LifecycleDetailField } from "./LifecycleDetailField";
import {
  ContractDetail,
  contractDetailCopy,
  formatContractMoney,
} from "./contract-detail-helpers";

export const ContractDetailSummary = ({
  contract,
  lang,
}: {
  contract: ContractDetail;
  lang: string;
}) => {
  const copy = contractDetailCopy(lang);
  return (
    <DetailCard className="grid gap-4 md:grid-cols-4">
      <LifecycleDetailField
        label={copy.status}
        value={<LifecycleStatusBadge status={contract.status} lang={lang} />}
      />
      <LifecycleDetailField label={copy.version} value={contract.version} />
      <LifecycleDetailField
        label={copy.totalPaid}
        value={formatContractMoney(contract.totalPayable, lang)}
      />
      <LifecycleDetailField
        label={copy.providerNet}
        value={formatContractMoney(contract.providerNetAmount, lang)}
      />
    </DetailCard>
  );
};
