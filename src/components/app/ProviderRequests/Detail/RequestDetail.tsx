"use client";

import { DocumentDisplay } from "@/components/app/ProviderRequests/Detail/DocumentDisplay";
import { RejectReasonModal } from "@/components/app/ProviderRequests/Detail/RejectReasonModal";
import { RequestAction } from "@/components/app/ProviderRequests/Detail/RequestAction";
import { SuccessModal } from "@/components/app/ProviderRequests/Detail/SuccessModal";
import { UserRole, UserStatus } from "@/gql/graphql";
import { useDict } from "@/hooks/useDict";
import { useRouter } from "next/navigation";
import { AppLoading } from "../../shared/AppLoading";
import { AppForm, FormSection, FormType } from "../../shared/forms/AppForm";
import { FormInput } from "../../shared/forms/FormInput";
import { FormSelect } from "../../shared/forms/FormSelect";
import { useUser } from "../useUser";
import { useEffect } from "react";

export const RequestDetail = ({ id }: { id: string }) => {
  const dict = useDict();
  const router = useRouter();
  const { data: request } = useUser(id);
  console.log("Category Data:", request, id);
  useEffect(() => {
    if (request && request.status !== UserStatus.PendingApproval) {
      router.replace(`/providers/requests`);
    }
    return () => {};
  }, [router, request]);

  return !request || request.status !== UserStatus.PendingApproval ? (
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
              <FormSelect
                label={dict.subscription_request_detail_page.labels.type}
                placeholder={dict.subscription_request_detail_page.labels.type}
                value={request.role}
                onChange={(value: string): void => {}}
                options={[
                  {
                    key: UserRole.Provider,
                    label: dict.common.serviceProvider,
                  },
                ]}
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
              {/* <div className="col-start-1 col-end-3 grid justify-center p-10">
                <DocumentDisplay documentPath={request.avatarFilename ?? "-"} />
              </div> */}
            </div>
          </FormSection>
        </AppForm>
      </div>
      <SuccessModal />
      <RejectReasonModal request={request} />
    </>
  );
};
