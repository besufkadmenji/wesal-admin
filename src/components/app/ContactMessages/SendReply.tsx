import { useContactMessages } from "@/components/app/ContactMessages/useContactMessage";
import { useManageContactMessage } from "@/components/app/ContactMessages/useManageContactMessage";
import { AppDialog } from "@/components/app/shared/dialogs/AppDialog";
import { DialogActions } from "@/components/app/shared/dialogs/DialogActions";
import { FormAreaInput } from "@/components/app/shared/forms/FormAreaInput";
import { ContactMessage } from "@/gql/graphql";
import { useDict } from "@/hooks/useDict";
import { Reply } from "lucide-react";
import { useParams } from "next/navigation";
import { useQueryState } from "nuqs";
import { useState } from "react";
import { useAppRouter } from "@/hooks/useAppRouter";

export const SendReply = ({ message }: { message?: ContactMessage }) => {
  const [sendReply, setSendReply] = useQueryState("sendReply");
  const { data, isLoading } = useContactMessages();
  const replyMessage =
    message ?? data?.items.find((item) => item.id === sendReply);
  const isOpen = !!replyMessage;
  const dict = useDict();
  const [reply, setReply] = useState("");
  const params = useParams();
  const router = useAppRouter();
  const { replyContactMessage, busy } = useManageContactMessage();
  const close = () => {
    router.back();
    return setSendReply(null);
  };
  return (
    <AppDialog
      isOpen={isOpen}
      onClose={close}
      tone="primary"
      icon={Reply}
      title={dict.reply_message_form.title}
      description={dict.reply_message_form.description}
      isBusy={busy}
      actions={
        <DialogActions
          tone="primary"
          confirmLabel={dict.reply_message_form.buttons.send}
          cancelLabel={dict.reply_message_form.buttons.cancel}
          onConfirm={() => {
            if (!reply.trim()) return;
            replyContactMessage(replyMessage?.id || "", reply);
            setReply("");
          }}
          onCancel={close}
          isBusy={busy}
        />
      }
    >
      <FormAreaInput
        label={dict.reply_message_form.labels.message_content}
        placeholder={dict.reply_message_form.labels.message_content}
        value={reply}
        onChange={(value: string): void => setReply(value)}
        minRows={5}
      />
    </AppDialog>
  );
};
