import { useContactMessages } from "@/components/app/ContactMessages/useContactMessage";
import { useManageContactMessage } from "@/components/app/ContactMessages/useManageContactMessage";
import { PrimaryButton } from "@/components/app/shared/button/PrimaryButton";
import { FormAreaInput } from "@/components/app/shared/forms/FormAreaInput";
import { ContactMessage } from "@/gql/graphql";
import { useDict } from "@/hooks/useDict";
import { Modal, ModalContent } from "@heroui/react";
import { useParams, useRouter } from "next/navigation";
import { useQueryState } from "nuqs";
import { useState } from "react";

export const SendReply = ({ message }: { message?: ContactMessage }) => {
  const [sendReply, setSendReply] = useQueryState("sendReply");
  const { data, isLoading } = useContactMessages();
  const replyMessage =
    message ?? data?.items.find((item) => item.id === sendReply);
  const isOpen = !!replyMessage;
  const dict = useDict();
  const [reply, setReply] = useState("");
  const params = useParams();
  const router = useRouter();
  const { replyContactMessage, busy } = useManageContactMessage();
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        router.back();
        return setSendReply(null);
      }}
    >
      <ModalContent>
        <div className="grid grid-cols-1 gap-6 px-10 py-8">
          <div className="grid grid-cols-1 justify-items-center gap-4">
            <h2 className="text-xl leading-7 font-bold text-[#1E1E1E]">
              {dict.reply_message_form.title}
            </h2>
            <p className="text-base font-medium text-[#A5A7A5]">
              {dict.reply_message_form.description}
            </p>
          </div>
          <FormAreaInput
            label={dict.reply_message_form.labels.message_content}
            placeholder={dict.reply_message_form.labels.message_content}
            value={reply}
            onChange={(value: string): void => setReply(value)}
            className="col-span-2"
          />
          <div className="grid grid-cols-2 gap-4">
            <PrimaryButton
              className="bg-dark-gray text-white"
              onPress={() => {
                router.back();
                return setSendReply(null);
              }}
              isDisabled={busy}
            >
              {dict.reply_message_form.buttons.cancel}
            </PrimaryButton>
            <PrimaryButton
              onPress={() => {
                replyContactMessage(replyMessage?.id || "", reply);
                setReply("");
              }}
              isLoading={busy}
              isDisabled={busy || reply === ""}
              className="bg-primary text-white"
            >
              {dict.reply_message_form.buttons.send}
            </PrimaryButton>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};
