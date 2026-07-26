"use client";

import { Button, Textarea } from "@heroui/react";
import {
  ComplaintMessage,
  complaintDetailCopy,
} from "./complaint-detail-helpers";
import { ComplaintMessageBubble } from "./ComplaintMessageBubble";

export const ComplaintMessagesSection = ({
  messages,
  lang,
  terminal,
  reply,
  onReplyChange,
  replyPending,
  onSendReply,
}: {
  messages: ComplaintMessage[] | null | undefined;
  lang: string;
  terminal: boolean;
  reply: string;
  onReplyChange: (value: string) => void;
  replyPending: boolean;
  onSendReply: () => void;
}) => {
  const copy = complaintDetailCopy(lang);
  const items = messages ?? [];
  return (
    <section className="rounded-2xl bg-white p-6 dark:bg-black">
      <h2 className="mb-4 text-lg font-bold">{copy.messages}</h2>
      <div className="bg-gray-background/40 flex max-h-[32rem] flex-col gap-4 overflow-y-auto rounded-2xl p-4 md:p-6">
        {items.map((message) => (
          <ComplaintMessageBubble
            key={message.id}
            message={message}
            lang={lang}
          />
        ))}
        {!items.length && (
          <p className="text-gray py-8 text-center">{copy.noMessages}</p>
        )}
      </div>
      {!terminal && (
        <div className="mt-4 grid gap-3">
          <Textarea
            label={copy.replyLabel}
            value={reply}
            onValueChange={onReplyChange}
            minRows={4}
          />
          <Button
            color="primary"
            isLoading={replyPending}
            isDisabled={!reply.trim()}
            onPress={onSendReply}
          >
            {copy.sendReply}
          </Button>
        </div>
      )}
      {terminal && <p className="text-gray mt-4">{copy.threadClosed}</p>}
    </section>
  );
};
