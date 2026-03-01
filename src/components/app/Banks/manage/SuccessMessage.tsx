import SuccessIcon from "@/assets/icons/app/check.success.svg";
import { useAppRouter } from "@/hooks/useAppRouter";
import { useDict } from "@/hooks/useDict";
import { Modal, ModalContent } from "@heroui/react";
import { useQueryState } from "nuqs";
export const SuccessMessage = () => {
  const [showSuccess, setShowSuccess] = useQueryState("showSuccess");
  const router = useAppRouter();
  const dict = useDict();
  return (
    <Modal
      isOpen={!!showSuccess}
      onClose={() => {
        router.push("/banks");
      }}
      hideCloseButton
    >
      <ModalContent>
        <div className="grid grid-cols-1 justify-items-center gap-6 p-6">
          <SuccessIcon className="size-20" />
          <p className="text-lg leading-6 font-bold text-[#1E1E1E]">
            {dict.banks_page.messages.createSuccess}
          </p>
        </div>
      </ModalContent>
    </Modal>
  );
};
