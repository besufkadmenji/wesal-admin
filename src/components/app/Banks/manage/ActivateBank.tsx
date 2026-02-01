import { useDict } from "@/hooks/useDict";
import { ActivateModal } from "../../shared/ActivateModal";
import { useManageBank } from "./useManageBank";

export const ActivateBank = () => {
  const dict = useDict();
  const { activateBank, busy } = useManageBank();

  return (
    <ActivateModal
      queryParamName="activateBank"
      onConfirm={activateBank}
      busy={busy}
      title={dict.activate_bank_confirmation.title}
      description={dict.activate_bank_confirmation.description}
    />
  );
};
