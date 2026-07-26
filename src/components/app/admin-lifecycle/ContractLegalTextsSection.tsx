import {
  ContractDetail,
  contractDetailCopy,
} from "./contract-detail-helpers";

export const ContractLegalTextsSection = ({
  contract,
  lang,
}: {
  contract: ContractDetail;
  lang: string;
}) => {
  const copy = contractDetailCopy(lang);
  const undertaking =
    lang === "ar" ? contract.undertakingTextAr : contract.undertakingTextEn;
  const refundPolicy =
    lang === "ar" ? contract.refundPolicyAr : contract.refundPolicyEn;
  return (
    <section className="grid gap-6 rounded-2xl bg-white p-6 dark:bg-black">
      <h2 className="text-lg font-bold">{copy.legalTexts}</h2>
      <div className="grid gap-2">
        <h3 className="font-semibold">{copy.bindingText}</h3>
        <p className="text-gray whitespace-pre-wrap">
          {contract.contractDocumentText || copy.empty}
        </p>
      </div>
      <div className="grid gap-2">
        <h3 className="font-semibold">{copy.undertakingText}</h3>
        <p className="text-gray whitespace-pre-wrap">
          {undertaking || copy.empty}
        </p>
      </div>
      <div className="grid gap-2">
        <h3 className="font-semibold">{copy.refundPolicy}</h3>
        <p className="text-gray whitespace-pre-wrap">
          {refundPolicy || copy.empty}
        </p>
      </div>
    </section>
  );
};
