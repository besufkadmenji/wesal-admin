"use client";

import { PermissionGate } from "@/components/app/admin-lifecycle/PermissionGate";
import {
  AppForm,
  FormSection,
  FormType,
} from "@/components/app/shared/forms/AppForm";
import { FormAreaInput } from "@/components/app/shared/forms/FormAreaInput";
import { FormInput } from "@/components/app/shared/forms/FormInput";
import { FormSelectMultiple } from "@/components/app/shared/forms/FormSelect";
import { BroadcastAudience, BroadcastRecipientType } from "@/gql/graphql";
import { useAppRouter } from "@/hooks/useAppRouter";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import { Radio, RadioGroup } from "@heroui/react";
import { RecipientPicker } from "./RecipientPicker";
import { RECIPIENT_TYPES } from "./recipientTypes";
import { useAddNotification } from "./useAddNotification";

/** Send a notification to customers and/or providers (BRD 4.3.24). */
export const AddNotification = () => {
  const dict = useDict();
  const lang = useLang();
  const router = useAppRouter();
  const copy = dict.add_new_notification_form;
  const form = useAddNotification();

  return (
    <PermissionGate resource="notification" action="create">
      <AppForm
        type={FormType.Notifications}
        action="add"
        busy={form.busy}
        onSubmit={form.submit}
        onCancel={() => router.push(`/${lang}/notifications`)}
      >
        <FormSection title={copy.sections.notification_information}>
          <div className="grid grid-cols-1 gap-4">
            <FormInput
              label={copy.labels.title}
              placeholder={copy.placeholders.title}
              value={form.title}
              onChange={form.setTitle}
              errorMessage={form.errors.title}
            />
            <FormAreaInput
              label={copy.labels.content}
              placeholder={copy.placeholders.content}
              value={form.message}
              onChange={form.setMessage}
              errorMessage={form.errors.message}
            />
          </div>
        </FormSection>
        <FormSection title={copy.sections.recipients}>
          <div className="grid grid-cols-1 gap-5">
            <FormSelectMultiple
              label={copy.labels.recipient_types}
              placeholder={copy.placeholders.recipient_types}
              values={form.recipientTypes}
              options={RECIPIENT_TYPES.map((type) => ({
                key: type,
                label: dict.notifications_page.recipient_types[type],
              }))}
              onChange={(values) =>
                form.changeTypes(values as BroadcastRecipientType[])
              }
              errorMessage={form.errors.recipientTypes}
            />
            <RadioGroup
              label={copy.labels.audience}
              value={form.audience}
              onValueChange={(value) =>
                form.setAudience(value as BroadcastAudience)
              }
            >
              <Radio value={BroadcastAudience.All}>
                {copy.audience_options.ALL}
              </Radio>
              <Radio value={BroadcastAudience.Selected}>
                {copy.audience_options.SELECTED}
              </Radio>
            </RadioGroup>
            {form.audience === BroadcastAudience.Selected && (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {form.recipientTypes.map((type) => (
                  <RecipientPicker
                    key={type}
                    type={type}
                    selected={form.selected}
                    onToggle={form.toggleRecipient}
                  />
                ))}
              </div>
            )}
            {form.errors.recipients && (
              <p className="text-danger text-sm">{form.errors.recipients}</p>
            )}
          </div>
        </FormSection>
      </AppForm>
    </PermissionGate>
  );
};
