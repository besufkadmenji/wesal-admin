"use client";

import { AppSwitch } from "@/components/app/shared/AppSwitch";
import { ActivateUser } from "@/components/app/Users/ActivateUser";
import { DeactivateUser } from "@/components/app/Users/DeactivateUser";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import { useQueryState } from "nuqs";
import { AppLoading } from "../../shared/AppLoading";
import { AppForm, FormSection, FormType } from "../../shared/forms/AppForm";
import { FormInput } from "../../shared/forms/FormInput";
import { useUser } from "../useUser";
import Image from "next/image";
import { dataUrl } from "@/config/url";
import { useAppRouter } from "@/hooks/useAppRouter";

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
  const router = useAppRouter();
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

              <FormInput
                label={dict.add_new_user_form.labels.email}
                placeholder={dict.add_new_user_form.labels.email}
                value={user.email}
                onChange={(value: string): void => {}}
                readOnly
              />
              {user.avatarFilename && user.avatarFilename !== "" && (
                <div className="grid grid-cols-1 gap-2">
                  <p className="after:text-subTitle text-sm! leading-5 font-semibold! tracking-tight text-[#4D5464]! after:ms-1 after:text-sm after:font-normal dark:text-white! dark:after:text-white/70">
                    {dict.view_user.avatar}
                  </p>
                  <div className="bg-gray-2 relative size-20 overflow-hidden rounded">
                    <Image
                      src={`${dataUrl}/files/${user.avatarFilename}`}
                      alt={user.name ?? "User Avatar"}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              )}
            </div>
          </FormSection>
        </AppForm>
      </div>
      <ActivateUser />
      <DeactivateUser />
    </>
  );
};
