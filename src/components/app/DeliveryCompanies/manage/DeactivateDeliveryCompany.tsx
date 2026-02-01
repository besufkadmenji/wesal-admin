import { useDict } from "@/hooks/useDict";
import { DeactivateModal } from "../../shared/DeactivateModal";
import { useManageDeliveryCompany } from "./useManageDeliveryCompany";

export const DeactivateDeliveryCompany = () => {
  const dict = useDict();
  const { deactivateDeliveryCompany, busy } = useManageDeliveryCompany();

  return (
    <DeactivateModal
      queryParamName="deactivateDeliveryCompany"
      onConfirm={deactivateDeliveryCompany}
      busy={busy}
      title={dict.deactivate_delivery_company_reason_form.title}
      description={dict.deactivate_delivery_company_reason_form.description}
      showReason={true}
      reasonLabel={
        dict.deactivate_delivery_company_reason_form.labels.deactivation_reason
      }
      reasonPlaceholder={
        dict.deactivate_delivery_company_reason_form.placeholders
          .deactivation_reason
      }
    />
  );
};
