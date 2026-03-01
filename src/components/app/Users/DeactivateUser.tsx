import { useDict } from "@/hooks/useDict";
import { DeactivateModal } from "../shared/DeactivateModal";
import { useManageUser } from "./Detail/useManageUser";

export const DeactivateUser = () => {
  const dict = useDict();
  const { deactivateUser, busy } = useManageUser();

  return (
    <DeactivateModal
      queryParamName="deactivateUser"
      onConfirm={deactivateUser}
      busy={busy}
      title={dict.deactivate_user_reason_form.title}
      description={dict.deactivate_user_reason_form.description}
      showReason={false}
    />
  );
};
