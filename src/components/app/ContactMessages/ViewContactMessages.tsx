"use client";

import {
  AppForm,
  FormType,
  FormSection,
} from "@/components/app/shared/forms/AppForm";
import { FormAreaInput } from "@/components/app/shared/forms/FormAreaInput";
import { FormInput } from "@/components/app/shared/forms/FormInput";
import { useDict } from "@/hooks/useDict";
import { AppLoading } from "../shared/AppLoading";
import { useContactMessage } from "./useContactMessage";
import { useEffect } from "react";
import ContactMessageService from "@/services/contact.message.service";
import Image from "next/image";
import { Button } from "@heroui/react";
import ReplyIcon from "@/assets/icons/app/reply.svg";
import { SendReply } from "@/components/app/ContactMessages/SendReply";
import { useQueryState } from "nuqs";

export const ViewContactMessages = ({ id }: { id: string }) => {
  const { data } = useContactMessage(id);
  const [sendReply, setSendReply] = useQueryState("sendReply");

  const dict = useDict();

  useEffect(() => {
    if (data && !data.isRead) {
      ContactMessageService.markAsRead(id);
    }
    return () => {};
  }, [data, id]);

  return !data ? (
    <AppLoading className="h-[84vh]" />
  ) : (
    <div className="grid grid-cols-1">
      <AppForm
        type={FormType.ContactMessages}
        action="view"
        titleChildren={
          data.reply === "" && (
            <Button
              size="lg"
              className="bg-primary text-white"
              onPress={() => {
                setSendReply(data.id as string, { history: "push" });
              }}
            >
              <ReplyIcon className="size-4 shrink-0" />
              {dict.contact_messages_page.buttons.send_reply}
            </Button>
          )
        }
      >
        <FormSection title={dict.contact_message_detail_page.title}>
          <div className="grid grid-cols-1 gap-4">
            <FormInput
              label={dict.contact_message_page.table_headers.name}
              placeholder={dict.contact_message_page.table_headers.name}
              value={data.name}
              onChange={(value: string): void => {}}
              readOnly
            />
            <FormInput
              label={dict.contact_message_page.table_headers.email}
              placeholder={dict.contact_message_page.table_headers.email}
              value={data.email}
              onChange={(value: string): void => {}}
              readOnly
            />
            <FormInput
              label={dict.contact_message_page.table_headers.phone}
              placeholder={dict.contact_message_page.table_headers.phone}
              value={`${data.dialCode}${data.phone}`}
              onChange={(value: string): void => {}}
              readOnly
            />
            <FormInput
              label={dict.contact_message_page.table_headers.messageType}
              placeholder={dict.contact_message_page.table_headers.messageType}
              value={data.messageType}
              onChange={(value: string): void => {}}
              readOnly
            />
            <FormAreaInput
              label={dict.contact_message_page.table_headers.messageContent}
              placeholder={
                dict.contact_message_page.table_headers.messageContent
              }
              value={data.messageContent}
              onChange={(value: string): void => {}}
              readOnly
            />
            {data.reply !== "" && (
              <FormAreaInput
                label={dict.contact_message_detail_page.reply}
                placeholder={dict.contact_message_detail_page.reply}
                value={data.reply || ""}
                onChange={(value: string): void => {}}
                readOnly
              />
            )}
            {data.attachmentFilename && (
              <div className="grid grid-cols-1 gap-2">
                <p
                  className={
                    "text-sm leading-5 font-semibold tracking-tight text-[#4D5464] subpixel-antialiased dark:text-white! dark:after:text-white/70"
                  }
                >
                  {dict.contact_message_page.attachment}
                </p>
                <div className="relative h-60 w-full">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_DATA}/files/${data.attachmentFilename}`}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        </FormSection>
      </AppForm>
      <SendReply />
    </div>
  );
};
