import { useDict } from "@/hooks/useDict";
import { Button, Modal, ModalContent } from "@heroui/react";
import { TriangleAlert } from "lucide-react";
import { useSignSignature } from "./useSignSignature";

/** S4-58: confirm approving a termination request (the account is deleted). */
export const ApproveTerminationDialog = ({
  providerId,
  isOpen,
  onClose,
}: {
  providerId: string;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const dict = useDict();
  const copy = dict.contract.terminationRequest;
  const { approveTermination, busy } = useSignSignature();
  return (
    <Modal isOpen={isOpen} onOpenChange={(open) => !open && onClose()}>
      <ModalContent className="min-w-[min(42vw,40rem)] p-0">
        <div className="grid grid-cols-[auto_1fr] gap-6 px-6 py-10">
          <div className="grid size-15 place-items-center rounded-2xl bg-red-50 text-red-700 dark:bg-red-500/15 dark:text-red-300">
            <TriangleAlert aria-hidden className="size-7" strokeWidth={1.75} />
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <h3 className="text-primary text-xl leading-8 font-semibold dark:text-white">
                {copy.approveTitle}
              </h3>
              <p className="text-subTitle dark:text-dark-subTitle leading-7">
                {copy.approveMessage}
              </p>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-6">
              <Button
                className="h-12.5 rounded-full bg-[#B3251E] font-semibold text-white"
                isLoading={busy}
                onPress={() => {
                  void approveTermination(providerId).then((ok) => {
                    if (ok) onClose();
                  });
                }}
              >
                {copy.approve}
              </Button>
              <Button
                className="bg-accent-soft text-primary h-12.5 rounded-full font-semibold dark:text-white"
                isDisabled={busy}
                onPress={onClose}
              >
                {dict.contract.cancelReason.cancel}
              </Button>
            </div>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};
