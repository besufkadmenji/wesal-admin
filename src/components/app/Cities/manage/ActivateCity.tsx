import { useDict } from "@/hooks/useDict";
import { ActivateModal } from "../../shared/ActivateModal";
import { useManageCity } from "./useManageCity";

export const ActivateCity = () => {
  const dict = useDict();
  const { activateCity, busy } = useManageCity();

  return (
    <ActivateModal
      queryParamName="activateCity"
      onConfirm={activateCity}
      busy={busy}
      title={dict.activate_city_confirmation.title}
      description={dict.activate_city_confirmation.description}
    />
  );
};
