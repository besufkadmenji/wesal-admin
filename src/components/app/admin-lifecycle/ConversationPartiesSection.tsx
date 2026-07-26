import { LifecycleDetailField } from "./LifecycleDetailField";
import {
  ConversationDetail,
  conversationDetailCopy,
} from "./conversation-detail-helpers";

export const ConversationPartiesSection = ({
  conversation,
  lang,
}: {
  conversation: ConversationDetail;
  lang: string;
}) => {
  const copy = conversationDetailCopy(lang);
  return (
    <section className="rounded-2xl bg-white p-6 dark:bg-black">
      <h2 className="mb-4 text-lg font-bold">{copy.parties}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <LifecycleDetailField
          label={copy.customerName}
          value={conversation.user.name ?? copy.empty}
        />
        <LifecycleDetailField
          label={copy.customerPhone}
          value={conversation.user.phone}
          dir="ltr"
        />
        <LifecycleDetailField
          label={copy.tradeName}
          value={conversation.provider.commercialName ?? copy.empty}
        />
        <LifecycleDetailField
          label={copy.providerPhone}
          value={conversation.provider.phone}
          dir="ltr"
        />
        <LifecycleDetailField
          label={copy.listing}
          value={conversation.listing.name}
          className="md:col-span-2"
        />
      </div>
    </section>
  );
};
