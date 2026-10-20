import { DetailCard } from "@/components/app/shared/detail/DetailCard";
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
    <DetailCard title={copy.parties}>
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
    </DetailCard>
  );
};
