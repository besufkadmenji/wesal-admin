import { useDict } from "@/hooks/useDict";
import { ActivateModal } from "../../shared/ActivateModal";
import {
  useManageDeliveryCompany
} from "./useManageDeliveryCompany";

export const ActivateDeliveryCompany = () => {
  const dict = useDict();
  const { activateDeliveryCompany, busy } = useManageDeliveryCompany();

  return (
    <ActivateModal
      queryParamName="activateDeliveryCompany"
      onConfirm={activateDeliveryCompany}
      busy={busy}
      title={dict.activate_delivery_companies_confirmation.title}
      description={dict.activate_delivery_companies_confirmation.description}
    />
  );
};
