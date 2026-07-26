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
    <section className="grid gap-4 rounded-2xl bg-white p-6 md:grid-cols-4 dark:bg-black">
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
    </section>
  );
};
