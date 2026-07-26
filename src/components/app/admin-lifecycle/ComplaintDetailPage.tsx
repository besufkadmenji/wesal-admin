"use client";

import { PageBar } from "@/components/app/shared/PageBar";
import { PageWrapper } from "@/components/app/shared/PageWrapper";
import { AppLink } from "@/components/app/shared/NoPrefetchLink";
import { AdminLifecycleService } from "@/services/admin-lifecycle.service";
import { showErrorMessage, showSuccessMessage } from "@/utils/show.message";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Spinner } from "@heroui/react";
import { useState } from "react";
import { PermissionGate } from "./PermissionGate";
import { useCanAccess } from "@/hooks/useCanAccess";
import { ComplaintStatus } from "@/gql/graphql";
import { useLang } from "@/hooks/useLang";
import {
  ComplaintDetail,
  complaintDetailCopy,
  isTerminalComplaintStatus,
} from "./complaint-detail-helpers";
import { ComplaintDetailSummary } from "./ComplaintDetailSummary";
import { ComplaintContentSection } from "./ComplaintContentSection";
import { ComplaintPartiesSection } from "./ComplaintPartiesSection";
import { ComplaintDatesSection } from "./ComplaintDatesSection";
import { ComplaintMessagesSection } from "./ComplaintMessagesSection";

export const ComplaintDetailPage = ({ id }: { id: string }) => {
  const lang = useLang();
  const copy = complaintDetailCopy(lang);
  const queryClient = useQueryClient();
  const [reply, setReply] = useState("");
  const allowed = useCanAccess("complaint", "read");
  const query = useQuery({
    queryKey: ["admin-complaint", id],
    queryFn: async () =>
      (await AdminLifecycleService.complaint(id)) as ComplaintDetail,
    enabled: allowed,
  });
  const refresh = () =>
    queryClient.invalidateQueries({ queryKey: ["admin-complaint", id] });
  const replyMutation = useMutation({
    mutationFn: () => AdminLifecycleService.replyComplaint(id, reply.trim()),
    onSuccess: async () => {
      await refresh();
      setReply("");
      showSuccessMessage(copy.replySent);
    },
    onError: (error) => showErrorMessage(error.message),
  });
  const statusMutation = useMutation({
    mutationFn: (status: ComplaintStatus) =>
      AdminLifecycleService.setComplaintStatus(id, status),
    onSuccess: async () => {
      await refresh();
      showSuccessMessage(copy.statusUpdated);
    },
    onError: (error) => showErrorMessage(error.message),
  });

  if (query.isLoading || !query.data) {
    return (
      <PageWrapper>
        <div className="grid min-h-96 place-content-center">
          <Spinner />
        </div>
      </PageWrapper>
    );
  }

  const complaint = query.data;
  const terminal = isTerminalComplaintStatus(complaint.status);

  return (
    <PermissionGate resource="complaint">
      <PageWrapper>
        <PageBar title={`Complaint #${complaint.publicId ?? "—"}`}>
          <AppLink
            href={`/conversations/${complaint.conversation.id}`}
            className="text-app-primary text-sm font-medium"
          >
            {copy.viewConversation}
            {complaint.conversation.publicId != null
              ? ` #${complaint.conversation.publicId}`
              : ""}
          </AppLink>
          {complaint.contract && (
            <AppLink
              href={`/contracts/${complaint.contract.id}`}
              className="text-app-primary text-sm font-medium"
            >
              {copy.viewContract}
              {complaint.contract.publicId != null
                ? ` #${complaint.contract.publicId}`
                : ""}
            </AppLink>
          )}
        </PageBar>
        <div className="grid gap-6 py-8">
          <ComplaintDetailSummary
            complaint={complaint}
            lang={lang}
            statusPending={statusMutation.isPending}
            onStatusChange={(status) => statusMutation.mutate(status)}
          />
          <ComplaintContentSection complaint={complaint} lang={lang} />
          <ComplaintPartiesSection complaint={complaint} lang={lang} />
          <ComplaintDatesSection complaint={complaint} lang={lang} />
          <ComplaintMessagesSection
            messages={complaint.messages}
            lang={lang}
            terminal={terminal}
            reply={reply}
            onReplyChange={setReply}
            replyPending={replyMutation.isPending}
            onSendReply={() => replyMutation.mutate()}
          />
        </div>
      </PageWrapper>
    </PermissionGate>
  );
};
