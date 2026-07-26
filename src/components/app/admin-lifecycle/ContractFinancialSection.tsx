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
    <section className="rounded-2xl bg-white p-6 dark:bg-black">
      <h2 className="mb-4 text-lg font-bold">{copy.financial}</h2>
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
        <LifecycleDetailField
          label={copy.vat}
          value={formatContractMoney(contract.vatAmount, lang)}
        />
        <LifecycleDetailField
          label={copy.deliveryCompany}
          value={deliveryCompany || copy.empty}
        />
        <LifecycleDetailField
          label={copy.deliveryEstimate}
          value={
            contract.deliveryEstimateDays != null
              ? contract.deliveryEstimateDays
              : copy.empty
          }
        />
      </div>
    </section>
  );
};
