"use client";

import DefaultMarkerIcon from "@/assets/icons/user.marker.svg";
import { ActivateProvider } from "@/components/app/Providers/ActivateProvider";
import { DeactivateProvider } from "@/components/app/Providers/DeactivateProvider";
import { AppSwitch } from "@/components/app/shared/AppSwitch";
import { SignedContractStatus } from "@/gql/graphql";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import GoogleMapReact from "google-map-react";
import moment from "moment";
import Image from "next/image";
import { useQueryState } from "nuqs";
import { twMerge } from "tailwind-merge";
import { AppLoading } from "../../shared/AppLoading";
import { AppForm, FormSection, FormType } from "../../shared/forms/AppForm";
import { FormInput } from "../../shared/forms/FormInput";
import { useProvider } from "../useProvider";
import { useAppRouter } from "@/hooks/useAppRouter";

const Marker = ({}: { lat: number; lng: number }) => (
  <DefaultMarkerIcon className="size-16 origin-center -translate-y-[80%] ltr:-translate-x-1/2 rtl:translate-x-1/2" />
);
const defaultProps = {
  center: {
    lat: 21.636981,
    lng: 39.181078,
  },
  zoom: 11,
};
export const ProviderDetail = ({ id }: { id: string }) => {
  const dict = useDict();
  const lng = useLang();
  const router = useAppRouter();
  const { data: provider } = useProvider(id);
  const [activateProvider, setActivateProvider] =
    useQueryState("activateProvider");
  const [deactivateProvider, setDeactivateProvider] =
    useQueryState("deactivateProvider");
  console.log("Category Data:", provider, id);
  return !provider ? (
    <AppLoading className="h-[84vh]" />
  ) : (
    <>
      <div className="grid grid-cols-1">
        <AppForm
          type={FormType.Providers}
          action="view"
          titleChildren={
            <AppSwitch
              isSelected={provider.status === "ACTIVE"}
              onValueChange={(value) => {
                if (value) {
                  setActivateProvider(provider.id, { history: "push" });
                } else {
                  setDeactivateProvider(provider.id, {
                    history: "push",
                  });
                }
              }}
              // isDisabled={provider.status === "DELETED"}
            />
          }
        >
          <FormSection title={dict.view_provider.title}>
            <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
              <FormInput
                label={dict.view_provider_form.labels.name}
                placeholder={dict.view_provider_form.placeholders.name}
                value={provider.name ?? "-"}
                onChange={(value: string): void => {}}
                readOnly
              />
              <FormInput
                label={dict.view_provider_form.labels.phone_number}
                placeholder={dict.view_provider_form.placeholders.phone_number}
                value={provider.phone}
                onChange={(value: string): void => {}}
                readOnly
              />

              <FormInput
                label={dict.view_provider_form.labels.email}
                placeholder={dict.view_provider_form.labels.email}
                value={provider.email}
                onChange={(value: string): void => {}}
                readOnly
              />
            </div>
          </FormSection>

          <FormSection
            title={dict.view_provider_form.sections.business_information}
          >
            <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
              <FormInput
                label={dict.view_provider_form.labels.commercial_name}
                placeholder={
                  dict.view_provider_form.placeholders.commercial_name
                }
                value={provider.commercialName ?? "-"}
                onChange={(value: string): void => {}}
                className="col-span-2"
                readOnly
              />
              <FormInput
                label={
                  dict.view_provider_form.labels.commercial_registration_number
                }
                placeholder={
                  dict.view_provider_form.placeholders
                    .commercial_registration_number
                }
                value={provider.commercialRegistrationNumber ?? "-"}
                onChange={(value: string): void => {}}
                className="col-span-2"
                readOnly
              />
              <FormInput
                label={dict.view_provider_form.labels.city}
                placeholder={dict.view_provider_form.placeholders.city}
                value={
                  provider.city
                    ? lng === "ar"
                      ? provider.city.nameAr
                      : provider.city.nameEn
                    : "-"
                }
                onChange={(value: string): void => {}}
                className="col-span-2"
                readOnly
              />
              <FormInput
                label={dict.view_provider_form.labels.address}
                placeholder={dict.view_provider_form.placeholders.address}
                value={provider.address ?? "-"}
                onChange={(value: string): void => {}}
                className="col-span-2"
                readOnly
              />
              <div className="col-span-2 grid h-40 grid-cols-1">
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: process.env.NEXT_PUBLIC_MAPS_API_KEY || "",
                  }}
                  center={{
                    lat: provider.latitude ?? defaultProps.center.lat,
                    lng: provider.longitude ?? defaultProps.center.lng,
                  }}
                  zoom={defaultProps.zoom}
                  options={{
                    fullscreenControl: false, // disables the fullscreen button
                    mapTypeControl: false, // optional: removes the map/satellite switch
                    streetViewControl: false, // optional
                    zoomControl: false, // optional
                    disableDefaultUI: true,
                    draggable: false,
                  }}
                  yesIWantToUseGoogleMapApiInternals
                  onGoogleApiLoaded={({ map, maps }) => {}}
                >
                  {provider.latitude && provider.longitude && (
                    <Marker lat={provider.latitude} lng={provider.longitude} />
                  )}
                </GoogleMapReact>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <p className="font-medium text-black">
                  {dict.view_provider_form.labels.commercial_registration_image}
                </p>
                <div className="relative mt-2 h-40 w-60">
                  {provider.commercialRegistrationFilename && (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_DATA}/files/${provider.commercialRegistrationFilename}`}
                      alt="Commercial Registration"
                      fill
                      className="object-contain"
                    />
                  )}
                </div>
              </div>
            </div>
          </FormSection>

          <FormSection title={dict.view_provider.contract_section_title}>
            {provider.signedContract ? (
              <div className="grid grid-cols-1 gap-6">
                <ProviderSignature
                  label={dict.view_provider.service_provider_signature}
                  image={`${process.env.NEXT_PUBLIC_DATA}/files/${provider.signedContract.serviceProviderSignature}`}
                />
                {provider.signedContract.platformManagerSignature && (
                  <ProviderSignature
                    label={dict.view_provider.platform_manager_signature}
                    image={`${process.env.NEXT_PUBLIC_DATA}/files/${provider.signedContract.platformManagerSignature}`}
                  />
                )}
                <div className="mt-10 grid grid-cols-2 items-start">
                  <div className="grid grid-cols-1 justify-items-start gap-2">
                    <p className="font-medium text-black">
                      {dict.view_provider.contract_status}
                    </p>
                    <ContactStatus status={provider.signedContract.status} />
                  </div>
                  <div className="grid grid-cols-1 justify-items-start gap-2">
                    <p className="font-medium text-black">
                      {dict.view_provider.contract_signed_at}
                    </p>
                    <div className="font-semibold text-black">
                      {moment(provider.signedContract.contractSignedAt).format(
                        "MMM D, YYYY hh:mm A",
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>{dict.view_provider.no_contract_signed_yet}</div>
            )}
          </FormSection>
        </AppForm>
      </div>
      <ActivateProvider />
      <DeactivateProvider />
    </>
  );
};

const ProviderSignature = ({
  image,
  label,
}: {
  image: string;
  label: string;
}) => {
  return (
    <p className="grid grid-cols-1 gap-2">
      <p className="font-medium text-black">{label}</p>
      <div className="relative h-40 w-full">
        <Image
          src={image}
          alt="Provider Signature"
          fill
          className="object-contain"
        />
      </div>
    </p>
  );
};

const ContactStatus = ({ status }: { status: SignedContractStatus }) => {
  const dict = useDict();
  const statusMap = {
    [SignedContractStatus.Active]: dict.contract_status.active,
    [SignedContractStatus.Expired]: dict.contract_status.expired,
    [SignedContractStatus.TerminatedByAdmin]:
      dict.contract_status.terminatedByAdmin,
    [SignedContractStatus.TerminatedByProvider]:
      dict.contract_status.terminatedByProvider,
  };
  const statusClassMap = {
    [SignedContractStatus.Active]: "text-green-600 bg-green-100",
    [SignedContractStatus.Expired]: "text-yellow-600 bg-yellow-100",
    [SignedContractStatus.TerminatedByAdmin]: "text-red-600 bg-red-100",
    [SignedContractStatus.TerminatedByProvider]: "text-red-600 bg-red-100",
  };
  return (
    <div
      className={twMerge(
        "grid rounded-full px-4 py-2 text-sm font-medium",
        statusClassMap[status],
      )}
    >
      {statusMap[status]}
    </div>
  );
};
