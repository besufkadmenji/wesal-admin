"use client";
import { Download as DownloadIcon } from "lucide-react";
import { MapPin as MapPointIcon } from "lucide-react";
import DefaultMarkerIcon from "@/assets/icons/user.marker.svg";
import { SignedContractStatus } from "@/gql/graphql";
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
import { DetailField } from "@/components/app/shared/detail/DetailField";
import { DETAIL_CARD_SURFACE } from "@/components/app/shared/detail/DetailCard";
import { AbsherVerified } from "./AbsherVerified";
import { ReactivateProvider } from "./ReactivateProvider";
import { SignatureInput } from "./SignatureInput";
import { TerminationRequestCard } from "./TerminationRequestCard";
import { useContractStore } from "./useForm";

const defaultProps = {
  center: { lat: 21.636981, lng: 39.181078 },
  zoom: 14,
};

// UI-5: inner panels on the e-contract page.
const PANEL =
  "bg-accent-soft rounded-2xl border border-[#22283a]/[0.06] p-4 dark:border-white/8";

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
  const [open, setOpen] = useQueryState("cancelContract", {
    defaultValue: "false",
  });
  const [, setReactivateOpen] = useQueryState("reactivateProvider", {
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

  const isTerminatedByAdmin =
    signedContract?.status === SignedContractStatus.TerminatedByAdmin;
  // S4-58: a provider's termination needs no admin action once approved.
  const isTerminatedByProvider =
    signedContract?.status === SignedContractStatus.TerminatedByProvider;
  const isTerminationRequested =
    signedContract?.status === SignedContractStatus.TerminationRequested;

  return (
    provider && (
      <>
        <div
          className={`${DETAIL_CARD_SURFACE} grid grid-cols-1 gap-10 p-6 md:p-10`}
        >
          <h1 className="text-primary text-2xl font-semibold dark:text-white">
            {dict.contract.title}
          </h1>
          {isTerminationRequested && (
            <TerminationRequestCard
              providerId={provider.id}
              requestedAt={signedContract?.terminationRequestedAt}
              reason={signedContract?.terminationRequestReason}
            />
          )}
          <div className="grid grid-cols-1 gap-6" ref={contractRef}>
            <div className="grid grid-cols-2 gap-4">
              <DetailField
                boxed
                label={dict.contract.serviceProviderName}
                value={provider.name || ""}
              />
              <DetailField
                boxed
                label={dict.contract.commercialName}
                value={provider.commercialName || ""}
              />
              <DetailField
                boxed
                label={dict.contract.phoneNumber}
                value={`${provider.phone}` || ""}
              />
              <DetailField
                boxed
                label={dict.contract.category}
                value={
                  provider.categories
                    ?.map((cat) => (lng === "en" ? cat.nameEn : cat.nameAr))
                    .join(", ") || ""
                }
              />
            </div>
            <div
              className={`${PANEL} grid grid-cols-1 items-start gap-x-4 gap-y-6`}
            >
              <DetailField
                boxed
                label={dict.profile.commercialRecordNumber}
                value={provider.commercialRegistrationNumber || ""}
                className="rounded-none border-none bg-transparent p-0"
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
              <DetailField
                boxed
                label={dict.contract.address}
                value={provider.address || ""}
              />
              <Button
                data-html2canvas-ignore
                className="bg-accent-soft text-primary h-full rounded-[20px] px-6! dark:text-white"
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
              <div
                data-html2canvas-ignore
                className="grid h-80 grid-cols-1 overflow-hidden rounded-2xl"
              >
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
                    <Marker lat={provider.latitude} lng={provider.longitude} />
                  )}
                </GoogleMapReact>
              </div>
            )}
            <DetailField
              boxed
              label={dict.contract.platformManagerName}
              value={signedContract?.platformManagerName || me?.fullName || ""}
            />
            <div className={`${PANEL} grid grid-cols-2 gap-x-4 gap-y-2`}>
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
                initUrl={signedContract?.platformManagerSignature || null}
                file={form.platformManagerSignature}
                onChange={(f) => {
                  setPlatformManagerSignature(f);
                }}
                label={dict.contract.platformManagerSignature}
              />
              <p className="text-subTitle-alt col-span-2 text-xs leading-5">
                {dict.contract.signatureAllowedOnce}
              </p>
            </div>
            {provider.withAbsher && <AbsherVerified />}
            <div className={`${PANEL} grid grid-cols-1`}>
              <h3 className="text-primary leading-8 font-medium dark:text-white">
                {dict.contract.commitmentText}
              </h3>
              <p className="text-subTitle dark:text-dark-subTitle leading-7 whitespace-pre-line">
                {(
                  (lng === "en"
                    ? signedContract?.acceptedRulesEn
                    : signedContract?.acceptedRulesAr) ?? []
                ).map((rule, index) =>
                  rule.label === "general" ? (
                    <p
                      key={index}
                      className="text-subTitle dark:text-dark-subTitle leading-7 whitespace-pre-line"
                    >
                      {rule.value}
                    </p>
                  ) : (
                    <div key={index} className="mt-4 grid grid-cols-1 gap-1">
                      <h4 className="text-primary text-sm font-medium dark:text-white">
                        {rule.label}
                      </h4>
                      <p className="text-subTitle dark:text-dark-subTitle leading-7 whitespace-pre-line">
                        {rule.value}
                      </p>
                    </div>
                  ),
                )}
              </p>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-3 sm:w-auto sm:grid-cols-2 sm:justify-self-center">
            <Button
              className="bg-primary h-12.5 rounded-[20px] px-8 font-semibold text-white lg:px-24 dark:bg-[#6474a6]"
              onPress={() => {
                downloadPDF(contractRef);
              }}
            >
              <DownloadIcon className="size-5" />
              {dict.contract.exportPDF}
            </Button>
            {isTerminatedByProvider ? null : isTerminatedByAdmin ? (
              <Button
                className="bg-success border-success h-12.5 rounded-[20px] px-8 font-semibold text-white! lg:px-24"
                onPress={() => {
                  setReactivateOpen("true");
                }}
                variant={"bordered"}
              >
                {dict.contract.reactivateContract}
              </Button>
            ) : (
              <Button
                className="text-danger! h-12.5 rounded-[20px] border-red-50 bg-red-50! px-8 font-semibold lg:px-24 dark:border-transparent dark:bg-red-500/15! dark:text-red-300!"
                onPress={() => {
                  setOpen("true");
                }}
                variant={"bordered"}
              >
                {dict.contract.cancelContract}
              </Button>
            )}
          </div>
        </div>
        <CancelContract userId={provider.id} />
        <ReactivateProvider providerId={provider.id} />
      </>
    )
  );
};
