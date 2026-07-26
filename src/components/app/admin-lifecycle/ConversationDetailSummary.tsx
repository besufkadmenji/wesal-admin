import { LifecycleStatusBadge } from "./LifecycleStatusBadge";
import { LifecycleDetailField } from "./LifecycleDetailField";
import {
  ConversationDetail,
  conversationDetailCopy,
  conversationStatusLabel,
} from "./conversation-detail-helpers";

export const ConversationDetailSummary = ({
  conversation,
  lang,
}: {
  conversation: ConversationDetail;
  lang: string;
}) => {
  const copy = conversationDetailCopy(lang);
  return (
    <section className="grid gap-4 rounded-2xl bg-white p-6 md:grid-cols-3 dark:bg-black">
      <LifecycleDetailField
        label={copy.status}
        value={
          <LifecycleStatusBadge
            status={conversation.status}
            lang={lang}
            label={conversationStatusLabel(conversation.status, lang)}
          />
        }
      />
      <LifecycleDetailField
        label={copy.conversationNumber}
        value={conversation.publicId ?? copy.empty}
      />
      <LifecycleDetailField
        label={copy.feeCycle}
        value={conversation.feeCycle}
      />
    </section>
  );
};
