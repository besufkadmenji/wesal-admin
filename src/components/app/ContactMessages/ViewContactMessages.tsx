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

export const ViewContactMessages = ({ id }: { id: string }) => {
  const { data } = useContactMessage(id);

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
      <AppForm type={FormType.ContactMessages} action="view">
        <FormSection title={dict.contact_message_detail_page.title}>
          <div className="grid grid-cols-1 gap-4">
            {" "}
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
          </div>
        </FormSection>
      </AppForm>
    </div>
  );
};
