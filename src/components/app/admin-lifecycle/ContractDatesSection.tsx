import { LifecycleDetailField } from "./LifecycleDetailField";
import {
  ContractDetail,
  contractDetailCopy,
  formatContractDate,
  showAcceptanceDate,
  showCancellationDetails,
  showCompletionDate,
  showDisputeReason,
} from "./contract-detail-helpers";

export const ContractDatesSection = ({
  contract,
  lang,
}: {
  contract: ContractDetail;
  lang: string;
}) => {
  const copy = contractDetailCopy(lang);
  const acceptance = showAcceptanceDate(contract.status);
  const cancellation = showCancellationDetails(contract.status);
  const completion = showCompletionDate(contract.status);
  const disputed = showDisputeReason(contract.status);
  if (!acceptance && !cancellation && !completion && !disputed) {
    return null;
  }
  return (
    <section className="rounded-2xl bg-white p-6 dark:bg-black">
      <h2 className="mb-4 text-lg font-bold">{copy.dates}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {acceptance && (
          <LifecycleDetailField
            label={copy.acceptanceDate}
            value={formatContractDate(contract.acceptedAt, lang) ?? copy.empty}
          />
        )}
        {cancellation && (
          <>
            <LifecycleDetailField
              label={copy.cancellationDate}
              value={
                formatContractDate(contract.cancelledAt, lang) ?? copy.empty
              }
            />
            <LifecycleDetailField
              label={copy.cancellationReason}
              value={contract.cancellationReason || copy.empty}
              className="md:col-span-2"
            />
          </>
        )}
        {completion && (
          <LifecycleDetailField
            label={copy.completionDate}
            value={formatContractDate(contract.completedAt, lang) ?? copy.empty}
          />
        )}
        {disputed && (
          <LifecycleDetailField
            label={copy.disputeReason}
            value={contract.disputeReason || copy.empty}
            className="md:col-span-2"
          />
        )}
      </div>
    </section>
  );
};
