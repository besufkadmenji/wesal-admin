import { DetailCard } from "@/components/app/shared/detail/DetailCard";
import { ContractDetail, contractDetailCopy } from "./contract-detail-helpers";

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
    <DetailCard title={copy.legalTexts} className="gap-6">
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
    </DetailCard>
  );
};
