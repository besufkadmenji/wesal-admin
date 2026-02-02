import { Provider } from "@/gql/graphql";
import { useDict } from "@/hooks/useDict";
import { Modal, ModalContent } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useQueryState } from "nuqs";
import { useState } from "react";
import { PrimaryButton } from "../../shared/button/PrimaryButton";
import { FormAreaInput } from "../../shared/forms/FormAreaInput";
import { useManageProvider } from "./useManageProvider";
export const RejectReasonModal = ({ request }: { request: Provider }) => {
  const [showRejectModal, setShowRejectModal] =
    useQueryState("showRejectModal");
  const dict = useDict();
  const router = useRouter();
  const [reason, setReason] = useState("");
  const { deactivateProvider, busy } = useManageProvider();

  return (
    <Modal
      isOpen={!!showRejectModal}
      onClose={() => {
        router.push(`/subscribers/requests`);
      }}
      hideCloseButton
      size="md"
      isDismissable={true}
    >
      <ModalContent className="p-6">
        <div className="grid grid-cols-1 justify-items-center gap-6">
          <h1 className="text-center text-lg leading-6 font-bold text-[#1E1E1E]">
            {dict.reject_subscription_form.title}
          </h1>
          <FormAreaInput
            label={dict.reject_subscription_form.labels.reason}
            placeholder={dict.reject_subscription_form.placeholders.reason}
            value={reason}
            onChange={(value: string): void => {
              setReason(value);
            }}
            className="w-full"
          />
          <PrimaryButton
            className="w-full"
            isDisabled={!reason.trim() || busy}
            isLoading={busy}
            onPress={() => {
              deactivateProvider(request.id, reason);
            }}
          >
            {dict.reject_subscription_form.buttons.send}
          </PrimaryButton>
        </div>
      </ModalContent>
    </Modal>
  );
};
