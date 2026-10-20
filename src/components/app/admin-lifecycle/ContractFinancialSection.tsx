import { DetailCard } from "@/components/app/shared/detail/DetailCard";
import { LifecycleDetailField } from "./LifecycleDetailField";
import {
  ContractDetail,
  contractDetailCopy,
  formatContractMoney,
  formatContractPercent,
} from "./contract-detail-helpers";

export const ContractFinancialSection = ({
  contract,
  lang,
}: {
  contract: ContractDetail;
  lang: string;
}) => {
  const copy = contractDetailCopy(lang);
  const deliveryCompany =
    lang === "ar"
      ? contract.deliveryCompanyNameAr
      : contract.deliveryCompanyNameEn;
  return (
    <DetailCard title={copy.financial}>
      <div className="grid gap-4 md:grid-cols-2">
        <LifecycleDetailField
          label={copy.agreedPrice}
          value={formatContractMoney(contract.agreedPrice, lang)}
        />
        <LifecycleDetailField
          label={copy.depositPercent}
          value={formatContractPercent(contract.depositPercent, lang)}
        />
        <LifecycleDetailField
          label={copy.depositAmount}
          value={formatContractMoney(contract.downPayment, lang)}
        />
        <LifecycleDetailField
          label={copy.commissionPercent}
          value={formatContractPercent(contract.commissionPercent, lang)}
        />
        <LifecycleDetailField
          label={copy.commissionAmount}
          value={formatContractMoney(contract.commissionAmount, lang)}
        />
        {contract.isCharity && (
          <LifecycleDetailField
            label={copy.charityAmount}
            value={formatContractMoney(contract.charityAmount, lang)}
          />
        )}
        <LifecycleDetailField
          label={copy.vat}
          value={formatContractMoney(contract.vatAmount, lang)}
        />
        <LifecycleDetailField
          label={copy.deliveryCompany}
          value={deliveryCompany || copy.empty}
        />
        <LifecycleDetailField
          label={copy.executionHours}
          value={contract.executionHours ?? copy.empty}
        />
        <LifecycleDetailField
          label={copy.deliveryHours}
          value={contract.deliveryHours ?? copy.empty}
        />
      </div>
    </DetailCard>
  );
};
