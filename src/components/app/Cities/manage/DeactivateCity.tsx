import { useDict } from "@/hooks/useDict";
import { DeactivateModal } from "../../shared/DeactivateModal";
import { useManageCity } from "./useManageCity";

export const DeactivateCity = () => {
  const dict = useDict();
  const { deactivateCity, busy } = useManageCity();

  return (
    <DeactivateModal
      queryParamName="deactivateCity"
      onConfirm={(id) => deactivateCity(id)}
      busy={busy}
      title={dict.deactivate_city_confirmation.title}
      description={dict.deactivate_city_confirmation.description}
      showReason={true}
    />
  );
};
