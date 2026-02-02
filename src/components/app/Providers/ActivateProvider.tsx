import { useDict } from "@/hooks/useDict";
import { ActivateModal } from "../shared/ActivateModal";
import { useManageProvider } from "./Detail/useManageProvider";

export const ActivateProvider = () => {
  const dict = useDict();
  const { activateProvider, busy } = useManageProvider();

  return (
    <ActivateModal
      queryParamName="activateProvider"
      onConfirm={activateProvider}
      busy={busy}
      title={dict.activate_provider_confirmation.title}
      description={dict.activate_provider_confirmation.description}
    />
  );
};
