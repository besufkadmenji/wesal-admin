"use client";

import { DetailSkeleton } from "@/components/app/shared/states/DetailSkeleton";
import { DetailUnavailable } from "@/components/app/shared/states/DetailUnavailable";

import { PageBar } from "@/components/app/shared/PageBar";
import { PageWrapper } from "@/components/app/shared/PageWrapper";
import { AppLink } from "@/components/app/shared/NoPrefetchLink";
import { AdminLifecycleService } from "@/services/admin-lifecycle.service";
import { showErrorMessage, showSuccessMessage } from "@/utils/show.message";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@heroui/react";
import { PermissionGate } from "./PermissionGate";
import { useCanAccess } from "@/hooks/useCanAccess";
import { ContractResolution } from "@/gql/graphql";
import { useLang } from "@/hooks/useLang";
import { ContractDetail, contractDetailCopy } from "./contract-detail-helpers";
import { ContractDetailSummary } from "./ContractDetailSummary";
import { ContractPartiesSection } from "./ContractPartiesSection";
import { ContractFinancialSection } from "./ContractFinancialSection";
import { ContractDatesSection } from "./ContractDatesSection";
import { ContractSignaturesSection } from "./ContractSignaturesSection";
import { ContractLegalTextsSection } from "./ContractLegalTextsSection";
import { ContractAuditsSection } from "./ContractAuditsSection";
import { ContractSettlementsSection } from "./ContractSettlementsSection";
import { ContractResolveSection } from "./ContractResolveSection";

export const ContractDetailPage = ({ id }: { id: string }) => {
  const lang = useLang();
  const copy = contractDetailCopy(lang);
  const queryClient = useQueryClient();
  const allowed = useCanAccess("contract", "read");
  const query = useQuery({
    queryKey: ["admin-contract", id],
    queryFn: async () =>
      (await AdminLifecycleService.contract(id)) as ContractDetail,
    enabled: allowed,
  });
  const resolve = useMutation({
    mutationFn: (input: { resolution: ContractResolution; reason: string }) =>
      AdminLifecycleService.resolveContract({
        contractId: id,
        resolution: input.resolution,
        reason: input.reason,
      }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["admin-contract", id] });
      showSuccessMessage(
        lang === "ar" ? "تم تسجيل حل التعاقد" : "Contract resolution recorded",
      );
    },
    onError: (error) => showErrorMessage(error.message),
  });

  // UI-10: skeleton while loading; a missing or failed record is not a
  // spinner forever.
  // isPending (not isLoading): the query waits for permissions first.
  if (query.isPending || !query.data) {
    return (
      <PageWrapper>
        {query.isPending ? (
          <DetailSkeleton />
        ) : (
          <DetailUnavailable
            onRetry={() => void query.refetch()}
            backHref="/contracts"
          />
        )}
      </PageWrapper>
    );
  }

  const contract = query.data;
  const downloadDocument = async () => {
    const blob = await AdminLifecycleService.download(
      `/contracts/${contract.id}/document`,
    );
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `contract-${contract.publicId ?? contract.id}-v${contract.version}.pdf`;
    anchor.click();
    URL.revokeObjectURL(url);
  };
  // S4-37: internal tax invoice, available once the contract is paid.
  const downloadInvoice = async () => {
    try {
      const blob = await AdminLifecycleService.download(
        `/contracts/${contract.id}/invoice`,
        { language: lang },
      );
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `invoice-INV-${contract.publicId ?? contract.id}.pdf`;
      anchor.click();
      URL.revokeObjectURL(url);
    } catch {
      showErrorMessage(copy.invoiceFailed);
    }
  };
  const canResolve =
    contract.status === "DISPUTED" ||
    (["AWAITING_CUSTOMER_CONFIRMATION", "DELIVERY_IN_PROGRESS"].includes(
      contract.status,
    ) &&
      contract.confirmationDeadlineAt != null &&
      new Date(contract.confirmationDeadlineAt) < new Date());

  return (
    <PermissionGate resource="contract">
      <PageWrapper>
        <PageBar
          title={`${lang === "ar" ? "تعاقد" : "Contract"} #${contract.publicId ?? "—"}`}
        >
          <AppLink
            href={`/conversations/${contract.conversation.id}`}
            className="text-app-link text-sm font-medium"
          >
            {copy.viewConversation}
            {contract.conversation.publicId != null
              ? ` #${contract.conversation.publicId}`
              : ""}
          </AppLink>
          {contract.paidAt && (
            <Button
              variant="bordered"
              className="border-app-primary text-app-link"
              onPress={downloadInvoice}
            >
              {copy.downloadInvoice}
            </Button>
          )}
          {contract.document && (
            <Button color="primary" onPress={downloadDocument}>
              {copy.downloadPdf}
            </Button>
          )}
        </PageBar>
        <div className="grid gap-6 py-8">
          <ContractDetailSummary contract={contract} lang={lang} />
          <ContractPartiesSection contract={contract} lang={lang} />
          <ContractFinancialSection contract={contract} lang={lang} />
          <ContractDatesSection contract={contract} lang={lang} />
          <ContractSignaturesSection contract={contract} lang={lang} />
          <ContractLegalTextsSection contract={contract} lang={lang} />
          <ContractAuditsSection audits={contract.audits} lang={lang} />
          <ContractSettlementsSection
            settlements={contract.settlements}
            lang={lang}
          />
          {canResolve && (
            <ContractResolveSection
              disputed={contract.status === "DISPUTED"}
              lang={lang}
              isPending={resolve.isPending}
              onResolve={(input) => resolve.mutate(input)}
            />
          )}
        </div>
      </PageWrapper>
    </PermissionGate>
  );
};
