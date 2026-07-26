import { lifecycleEnumLabel } from "./lifecycle-enum-labels";
import {
  CONTRACT_SIGNATURE_TYPES,
  ContractDetail,
  contractDetailCopy,
  findSignature,
  formatContractDate,
} from "./contract-detail-helpers";

export const ContractSignaturesSection = ({
  contract,
  lang,
}: {
  contract: ContractDetail;
  lang: string;
}) => {
  const copy = contractDetailCopy(lang);
  return (
    <section className="rounded-2xl bg-white p-6 dark:bg-black">
      <h2 className="mb-4 text-lg font-bold">{copy.signatures}</h2>
      <div className="grid gap-0">
        {CONTRACT_SIGNATURE_TYPES.map((signatureType) => {
          const signature = findSignature(contract.signatures, signatureType);
          return (
            <div
              key={signatureType}
              className="border-gray-background border-b py-3 last:border-0"
            >
              <strong>{lifecycleEnumLabel(signatureType, lang)}</strong>
              <p className="text-gray text-sm">
                {signature
                  ? formatContractDate(signature.signedAt, lang)
                  : copy.unsigned}
              </p>
            </div>
          );
        })}
      </div>
      {contract.document && (
        <p className="text-gray mt-4 text-xs break-all">
          {copy.documentMeta}: v{contract.document.version} · SHA-256{" "}
          {contract.document.sha256}
        </p>
      )}
    </section>
  );
};
