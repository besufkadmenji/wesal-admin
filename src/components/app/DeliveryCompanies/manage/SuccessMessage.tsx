import { SuccessDialog } from "@/components/app/shared/dialogs/SuccessDialog";
import { useAppRouter } from "@/hooks/useAppRouter";
import { useDict } from "@/hooks/useDict";
import { useQueryState } from "nuqs";

export const SuccessMessage = () => {
  const [showSuccess] = useQueryState("showSuccess");
  const router = useAppRouter();
  const dict = useDict();
  return (
    <SuccessDialog
      isOpen={!!showSuccess}
      onClose={() => router.push("/delivery-companies")}
      title={dict.delivery_companies_page.messages.createSuccess}
      actionLabel={dict.common.actions.confirm}
    />
  );
};
