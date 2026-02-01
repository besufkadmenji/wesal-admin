import { useDict } from "@/hooks/useDict";
import { DeactivateModal } from "../../shared/DeactivateModal";
import { useManageListing } from "./useManageListing";

export const DeactivateListing = () => {
  const dict = useDict();
  const { deactivateListing, busy } = useManageListing();

  return (
    <DeactivateModal
      queryParamName="deactivateListing"
      onConfirm={deactivateListing}
      busy={busy}
      title={dict.deactivate_listing_reason_form.title}
      description={dict.deactivate_listing_reason_form.description}
      showReason={true}
      reasonLabel={
        dict.deactivate_listing_reason_form.labels.deactivation_reason
      }
      reasonPlaceholder={
        dict.deactivate_listing_reason_form.placeholders.deactivation_reason
      }
    />
  );
};
