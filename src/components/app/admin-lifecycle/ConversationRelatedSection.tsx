import { DetailCard } from "@/components/app/shared/detail/DetailCard";
import { AppLink } from "@/components/app/shared/NoPrefetchLink";
import { lifecycleEnumLabel } from "./lifecycle-enum-labels";
import {
  ConversationDetail,
  conversationDetailCopy,
} from "./conversation-detail-helpers";

export const ConversationRelatedSection = ({
  conversation,
  lang,
}: {
  conversation: ConversationDetail;
  lang: string;
}) => {
  const copy = conversationDetailCopy(lang);
  return (
    <DetailCard title={copy.related}>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="grid gap-2">
          <h3 className="font-semibold">{copy.contracts}</h3>
          {conversation.contracts.map((contract) => (
            <AppLink
              key={contract.id}
              href={`/contracts/${contract.id}`}
              className="text-app-link"
            >
              #{contract.publicId ?? "—"} ·{" "}
              {lifecycleEnumLabel(contract.status, lang)}
            </AppLink>
          ))}
          {!conversation.contracts.length && (
            <p className="text-gray">{copy.none}</p>
          )}
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">{copy.complaints}</h3>
          {conversation.complaints.map((complaint) => (
            <AppLink
              key={complaint.id}
              href={`/complaints/${complaint.id}`}
              className="text-app-link"
            >
              #{complaint.publicId ?? "—"} ·{" "}
              {lifecycleEnumLabel(complaint.status, lang)}
            </AppLink>
          ))}
          {!conversation.complaints.length && (
            <p className="text-gray">{copy.none}</p>
          )}
        </div>
      </div>
    </DetailCard>
  );
};
