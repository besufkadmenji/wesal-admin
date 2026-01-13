"use client";

import { AppSwitch } from "@/components/app/shared/AppSwitch";
import { ActivateUser } from "@/components/app/Users/ActivateUser";
import { DeactivateUser } from "@/components/app/Users/DeactivateUser";
import { typeMap } from "@/components/app/Users/renderCell";
import { ContractStatus, SignedContractStatus, UserRole } from "@/gql/graphql";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import GoogleMapReact from "google-map-react";
import { useRouter } from "next/navigation";
import { useQueryState } from "nuqs";
import { AppLoading } from "../../shared/AppLoading";
import { AppForm, FormSection, FormType } from "../../shared/forms/AppForm";
import { FormInput } from "../../shared/forms/FormInput";
import { FormSelect } from "../../shared/forms/FormSelect";
import { useUser } from "../useUser";
import DefaultMarkerIcon from "@/assets/icons/user.marker.svg";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import moment from "moment";

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
export const UserDetail = ({ id }: { id: string }) => {
  const dict = useDict();
  const lng = useLang();
  const router = useRouter();
  const { data: user } = useUser(id);
  const [activateUser, setActivateUser] = useQueryState("activateUser");
  const [deactivateUser, setDeactivateUser] = useQueryState("deactivateUser");
  console.log("Category Data:", user, id);
  return !user ? (
    <AppLoading className="h-[84vh]" />
  ) : (
    <>
      <div className="grid grid-cols-1">
        <AppForm
          type={FormType.Users}
          action="view"
          titleChildren={
            <AppSwitch
              isSelected={user.status === "ACTIVE"}
              onValueChange={(value) => {
                if (value) {
                  setActivateUser(user.id, { history: "push" });
                } else {
                  setDeactivateUser(user.id, {
                    history: "push",
                  });
                }
              }}
              // isDisabled={user.status === "DELETED"}
            />
          }
        >
          <FormSection title={dict.view_user.title}>
            <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
              <FormInput
                label={dict.add_new_user_form.labels.name}
                placeholder={dict.add_new_user_form.placeholders.name}
                value={user.name ?? "-"}
                onChange={(value: string): void => {}}
                readOnly
              />
              <FormInput
                label={dict.add_new_user_form.labels.phone_number}
                placeholder={dict.add_new_user_form.placeholders.phone_number}
                value={user.phone}
                onChange={(value: string): void => {}}
                readOnly
              />
              <FormSelect
                label={dict.add_new_user_form.labels.role}
                placeholder={dict.add_new_user_form.placeholders.role}
                value={user.role}
                onChange={(value: string): void => {}}
                options={Object.entries(typeMap(dict)).map(([key, value]) => ({
                  label: value,
                  key: key,
                }))}
                readOnly
              />
              <FormInput
                label={dict.add_new_user_form.labels.email}
                placeholder={dict.add_new_user_form.labels.email}
                value={user.email}
                onChange={(value: string): void => {}}
                readOnly
              />
            </div>
          </FormSection>
          {user.role === UserRole.Provider && (
            <FormSection
              title={dict.add_new_user_form.sections.business_information}
            >
              <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
                <FormInput
                  label={dict.add_new_user_form.labels.commercial_name}
                  placeholder={
                    dict.add_new_user_form.placeholders.commercial_name
                  }
                  value={user.commercialName ?? "-"}
                  onChange={(value: string): void => {}}
                  className="col-span-2"
                  readOnly
                />
                <FormInput
                  label={
                    dict.add_new_user_form.labels.commercial_registration_number
                  }
                  placeholder={
                    dict.add_new_user_form.placeholders
                      .commercial_registration_number
                  }
                  value={user.commercialRegistrationNumber ?? "-"}
                  onChange={(value: string): void => {}}
                  className="col-span-2"
                  readOnly
                />
                <FormInput
                  label={dict.add_new_user_form.labels.city}
                  placeholder={dict.add_new_user_form.placeholders.city}
                  value={
                    user.city
                      ? lng === "ar"
                        ? user.city.nameAr
                        : user.city.nameEn
                      : "-"
                  }
                  onChange={(value: string): void => {}}
                  className="col-span-2"
                  readOnly
                />
                <FormInput
                  label={dict.add_new_user_form.labels.address}
                  placeholder={dict.add_new_user_form.placeholders.address}
                  value={user.address ?? "-"}
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
                      lat: user.latitude ?? defaultProps.center.lat,
                      lng: user.longitude ?? defaultProps.center.lng,
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
                    {user.latitude && user.longitude && (
                      <Marker lat={user.latitude} lng={user.longitude} />
                    )}
                  </GoogleMapReact>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <p className="font-medium text-black">
                    {
                      dict.add_new_user_form.labels
                        .commercial_registration_image
                    }
                  </p>
                  <div className="relative mt-2 h-40 w-60">
                    {user.commercialRegistrationFilename && (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_DATA}/files/${user.commercialRegistrationFilename}`}
                        alt="Commercial Registration"
                        fill
                        className="object-contain"
                      />
                    )}
                  </div>
                </div>
              </div>
            </FormSection>
          )}
          {user.role === UserRole.Provider && (
            <FormSection title={dict.view_user.contract_section_title}>
              {user.signedContract ? (
                <div className="grid grid-cols-1 gap-6">
                  <UserSignature
                    label={dict.view_user.service_provider_signature}
                    image={`${process.env.NEXT_PUBLIC_DATA}/files/${user.signedContract.serviceProviderSignature}`}
                  />
                  {user.signedContract.platformManagerSignature && (
                    <UserSignature
                      label={dict.view_user.platform_manager_signature}
                      image={`${process.env.NEXT_PUBLIC_DATA}/files/${user.signedContract.platformManagerSignature}`}
                    />
                  )}
                  <div className="grid grid-cols-2 mt-10 items-start">
                    <div className="grid grid-cols-1 justify-items-start gap-2">
                      <p className="font-medium text-black">
                        {dict.view_user.contract_status}
                      </p>
                      <ContactStatus status={user.signedContract.status} />
                    </div>
                    <div className="grid grid-cols-1 justify-items-start gap-2">
                      <p className="font-medium text-black">
                        {dict.view_user.contract_signed_at}
                      </p>
                      <div className="font-semibold text-black">
                        {moment(user.signedContract.contractSignedAt).format(
                          "MMM D, YYYY hh:mm A",
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>{dict.view_user.no_contract_signed_yet}</div>
              )}
            </FormSection>
          )}
        </AppForm>
      </div>
      <ActivateUser />
      <DeactivateUser />
    </>
  );
};

const UserSignature = ({ image, label }: { image: string; label: string }) => {
  return (
    <p className="grid grid-cols-1 gap-2">
      <p className="font-medium text-black">{label}</p>
      <div className="relative h-40 w-full">
        <Image
          src={image}
          alt="User Signature"
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
    [SignedContractStatus.TerminatedByUser]:
      dict.contract_status.terminatedByUser,
  };
  const statusClassMap = {
    [SignedContractStatus.Active]: "text-green-600 bg-green-100",
    [SignedContractStatus.Expired]: "text-yellow-600 bg-yellow-100",
    [SignedContractStatus.TerminatedByAdmin]: "text-red-600 bg-red-100",
    [SignedContractStatus.TerminatedByUser]: "text-red-600 bg-red-100",
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
