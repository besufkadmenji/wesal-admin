import { useDict } from "@/hooks/useDict";
import { ActivateModal } from "../../shared/ActivateModal";
import { useManageListing } from "./useManageListing";

export const ActivateListing = () => {
  const dict = useDict();
  const { activateListing, busy } = useManageListing();

  return (
    <ActivateModal
      queryParamName="activateListing"
      onConfirm={activateListing}
      busy={busy}
      title={dict.activate_listing_confirmation.title}
      description={dict.activate_listing_confirmation.description}
    />
  );
};
