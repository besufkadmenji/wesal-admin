"use client";

import { AppSwitch } from "@/components/app/shared/AppSwitch";
import { ActivateUser } from "@/components/app/Users/ActivateUser";
import { DeactivateUser } from "@/components/app/Users/DeactivateUser";
import { typeMap } from "@/components/app/Users/renderCell";
import { UserRole } from "@/gql/graphql";
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
              </div>
            </FormSection>
          )}
        </AppForm>
      </div>
      <ActivateUser />
      <DeactivateUser />
    </>
  );
};
