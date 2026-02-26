"use client";

import { RejectReasonModal } from "@/components/app/ProviderRequests/Detail/RejectReasonModal";
import { RequestAction } from "@/components/app/ProviderRequests/Detail/RequestAction";
import { SuccessModal } from "@/components/app/ProviderRequests/Detail/SuccessModal";
import { ProviderStatus } from "@/gql/graphql";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
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
  const lng = useLang();
  const router = useRouter();
  const { data: request } = useProvider(id);
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
          {/* General Information */}
          <FormSection
            title={dict.subscription_request_detail_page.sections.general_info}
          >
            <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
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
                value={`${request.dialCode ?? ""} ${request.phone}`.trim()}
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
            </div>
          </FormSection>

          {/* Business Information */}
          <FormSection
            title={dict.view_provider_form.sections.business_information}
          >
            <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
              <FormInput
                label={dict.view_provider_form.labels.commercial_name}
                placeholder={dict.view_provider_form.labels.commercial_name}
                value={request.commercialName ?? "-"}
                onChange={(value: string): void => {}}
                className="col-span-2"
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
                value={request.commercialRegistrationNumber ?? "-"}
                onChange={(value: string): void => {}}
                className="col-span-2"
                readOnly
              />
              <FormInput
                label={dict.view_provider_form.labels.city}
                placeholder={dict.view_provider_form.labels.city}
                value={
                  request.city
                    ? lng === "ar"
                      ? request.city.nameAr
                      : request.city.nameEn
                    : "-"
                }
                onChange={(value: string): void => {}}
                readOnly
              />
              <FormInput
                label={dict.view_provider_form.labels.address}
                placeholder={dict.view_provider_form.labels.address}
                value={request.address ?? "-"}
                onChange={(value: string): void => {}}
                readOnly
              />
              {request.bankName && (
                <FormInput
                  label={lng === "ar" ? "اسم البنك" : "Bank Name"}
                  placeholder={lng === "ar" ? "اسم البنك" : "Bank Name"}
                  value={request.bankName}
                  onChange={(value: string): void => {}}
                  readOnly
                />
              )}
              {request.ibanNumber && (
                <FormInput
                  label={lng === "ar" ? "رقم الآيبان" : "IBAN Number"}
                  placeholder={lng === "ar" ? "رقم الآيبان" : "IBAN Number"}
                  value={request.ibanNumber}
                  onChange={(value: string): void => {}}
                  readOnly
                />
              )}
              {request.categories && request.categories.length > 0 && (
                <div className="col-span-2 grid gap-2">
                  <p className="text-sm font-medium text-black">
                    {lng === "ar" ? "الفئات" : "Categories"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {request.categories.map((cat) => (
                      <span
                        key={cat.id}
                        className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium"
                      >
                        {lng === "ar" ? cat.nameAr : cat.nameEn}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {request.withAbsher && (
                <div className="col-span-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                    {lng === "ar"
                      ? "✓ تم التحقق عبر أبشر"
                      : "✓ Verified with Absher"}
                  </span>
                </div>
              )}
            </div>
          </FormSection>

          {/* Commercial Registration Document */}
          <FormSection
            title={
              dict.subscription_request_detail_page.labels
                .commercial_registration_document
            }
          >
            <div className="grid justify-center p-4">
              <DocumentDisplay
                documentPath={
                  request.commercialRegistrationFilename
                    ? `${dataUrl}/files/${request.commercialRegistrationFilename}`
                    : "-"
                }
              />
            </div>
          </FormSection>
        </AppForm>
      </div>
      <SuccessModal />
      <RejectReasonModal request={request} />
    </>
  );
};
