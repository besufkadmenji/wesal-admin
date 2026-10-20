"use client";

import { DetailSkeleton } from "@/components/app/shared/states/DetailSkeleton";
import { DetailUnavailable } from "@/components/app/shared/states/DetailUnavailable";

import { PageBar } from "@/components/app/shared/PageBar";
import { PageWrapper } from "@/components/app/shared/PageWrapper";
import { AppLink } from "@/components/app/shared/NoPrefetchLink";
import { AdminLifecycleService } from "@/services/admin-lifecycle.service";
import { useQuery } from "@tanstack/react-query";

import { PermissionGate } from "./PermissionGate";
import { useCanAccess } from "@/hooks/useCanAccess";
import { useLang } from "@/hooks/useLang";
import {
  ConversationDetail,
  conversationDetailCopy,
} from "./conversation-detail-helpers";
import { ConversationDetailSummary } from "./ConversationDetailSummary";
import { ConversationPartiesSection } from "./ConversationPartiesSection";
import { ConversationDatesSection } from "./ConversationDatesSection";
import { ConversationRelatedSection } from "./ConversationRelatedSection";
import { ConversationMessagesSection } from "./ConversationMessagesSection";

export const ConversationDetailPage = ({ id }: { id: string }) => {
  const lang = useLang();
  const copy = conversationDetailCopy(lang);
  const allowed = useCanAccess("conversation", "read");
  const query = useQuery({
    queryKey: ["admin-conversation", id],
    queryFn: async () =>
      (await AdminLifecycleService.conversation(id)) as ConversationDetail,
    enabled: allowed,
  });

  // UI-10: skeleton while loading; a missing or failed record is not a
  // spinner forever.
  if (query.isLoading || !query.data) {
    return (
      <PageWrapper>
        {query.isLoading ? (
          <DetailSkeleton />
        ) : (
          <DetailUnavailable
            onRetry={() => void query.refetch()}
            backHref="/conversations"
          />
        )}
      </PageWrapper>
    );
  }

  const conversation = query.data;
  const primaryContract = conversation.contracts[0];
  const primaryComplaint = conversation.complaints[0];

  return (
    <PermissionGate resource="conversation">
      <PageWrapper>
        <PageBar title={`Conversation #${conversation.publicId ?? "—"}`}>
          {primaryContract && (
            <AppLink
              href={`/contracts/${primaryContract.id}`}
              className="text-app-primary text-sm font-medium"
            >
              {copy.viewContract}
              {primaryContract.publicId != null
                ? ` #${primaryContract.publicId}`
                : ""}
            </AppLink>
          )}
          {primaryComplaint && (
            <AppLink
              href={`/complaints/${primaryComplaint.id}`}
              className="text-app-primary text-sm font-medium"
            >
              {copy.viewComplaint}
              {primaryComplaint.publicId != null
                ? ` #${primaryComplaint.publicId}`
                : ""}
            </AppLink>
          )}
        </PageBar>
        <div className="grid gap-6 py-8">
          <ConversationDetailSummary conversation={conversation} lang={lang} />
          <ConversationPartiesSection conversation={conversation} lang={lang} />
          <ConversationDatesSection conversation={conversation} lang={lang} />
          <ConversationRelatedSection conversation={conversation} lang={lang} />
          <ConversationMessagesSection
            messages={conversation.messages}
            lang={lang}
          />
        </div>
      </PageWrapper>
    </PermissionGate>
  );
};
