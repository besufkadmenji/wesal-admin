import {
  ConversationMessage,
  conversationDetailCopy,
} from "./conversation-detail-helpers";
import { ConversationMessageBubble } from "./ConversationMessageBubble";

export const ConversationMessagesSection = ({
  messages,
  lang,
}: {
  messages: ConversationMessage[] | null | undefined;
  lang: string;
}) => {
  const copy = conversationDetailCopy(lang);
  const items = messages ?? [];
  return (
    <section className="rounded-2xl bg-white p-6 dark:bg-black">
      <h2 className="mb-4 text-lg font-bold">{copy.messages}</h2>
      <div className="bg-gray-background/40 flex max-h-[32rem] flex-col gap-4 overflow-y-auto rounded-2xl p-4 md:p-6">
        {items.map((message) => (
          <ConversationMessageBubble
            key={message.id}
            message={message}
            lang={lang}
          />
        ))}
        {!items.length && (
          <p className="text-gray py-8 text-center">{copy.noMessages}</p>
        )}
      </div>
    </section>
  );
};
