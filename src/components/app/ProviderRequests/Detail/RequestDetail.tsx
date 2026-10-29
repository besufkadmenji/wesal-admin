"use client";

import { RejectReasonModal } from "@/components/app/ProviderRequests/Detail/RejectReasonModal";
import { formatPhone } from "@/utils/phone";
import { RequestAction } from "@/components/app/ProviderRequests/Detail/RequestAction";
import { SuccessModal } from "@/components/app/ProviderRequests/Detail/SuccessModal";
import { ProviderStatus } from "@/gql/graphql";
import { Tag } from "@/components/app/shared/Tag";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import { useEffect } from "react";
import { DetailGate } from "@/components/app/shared/states/DetailGate";
import { AppForm, FormSection, FormType } from "../../shared/forms/AppForm";
import { FormInput } from "../../shared/forms/FormInput";
import { ProviderLocationMap } from "@/components/app/Providers/Detail/ProviderLocationMap";
import { useProvider } from "../useProvider";
import { DocumentDisplay } from "./DocumentDisplay";
import { dataUrl } from "@/config/url";
import { useAppRouter } from "@/hooks/useAppRouter";

export const RequestDetail = ({ id }: { id: string }) => {
  const dict = useDict();
  const lng = useLang();
  const router = useAppRouter();
  const { data: request, isPending, error, refetch } = useProvider(id);
  useEffect(() => {
    if (request && request.status !== ProviderStatus.PendingApproval) {
      router.replace(`/providers/requests`);
    }
    return () => {};
  }, [router, request]);

  return (
    <DetailGate
      isLoading={isPending}
      data={request?.status === ProviderStatus.PendingApproval ? request : null}
      error={error}
      onRetry={() => void refetch()}
      backHref="/providers/requests"
    >
      {(request) => (
        <>
          <div className="grid grid-cols-1">
            <AppForm
              type={FormType.SubscriberRequests}
              action="view"
              titleChildren={<RequestAction request={request} />}
            >
              {/* General Information */}
              <FormSection
                title={
                  dict.subscription_request_detail_page.sections.general_info
                }
              >
                <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
                  <FormInput
                    label={dict.subscription_request_detail_page.labels.name}
                    placeholder={
                      dict.subscription_request_detail_page.labels.name
                    }
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
                    value={formatPhone(request.dialCode, request.phone)}
                    onChange={(value: string): void => {}}
                    readOnly
                  />
                  <FormInput
                    label={dict.subscription_request_detail_page.labels.email}
                    placeholder={
                      dict.subscription_request_detail_page.labels.email
                    }
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
                  {/* Registration requires these; show them even when empty
                      (ClickUp 869c9e0m0). */}
                  <FormInput
                    label={dict.view_provider_form.labels.bank_name}
                    placeholder={dict.view_provider_form.labels.bank_name}
                    value={request.bankName || "-"}
                    onChange={(value: string): void => {}}
                    readOnly
                  />
                  <FormInput
                    label={dict.view_provider_form.labels.iban_number}
                    placeholder={dict.view_provider_form.labels.iban_number}
                    value={request.ibanNumber || "-"}
                    onChange={(value: string): void => {}}
                    readOnly
                  />
                  <div className="col-span-2 grid gap-2">
                    <p className="text-sm font-medium text-black dark:text-white">
                      {dict.contract.locationOnMap}
                    </p>
                    {request.latitude && request.longitude ? (
                      <div className="grid h-40 grid-cols-1 overflow-hidden rounded-xl">
                        <ProviderLocationMap
                          latitude={request.latitude}
                          longitude={request.longitude}
                        />
                      </div>
                    ) : (
                      <p>-</p>
                    )}
                  </div>
                  {request.categories && request.categories.length > 0 && (
                    <div className="col-span-2 grid gap-2">
                      <p className="text-sm font-medium text-black">
                        {lng === "ar" ? "الفئات" : "Categories"}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {request.categories.map((cat) => (
                          <Tag key={cat.id}>
                            {lng === "ar" ? cat.nameAr : cat.nameEn}
                          </Tag>
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
                  {request.commercialRegistrationFilename ? (
                    <DocumentDisplay
                      documentPath={`${dataUrl}/files/${request.commercialRegistrationFilename}`}
                    />
                  ) : (
                    <p>-</p>
                  )}
                </div>
              </FormSection>
            </AppForm>
          </div>
          <SuccessModal />
          <RejectReasonModal request={request} />
        </>
      )}
    </DetailGate>
  );
};
