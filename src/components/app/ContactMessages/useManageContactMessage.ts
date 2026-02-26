import { useDict } from "@/hooks/useDict";
import ContactMessageService from "@/services/contact.message.service";
import FaqService from "@/services/faq.service";
import { queryClient } from "@/utils/query.client";
import { showErrorMessage, showSuccessMessage } from "@/utils/show.message";
import { useRouter } from "next/navigation";
import { useQueryState } from "nuqs";
import { useState } from "react";

export const useManageContactMessage = () => {
  const [busy, setBusy] = useState(false);
  const router = useRouter();
  const dict = useDict();
  const [isDeleteWarningOpen, setIsDeleteWarningOpen] = useQueryState(
    "isDeleteWarningOpen",
  );
  const [sendReply, setSendReply] = useQueryState("sendReply");

  const deleteContactMessage = async (id: string) => {
    setBusy(true);
    try {
      const success = await ContactMessageService.removeContactMessage(id);
      if (success) {
        showSuccessMessage(dict.contact_message_page.messages.deleteSuccess);
        queryClient.invalidateQueries({
          queryKey: ["contactMessages"],
        });
        queryClient.invalidateQueries({
          queryKey: ["contactMessage", id],
        });
        router.push("/content/contact-messages");
      } else {
        showErrorMessage("Failed to delete contact message.");
      }
    } catch (error) {
      console.error("Delete contact message error:", error);
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
      setIsDeleteWarningOpen(null);
    }
  };

  const replyContactMessage = async (id: string, message: string) => {
    setBusy(true);
    try {
      const success = await ContactMessageService.sendReply(id, message);
      if (success) {
        showSuccessMessage(dict.contact_message_page.messages.replySuccess);
        queryClient.invalidateQueries({
          queryKey: ["contactMessages"],
        });
        queryClient.invalidateQueries({
          queryKey: ["contactMessage", id],
        });
        router.push("/content/contact-messages");
      } else {
        showErrorMessage("Failed to reply to contact message.");
      }
    } catch (error) {
      console.error("Reply to contact message error:", error);
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
      setSendReply(null, { history: "replace" });
      router.back();
    }
  };

  return {
    busy,
    deleteContactMessage,
    replyContactMessage,
  };
};
