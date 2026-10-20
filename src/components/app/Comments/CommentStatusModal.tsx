import { ConfirmDialog } from "@/components/app/shared/dialogs/ConfirmDialog";
import { RatingStatus } from "@/gql/graphql";
import { useDict } from "@/hooks/useDict";
import { Eye, EyeOff } from "lucide-react";

export type PendingStatusChange = { id: string; status: RatingStatus };

export const CommentStatusModal = ({
  pending,
  busy,
  onCancel,
  onConfirm,
}: {
  pending: PendingStatusChange | null;
  busy: boolean;
  onCancel: () => void;
  onConfirm: (change: PendingStatusChange) => void;
}) => {
  const dict = useDict();
  const hiding = pending?.status === RatingStatus.Hidden;
  const copy = hiding
    ? dict.comments_page.confirm.hide
    : dict.comments_page.confirm.publish;

  return (
    <ConfirmDialog
      isOpen={!!pending}
      onClose={onCancel}
      onConfirm={() => {
        if (pending) onConfirm(pending);
      }}
      busy={busy}
      autoClose={false}
      tone={hiding ? "warning" : "success"}
      icon={hiding ? EyeOff : Eye}
      title={copy.title}
      description={copy.description}
      confirmLabel={copy.action}
    />
  );
};
