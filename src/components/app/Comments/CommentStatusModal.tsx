import { RatingStatus } from "@/gql/graphql";
import { useDict } from "@/hooks/useDict";
import { Button, Modal, ModalContent } from "@heroui/react";

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
  const copy =
    pending?.status === RatingStatus.Hidden
      ? dict.comments_page.confirm.hide
      : dict.comments_page.confirm.publish;

  return (
    <Modal isOpen={!!pending} onClose={onCancel} hideCloseButton>
      <ModalContent>
        <div className="grid auto-rows-max grid-cols-1 items-center justify-items-center gap-6 px-10 py-8">
          <div className="grid grid-cols-1 justify-items-center gap-4 text-center">
            <h1 className="text-xl font-bold text-[#1E1E1E] dark:text-white">
              {copy.title}
            </h1>
            <p className="text-[#A5A7A5] dark:text-[#A5A7A5]">
              {copy.description}
            </p>
          </div>
          <div className="grid w-full grid-cols-2 gap-4">
            <Button
              className="h-12 rounded-lg bg-[#4285F41A] font-semibold text-[#4285F4]"
              onPress={onCancel}
              isDisabled={busy}
            >
              {dict.common.actions.cancel}
            </Button>
            <Button
              className="bg-app-primary h-12 rounded-lg font-semibold text-white"
              onPress={() => pending && onConfirm(pending)}
              isLoading={busy}
            >
              {copy.action}
            </Button>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};
