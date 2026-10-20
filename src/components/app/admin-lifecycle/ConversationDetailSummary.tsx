import { DetailCard } from "@/components/app/shared/detail/DetailCard";
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
    <DetailCard className="grid gap-4 md:grid-cols-3">
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
    </DetailCard>
  );
};
