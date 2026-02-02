"use client";

import { RejectReasonModal } from "@/components/app/ProviderRequests/Detail/RejectReasonModal";
import { RequestAction } from "@/components/app/ProviderRequests/Detail/RequestAction";
import { SuccessModal } from "@/components/app/ProviderRequests/Detail/SuccessModal";
import { ProviderStatus } from "@/gql/graphql";
import { useDict } from "@/hooks/useDict";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AppLoading } from "../../shared/AppLoading";
import { AppForm, FormSection, FormType } from "../../shared/forms/AppForm";
import { FormInput } from "../../shared/forms/FormInput";
import { useProvider } from "../useProvider";
import { DocumentDisplay } from "./DocumentDisplay";
import { dataUrl } from "@/config/url";

export const RequestDetail = ({ id }: { id: string }) => {
  const dict = useDict();
  const router = useRouter();
  const { data: request } = useProvider(id);
  console.log("Category Data:", request, id);
  useEffect(() => {
    if (request && request.status !== ProviderStatus.PendingApproval) {
      router.replace(`/providers/requests`);
    }
    return () => {};
  }, [router, request]);

  return !request || request.status !== ProviderStatus.PendingApproval ? (
    <AppLoading className="h-[84vh]" />
  ) : (
    <>
      <div className="grid grid-cols-1">
        <AppForm
          type={FormType.SubscriberRequests}
          action="view"
          titleChildren={<RequestAction request={request} />}
        >
          <FormSection
            title={dict.subscription_request_detail_page.resource_information}
          >
            <div className="grid grid-cols-2 gap-4">
              <FormInput
                label={dict.subscription_request_detail_page.labels.name}
                placeholder={dict.subscription_request_detail_page.labels.name}
                value={request.name ?? "-"}
                onChange={(value: string): void => {}}
                readOnly
              />
              <FormInput
                label={
                  dict.subscription_request_detail_page.labels.phone_number
                }
                placeholder={
                  dict.subscription_request_detail_page.labels.phone_number
                }
                value={request.phone}
                onChange={(value: string): void => {}}
                readOnly
              />
              <FormInput
                label={dict.subscription_request_detail_page.labels.email}
                placeholder={dict.subscription_request_detail_page.labels.email}
                value={request.email}
                onChange={(value: string): void => {}}
                readOnly
              />
              <FormInput
                label={
                  dict.subscription_request_detail_page.labels
                    .commercial_registration_number
                }
                placeholder={
                  dict.subscription_request_detail_page.labels
                    .commercial_registration_number
                }
                value={request.commercialRegistrationNumber || "-"}
                onChange={(value: string): void => {}}
                readOnly
              />
              <div className="col-start-1 col-end-3 grid justify-center p-10">
                <DocumentDisplay
                  documentPath={
                    request.commercialRegistrationFilename
                      ? `${dataUrl}/files/${request.commercialRegistrationFilename}`
                      : "-"
                  }
                />
              </div>
            </div>
          </FormSection>
        </AppForm>
      </div>
      <SuccessModal />
      <RejectReasonModal request={request} />
    </>
  );
};
