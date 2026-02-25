import { useDict } from "@/hooks/useDict";
import { DeactivateModal } from "../../shared/DeactivateModal";
import { useManageCategory } from "./useManageCategory";

export const DeactivateCategory = () => {
  const dict = useDict();
  const { deactivateCategory, busy } = useManageCategory();

  return (
    <DeactivateModal
      queryParamName="deactivateCategory"
      onConfirm={(id) => deactivateCategory(id)}
      busy={busy}
      title={dict.deactivate_category_confirmation.title}
      description={dict.deactivate_category_confirmation.description}
      showReason={true}
    />
  );
};
