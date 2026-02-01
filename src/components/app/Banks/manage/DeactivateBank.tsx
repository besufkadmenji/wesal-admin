import { useDict } from "@/hooks/useDict";
import { DeactivateModal } from "../../shared/DeactivateModal";
import { useManageBank } from "./useManageBank";

export const DeactivateBank = () => {
  const dict = useDict();
  const { deactivateBank, busy } = useManageBank();

  return (
    <DeactivateModal
      queryParamName="deactivateBank"
      onConfirm={deactivateBank}
      busy={busy}
      title={dict.deactivate_bank_reason_form.title}
      description={dict.deactivate_bank_reason_form.description}
      showReason={true}
      reasonLabel={dict.deactivate_bank_reason_form.labels.deactivation_reason}
      reasonPlaceholder={
        dict.deactivate_bank_reason_form.placeholders.deactivation_reason
      }
    />
  );
};
