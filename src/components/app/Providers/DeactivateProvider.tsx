import { useDict } from "@/hooks/useDict";
import { DeactivateModal } from "../shared/DeactivateModal";
import { useManageProvider } from "./Detail/useManageProvider";

export const DeactivateProvider = () => {
  const dict = useDict();
  const { deactivateProvider, busy } = useManageProvider();

  return (
    <DeactivateModal
      queryParamName="deactivateProvider"
      onConfirm={deactivateProvider}
      busy={busy}
      title={dict.deactivate_provider_reason_form.title}
      description={dict.deactivate_provider_reason_form.description}
      showReason={true}
      reasonLabel={
        dict.deactivate_provider_reason_form.labels.deactivation_reason
      }
      reasonPlaceholder={
        dict.deactivate_provider_reason_form.placeholders.deactivation_reason
      }
    />
  );
};
