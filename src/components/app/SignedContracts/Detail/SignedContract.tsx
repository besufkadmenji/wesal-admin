"use client";
import CheckGreenIcon from "@/assets/icons/check.green.svg";
import DefaultMarkerIcon from "@/assets/icons/user.marker.svg";
import DownloadIcon from "@/assets/icons/download.svg";
import MapPointIcon from "@/assets/icons/map.point.svg";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import { useMe } from "@/hooks/useMe";
import { downloadPDF } from "@/utils/download.pdf";
import { Button } from "@heroui/react";
import GoogleMapReact from "google-map-react";
import Image from "next/image";
import { parseAsBoolean, useQueryState } from "nuqs";
import { useEffect, useRef } from "react";
import { useSignedContract } from "../useSignedContract";
import { CancelContract } from "./CancelContact";
import { FormInput } from "./FormInput";
import { SignatureInput } from "./SignatureInput";
import { useContractStore } from "./useForm";
import { useSignSignature } from "./useSignSignature";

const defaultProps = {
  center: { lat: 21.636981, lng: 39.181078 },
  zoom: 14,
};

const Marker = ({}: { lat: number; lng: number }) => (
  <DefaultMarkerIcon className="size-16 origin-center -translate-y-[80%] ltr:-translate-x-1/2 rtl:translate-x-1/2" />
);

export const SignedContract = ({ id }: { id: string }) => {
  const dict = useDict();
  const lng = useLang();
  const { me } = useMe();
  const { data: signedContract } = useSignedContract(id);
  const provider = signedContract?.provider;
  const contractRef = useRef<HTMLDivElement | null>(null);
  const { saveSignature, busy } = useSignSignature();
  const [open, setOpen] = useQueryState("cancelContract", {
    defaultValue: "false",
  });
  const form = useContractStore((state) => state.form);
  const setServiceProviderSignature = useContractStore(
    (state) => state.setServiceProviderSignature,
  );
  const setPlatformManagerSignature = useContractStore(
    (state) => state.setPlatformManagerSignature,
  );
  const [showMap, setShowMap] = useQueryState(
    "showMap",
    parseAsBoolean.withDefault(false),
  );
  useEffect(() => {
    return () => {};
  }, []);

  return (
    provider && (
      <>
        <div className="grid grid-cols-1 gap-10 rounded-2xl bg-white p-10">
          <h1 className="text-2xl font-semibold text-black">
            {dict.contract.title}
          </h1>
          <div className="grid grid-cols-1 gap-6" ref={contractRef}>
            <div className="grid grid-cols-2 gap-4">
              <FormInput
                label={dict.contract.serviceProviderName}
                value={provider.name || ""}
              />
              <FormInput
                label={dict.contract.commercialName}
                value={provider.commercialName || ""}
              />
              <FormInput
                label={dict.contract.phoneNumber}
                value={`${provider.dialCode}${provider.phone}` || ""}
              />
              <FormInput
                label={dict.contract.category}
                value={
                  provider.categories
                    ?.map((cat) => (lng === "en" ? cat.nameEn : cat.nameAr))
                    .join(", ") || ""
                }
              />
            </div>
            <div className="grid grid-cols-1 items-start gap-x-4 gap-y-6 rounded-2xl border border-[#F2F2F2] bg-[#FBFBFB] p-4">
              <FormInput
                label={dict.profile.commercialRecordNumber}
                value={provider.commercialRegistrationNumber || ""}
                className="h-max rounded-none border-none p-0"
              />
              <div className="relative h-47.5 w-full">
                <Image
                  src={`${process.env.NEXT_PUBLIC_DATA}/files/${provider.commercialRegistrationFilename}`}
                  alt="Commercial Record"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <div className="grid grid-cols-[1fr_auto] gap-3">
              <FormInput
                label={dict.contract.address}
                value={provider.address || ""}
              />
              <Button
                data-html2canvas-ignore
                className="h-full rounded-[20px] bg-[#EFF1F6] px-6!"
                variant={"ghost"}
                onPress={() => {
                  setShowMap(showMap === true ? null : true);
                }}
              >
                <MapPointIcon className="size-5" />
                {showMap ? dict.contract.hideMap : dict.contract.locationOnMap}
              </Button>
            </div>
            {showMap && (
              <div data-html2canvas-ignore className="grid h-80 grid-cols-1 overflow-hidden rounded-2xl">
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
                    fullscreenControl: false,
                    mapTypeControl: false,
                    streetViewControl: false,
                    zoomControl: false,
                    disableDefaultUI: true,
                    draggable: false,
                  }}
                  yesIWantToUseGoogleMapApiInternals
                >
                  {provider.latitude && provider.longitude && (
                    <Marker
                      lat={provider.latitude}
                      lng={provider.longitude}
                    />
                  )}
                </GoogleMapReact>
              </div>
            )}
            <FormInput
              label={dict.contract.platformManagerName}
              value={signedContract?.platformManagerName || me?.fullName || ""}
            />
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 rounded-2xl border border-[#F2F2F2] bg-[#FBFBFB] p-4">
              <SignatureInput
                initUrl={signedContract?.serviceProviderSignature || null}
                file={form.serviceProviderSignature}
                onChange={(f) => {
                  setServiceProviderSignature(f);
                }}
                label={dict.contract.serviceProviderSignature}
                isRequired
              />
              <SignatureInput
                initUrl={
                  signedContract?.platformManagerSignature ||
                  me?.platformManagerSignature ||
                  null
                }
                file={form.platformManagerSignature}
                onChange={(f) => {
                  setPlatformManagerSignature(f);
                }}
                label={dict.contract.platformManagerSignature}
              />
              <p className="col-span-2 text-xs leading-5 text-[#999999]">
                {dict.contract.signatureAllowedOnce}
              </p>
            </div>
            {provider.withAbsher && <AbsherVerified />}
            <div className="grid grid-cols-1 rounded-2xl border border-[#F2F2F2] bg-[#FBFBFB] p-4">
              <h3 className="leading-8 font-medium text-black">
                {dict.contract.commitmentText}
              </h3>
              <p className="text-gray leading-7 whitespace-pre-line">
                {(
                  (lng === "en"
                    ? signedContract?.acceptedRulesEn
                    : signedContract?.acceptedRulesAr) ?? []
                ).map((rule, index) =>
                  rule.label === "general" ? (
                    <p
                      key={index}
                      className="text-gray leading-7 whitespace-pre-line"
                    >
                      {rule.value}
                    </p>
                  ) : (
                    <div key={index} className="mt-4 grid grid-cols-1 gap-1">
                      <h4 className="text-sm font-medium text-black">
                        {rule.label}
                      </h4>
                      <p className="text-gray leading-7 whitespace-pre-line">
                        {rule.value}
                      </p>
                    </div>
                  ),
                )}
              </p>
            </div>
          </div>

          {signedContract?.platformManagerSignature ? (
            <div className="grid grid-cols-2 gap-3 justify-self-center px-27">
              <Button
                className="bg-primary h-12.5 rounded-[20px] px-24 font-semibold text-[#EFF9F0]"
                onPress={() => {
                  downloadPDF(contractRef);
                }}
              >
                <DownloadIcon className="size-5" />
                {dict.contract.exportPDF}
              </Button>
              <Button
                className="h-12.5 rounded-[20px] border-[#FBEAE9] bg-[#FBEAE9]! px-24 font-semibold text-[#B3251E]!"
                onPress={() => {
                  setOpen("true");
                }}
                variant={"bordered"}
              >
                {dict.contract.cancelContract}
              </Button>
            </div>
          ) : (
            <Button
              className="bg-primary h-12.5 justify-self-center rounded-[20px] px-24 font-semibold text-[#EFF9F0]"
              onPress={() => {
                saveSignature(provider.id);
              }}
              isDisabled={busy}
              isLoading={busy}
            >
              {dict.contract.signContract}
            </Button>
          )}
        </div>
        <CancelContract userId={provider.id} />
      </>
    )
  );
};

const AbsherVerified = () => {
  const dict = useDict();
  return (
    <div className="grid grid-cols-[auto_1fr] items-center gap-3 rounded-2xl border border-[#0F9D58] bg-[#E8FDF3] p-4">
      <CheckGreenIcon className="size-7" />
      <div className="grid grid-cols-1 gap-2">
        <h3 className="font-medium text-black">
          {dict.contract.verifiedWithAbsher}
        </h3>
        <p className="text-gray leading-7">
          {dict.contract.verifiedWithAbsherDescription}
        </p>
      </div>
    </div>
  );
};
