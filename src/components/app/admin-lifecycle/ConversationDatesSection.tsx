import { LifecycleDetailField } from "./LifecycleDetailField";
import {
  ConversationDetail,
  conversationDetailCopy,
  formatConversationDate,
  showClosedAt,
} from "./conversation-detail-helpers";

export const ConversationDatesSection = ({
  conversation,
  lang,
}: {
  conversation: ConversationDetail;
  lang: string;
}) => {
  const copy = conversationDetailCopy(lang);
  return (
    <section className="rounded-2xl bg-white p-6 dark:bg-black">
      <h2 className="mb-4 text-lg font-bold">{copy.dates}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <LifecycleDetailField
          label={copy.createdAt}
          value={
            formatConversationDate(conversation.createdAt, lang) ?? copy.empty
          }
        />
        {showClosedAt(conversation.status, conversation.closedAt) && (
          <LifecycleDetailField
            label={copy.closedAt}
            value={
              formatConversationDate(conversation.closedAt, lang) ?? copy.empty
            }
          />
        )}
        <LifecycleDetailField
          label={copy.customerFeePaidAt}
          value={
            formatConversationDate(conversation.customerFeePaidAt, lang) ??
            copy.empty
          }
        />
        <LifecycleDetailField
          label={copy.providerFeePaidAt}
          value={
            formatConversationDate(conversation.providerFeePaidAt, lang) ??
            copy.empty
          }
        />
      </div>
    </section>
  );
};
