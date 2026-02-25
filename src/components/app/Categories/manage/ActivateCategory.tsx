import { useDict } from "@/hooks/useDict";
import { ActivateModal } from "../../shared/ActivateModal";
import { useManageCategory } from "./useManageCategory";

export const ActivateCategory = () => {
  const dict = useDict();
  const { activateCategory, busy } = useManageCategory();

  return (
    <ActivateModal
      queryParamName="activateCategory"
      onConfirm={activateCategory}
      busy={busy}
      title={dict.activate_category_confirmation.title}
      description={dict.activate_category_confirmation.description}
    />
  );
};
