import { ReasonDialog } from "@/components/app/shared/dialogs/ReasonDialog";
import { Provider } from "@/gql/graphql";
import { useDict } from "@/hooks/useDict";
import { UserX } from "lucide-react";
import { useQueryState } from "nuqs";
import { useManageProvider } from "./useManageProvider";

/** Opens with `?showRejectModal`; the hook closes it after a rejection. */
export const RejectReasonModal = ({
  request,
}: {
  request: Pick<Provider, "id">;
}) => {
  const [showRejectModal, setShowRejectModal] =
    useQueryState("showRejectModal");
  const dict = useDict();
  const { rejectProvider, busy } = useManageProvider();
  const copy = dict.reject_subscription_form;

  return (
    <ReasonDialog
      isOpen={!!showRejectModal}
      // UI-8: closing used to navigate to a missing /subscribers/requests.
      onClose={() => setShowRejectModal(null)}
      onConfirm={(reason) => {
        rejectProvider(request.id, reason);
      }}
      busy={busy}
      autoClose={false}
      tone="danger"
      icon={UserX}
      title={copy.title}
      reasonLabel={copy.labels.reason}
      reasonPlaceholder={copy.placeholders.reason}
      confirmLabel={copy.buttons.send}
    />
  );
};
