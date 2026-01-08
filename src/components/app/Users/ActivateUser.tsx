import { useDict } from "@/hooks/useDict";
import { ActivateModal } from "../shared/ActivateModal";
import { useManageUser } from "./Detail/useManageUser";

export const ActivateUser = () => {
  const dict = useDict();
  const { activateUser, busy } = useManageUser();

  return (
    <ActivateModal
      queryParamName="activateUser"
      onConfirm={activateUser}
      busy={busy}
      title={dict.activate_user_confirmation.title}
      description={dict.activate_user_confirmation.description}
    />
  );
};
