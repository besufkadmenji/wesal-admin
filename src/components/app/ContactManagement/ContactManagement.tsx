"use client";
import AddIcon from "@/assets/icons/app/add.svg";
import DeleteIcon from "@/assets/icons/app/trash.svg";
import { FormSection } from "@/components/app/shared/forms/AppForm";
import { FormInput } from "@/components/app/shared/forms/FormInput";
import { PageBar } from "@/components/app/shared/PageBar";
import { PageWrapper } from "@/components/app/shared/PageWrapper";
import { useDict } from "@/hooks/useDict";
import { useMe } from "@/hooks/useMe";
import { useState } from "react";
import { PrimaryButton } from "../shared/button/PrimaryButton";
import { SaveButton, SaveButtonType } from "../shared/button/SaveButton";
import { useManageSettingsForm } from "./useForm";
import { useManageSetting } from "./useManageSetting";
export const ContactManagement = () => {
  const dict = useDict();
  const { me } = useMe();
  const { setting, setSetting } = useManageSettingsForm();
  const [phoneNumber, setPhoneNumber] = useState("");
  const { updateSetting, busy } = useManageSetting();

  return (
    <PageWrapper>
      <PageBar title={dict.contact_settings.title}>
        <SaveButton
          type={SaveButtonType.Settings}
          onPress={() => {
            updateSetting();
          }}
          isDisabled={busy}
          isLoading={busy}
        />
      </PageBar>
      <div className="grid grid-cols-1 gap-8 py-8">
        <FormSection title={dict.contact_settings.contact_info.title}>
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-[1fr_auto] gap-2">
                <FormInput
                  label={dict.contact_settings.contact_info.labels.phone_number}
                  placeholder={
                    dict.contact_settings.contact_info.placeholders.phone_number
                  }
                  value={phoneNumber}
                  onChange={(value: string): void => {
                    setPhoneNumber(value);
                  }}
                />
                <PrimaryButton
                  onPress={() => {
                    setSetting({
                      phones: [...setting.phones!, phoneNumber],
                    });
                    setPhoneNumber("");
                  }}
                  className="mb-2 self-end"
                  startContent={<AddIcon className="size-5" />}
                  isDisabled={phoneNumber.trim() === ""}
                >
                  {dict.contact_settings.contact_info.add}
                </PrimaryButton>
              </div>
              {setting.phones!.map((phone, index) => (
                <div
                  className="grid grid-cols-[1fr_auto] gap-2"
                  key={`${phone}-${index}`}
                >
                  <FormInput
                    label={""}
                    placeholder={
                      dict.contact_settings.contact_info.placeholders
                        .phone_number
                    }
                    value={phone}
                    onChange={(value: string): void => {}}
                    readOnly
                  />
                  <PrimaryButton
                    onPress={() => {
                      const updatedPhones = setting.phones!.filter(
                        (p, i) => i !== index,
                      );
                      setSetting({
                        phones: updatedPhones,
                      });
                    }}
                    className="h-12 w-14 self-end bg-[#FFDBDB] p-0 text-[#FF0000]"
                    isIconOnly
                  >
                    <DeleteIcon className="size-5.5" />
                  </PrimaryButton>
                </div>
              ))}
            </div>

            <FormInput
              label={dict.contact_settings.contact_info.labels.whatsapp}
              placeholder={
                dict.contact_settings.contact_info.placeholders.whatsapp
              }
              value={setting.whatsappNumber ?? ""}
              onChange={(value: string): void => {
                setSetting({
                  whatsappNumber: value,
                });
              }}
            />

            <FormInput
              label={dict.contact_settings.contact_info.labels.email}
              placeholder={
                dict.contact_settings.contact_info.placeholders.email
              }
              value={setting.email ?? ""}
              onChange={(value: string): void => {
                setSetting({
                  email: value,
                });
              }}
            />
          </div>
        </FormSection>
        <FormSection title={""}>
          <div className="grid grid-cols-1 gap-1">
            <p className="text-lg leading-7 font-bold tracking-tight text-[#1A1C21]">
              {dict.contact_settings.social_media.title}
            </p>
            <p className="text-xs text-[#9FA2B4]">
              {dict.contact_settings.social_media.description}
            </p>
          </div>
          <p className="text-lg leading-7 font-medium tracking-tight text-[#1A1C21]">
            {dict.contact_settings.social_media.section_title}
          </p>
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 gap-4">
              {setting.socialMediaLinks!.map((link, index) => (
                <div
                  className="grid grid-cols-[1fr_2fr_auto] gap-2"
                  key={`${index}`}
                >
                  <FormInput
                    label={""}
                    placeholder={""}
                    value={link.name}
                    onChange={(value: string): void => {
                      const updatedSocialMediaLinks = [
                        ...setting.socialMediaLinks!,
                      ];
                      updatedSocialMediaLinks[index].name = value;
                      setSetting({
                        socialMediaLinks: updatedSocialMediaLinks,
                      });
                    }}
                    startContent={
                      <div className="border-dashboard-border h-5 w-5 rounded-full border" />
                    }
                    classNames={{
                      inputWrapper: "shadow-none",
                    }}
                  />
                  <FormInput
                    label={""}
                    placeholder={""}
                    value={link.link}
                    onChange={(value: string): void => {
                      const updatedSocialMediaLinks = [
                        ...setting.socialMediaLinks!,
                      ];
                      updatedSocialMediaLinks[index].link = value;
                      setSetting({
                        socialMediaLinks: updatedSocialMediaLinks,
                      });
                    }}
                    classNames={{
                      inputWrapper: "bg-white shadow-none",
                    }}
                  />
                  <PrimaryButton
                    onPress={() => {
                      const updatedSocialMediaLinks =
                        setting.socialMediaLinks!.filter((l, i) => i !== index);
                      setSetting({
                        socialMediaLinks: updatedSocialMediaLinks,
                      });
                    }}
                    className="h-12 w-14 self-end bg-[#FFDBDB] p-0 text-[#FF0000]"
                    isIconOnly
                  >
                    <DeleteIcon className="size-5.5" />
                  </PrimaryButton>
                </div>
              ))}
            </div>
          </div>
          <PrimaryButton
            startContent={<AddIcon className="size-5" />}
            onPress={() => {
              setSetting({
                socialMediaLinks: [
                  ...setting.socialMediaLinks!,
                  { name: "", link: "" },
                ],
              });
            }}
          >
            {dict.contact_settings.social_media.buttons.add}
          </PrimaryButton>
        </FormSection>
      </div>
    </PageWrapper>
  );
};
