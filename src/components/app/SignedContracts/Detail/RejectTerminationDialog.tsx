import { useDict } from "@/hooks/useDict";
import { Button, Modal, ModalContent } from "@heroui/react";
import { FileX2 } from "lucide-react";
import { useState } from "react";
import { useSignSignature } from "./useSignSignature";

/** S4-58: reject a termination request with a reason the provider sees. */
export const RejectTerminationDialog = ({
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
  const { rejectTermination, busy } = useSignSignature();
  const [reason, setReason] = useState("");
  return (
    <Modal isOpen={isOpen} onOpenChange={(open) => !open && onClose()}>
      <ModalContent className="min-w-[min(42vw,40rem)] p-0">
        <div className="grid grid-cols-[auto_1fr] gap-6 px-6 py-10">
          <div className="bg-accent-soft text-primary grid size-15 place-items-center rounded-2xl dark:text-white">
            <FileX2 aria-hidden className="size-7" strokeWidth={1.75} />
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <h3 className="text-primary text-xl leading-8 font-semibold dark:text-white">
                {copy.rejectTitle}
              </h3>
              <p className="text-subTitle dark:text-dark-subTitle leading-7">
                {copy.rejectMessage}
              </p>
            </div>
            <textarea
              aria-label={copy.rejectTitle}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="focus:border-primary placeholder:text-gray h-30 resize-none rounded-[20px] border border-[#F2F2F2] p-4 text-black outline-none placeholder:text-sm dark:border-white/10 dark:bg-transparent dark:text-white"
              placeholder={copy.rejectPlaceholder}
            />
            <div className="mt-3 grid grid-cols-2 gap-6">
              <Button
                className="bg-primary h-12.5 rounded-full font-semibold text-white dark:bg-[#6474a6]"
                isLoading={busy}
                onPress={() => {
                  void rejectTermination(providerId, reason).then((ok) => {
                    if (ok) {
                      setReason("");
                      onClose();
                    }
                  });
                }}
              >
                {copy.reject}
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
