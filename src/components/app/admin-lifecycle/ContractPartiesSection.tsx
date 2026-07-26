import { LifecycleDetailField } from "./LifecycleDetailField";
import {
  ContractDetail,
  contractDetailCopy,
} from "./contract-detail-helpers";

export const ContractPartiesSection = ({
  contract,
  lang,
}: {
  contract: ContractDetail;
  lang: string;
}) => {
  const copy = contractDetailCopy(lang);
  return (
    <section className="rounded-2xl bg-white p-6 dark:bg-black">
      <h2 className="mb-4 text-lg font-bold">{copy.parties}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <LifecycleDetailField
          label={copy.contractNumber}
          value={contract.publicId ?? copy.empty}
        />
        <LifecycleDetailField
          label={copy.adName}
          value={contract.conversation.listing.name}
        />
        <LifecycleDetailField
          label={copy.clientName}
          value={contract.client.name ?? copy.empty}
        />
        <LifecycleDetailField
          label={copy.clientPhone}
          value={contract.client.phone}
          dir="ltr"
        />
        <LifecycleDetailField
          label={copy.tradeName}
          value={contract.provider.commercialName ?? copy.empty}
        />
        <LifecycleDetailField
          label={copy.providerPhone}
          value={contract.provider.phone}
          dir="ltr"
        />
        <LifecycleDetailField
          label={copy.clientLocation}
          value={contract.customerAddress || copy.empty}
          className="md:col-span-2"
        />
        <LifecycleDetailField
          label={copy.providerLocation}
          value={contract.providerAddress || copy.empty}
          className="md:col-span-2"
        />
      </div>
    </section>
  );
};
