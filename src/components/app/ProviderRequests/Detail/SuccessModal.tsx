import { SuccessDialog } from "@/components/app/shared/dialogs/SuccessDialog";
import { useAppRouter } from "@/hooks/useAppRouter";
import { useDict } from "@/hooks/useDict";
import { useQueryState } from "nuqs";

export const SuccessModal = () => {
  const [showSuccess] = useQueryState("showSuccessMessage");
  const dict = useDict();
  const router = useAppRouter();

  return (
    <SuccessDialog
      isOpen={!!showSuccess}
      // UI-8: back to the join requests (was a missing /subscribers route).
      onClose={() => router.push("/providers/requests")}
      title={dict.messages.success.subscription_approved}
      actionLabel={dict.common.actions.confirm}
    />
  );
};
