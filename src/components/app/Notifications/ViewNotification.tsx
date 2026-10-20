"use client";

import { PermissionGate } from "@/components/app/admin-lifecycle/PermissionGate";
import { DetailGate } from "@/components/app/shared/states/DetailGate";
import {
  AppForm,
  FormSection,
  FormType,
} from "@/components/app/shared/forms/AppForm";
import { FormAreaInput } from "@/components/app/shared/forms/FormAreaInput";
import { FormInput } from "@/components/app/shared/forms/FormInput";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import BroadcastService from "@/services/broadcast.service";
import { Chip } from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { recipientTypesLabel } from "./recipientTypes";

const noop = () => {};

/** Read-only view of a sent notification (BRD 4.3.24). */
export const ViewNotification = () => {
  const dict = useDict();
  const lang = useLang();
  const { id } = useParams<{ id: string }>();
  const copy = dict.notification_detail_page;
  const query = useQuery({
    queryKey: ["admin-broadcast", id],
    queryFn: () => BroadcastService.detail(id),
  });
  const broadcast = query.data;

  return (
    <PermissionGate resource="notification">
      <DetailGate
        isLoading={query.isLoading}
        data={broadcast}
        onRetry={() => void query.refetch()}
        backHref="/notifications"
      >
        {(broadcast) => (
          <AppForm type={FormType.Notifications} action="view">
            <FormSection title={copy.sections.notification_information}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormInput
                  label={copy.labels.title}
                  placeholder={copy.labels.title}
                  value={broadcast.title}
                  onChange={noop}
                  className="md:col-span-2"
                  readOnly
                />
                <FormAreaInput
                  label={copy.labels.content}
                  placeholder={copy.labels.content}
                  value={broadcast.message}
                  onChange={noop}
                  className="md:col-span-2"
                  readOnly
                />
                <FormInput
                  label={copy.labels.sent_date}
                  placeholder={copy.labels.sent_date}
                  value={new Date(broadcast.createdAt).toLocaleString(
                    lang === "ar" ? "ar-SA" : "en-SA",
                  )}
                  onChange={noop}
                  readOnly
                />
                <FormInput
                  label={copy.labels.recipients_count}
                  placeholder={copy.labels.recipients_count}
                  value={String(broadcast.recipientCount)}
                  onChange={noop}
                  readOnly
                />
              </div>
            </FormSection>
            <FormSection title={copy.sections.recipients_information}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormInput
                  label={copy.labels.recipient_types}
                  placeholder={copy.labels.recipient_types}
                  value={recipientTypesLabel(dict, broadcast.recipientTypes)}
                  onChange={noop}
                  readOnly
                />
                <FormInput
                  label={copy.labels.audience}
                  placeholder={copy.labels.audience}
                  value={dict.notifications_page.audience[broadcast.audience]}
                  onChange={noop}
                  readOnly
                />
                {broadcast.recipients && broadcast.recipients.length > 0 && (
                  <div className="flex flex-wrap gap-2 md:col-span-2">
                    {broadcast.recipients.map((recipient) => (
                      <Chip key={recipient.id} variant="flat">
                        {recipient.name ?? recipient.id}
                      </Chip>
                    ))}
                  </div>
                )}
              </div>
            </FormSection>
          </AppForm>
        )}
      </DetailGate>
    </PermissionGate>
  );
};
