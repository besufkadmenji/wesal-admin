import {
  BroadcastAudience,
  BroadcastRecipientType,
} from "@/gql/graphql";
import { useAppRouter } from "@/hooks/useAppRouter";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import BroadcastService, {
  RecipientOption,
} from "@/services/broadcast.service";
import { showErrorMessage, showSuccessMessage } from "@/utils/show.message";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

type Errors = Partial<
  Record<"title" | "message" | "recipientTypes" | "recipients", string>
>;

/** Add-notification form state, validation and send (BRD 4.3.24). */
export const useAddNotification = () => {
  const dict = useDict();
  const lang = useLang();
  const router = useAppRouter();
  const queryClient = useQueryClient();
  const copy = dict.add_new_notification_form;
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [recipientTypes, setRecipientTypes] = useState<
    BroadcastRecipientType[]
  >([]);
  const [audience, setAudience] = useState(BroadcastAudience.All);
  const [selected, setSelected] = useState<RecipientOption[]>([]);
  const [errors, setErrors] = useState<Errors>({});

  const toggleRecipient = (option: RecipientOption) =>
    setSelected((current) =>
      current.some((item) => item.id === option.id)
        ? current.filter((item) => item.id !== option.id)
        : [...current, option],
    );

  const changeTypes = (types: BroadcastRecipientType[]) => {
    setRecipientTypes(types);
    // Drop picks of a type that is no longer chosen.
    setSelected((current) => current.filter((item) => types.includes(item.type)));
    setErrors((current) => ({ ...current, recipientTypes: undefined }));
  };

  const send = useMutation({
    mutationFn: () =>
      BroadcastService.send({
        title,
        message,
        recipientTypes,
        audience,
        recipients:
          audience === BroadcastAudience.Selected
            ? selected.map(({ id, type }) => ({ id, type }))
            : undefined,
      }),
    onSuccess: async (result) => {
      await queryClient.invalidateQueries({ queryKey: ["admin-broadcasts"] });
      showSuccessMessage(
        copy.messages.createSuccess.replace(
          "{count}",
          String(result?.recipientCount ?? 0),
        ),
      );
      router.push(`/${lang}/notifications`);
    },
    onError: (error) => showErrorMessage(error.message),
  });

  const submit = () => {
    const next: Errors = {};
    if (!title.trim()) next.title = copy.validation.title.required;
    if (!message.trim()) next.message = copy.validation.content.required;
    if (recipientTypes.length === 0) {
      next.recipientTypes = copy.validation.recipientTypes.required;
    }
    if (audience === BroadcastAudience.Selected && selected.length === 0) {
      next.recipients = copy.validation.recipientIds.required;
    }
    setErrors(next);
    if (Object.keys(next).length === 0) send.mutate();
  };

  return {
    title,
    setTitle: (value: string) => {
      setTitle(value);
      setErrors((current) => ({ ...current, title: undefined }));
    },
    message,
    setMessage: (value: string) => {
      setMessage(value);
      setErrors((current) => ({ ...current, message: undefined }));
    },
    recipientTypes,
    changeTypes,
    audience,
    setAudience,
    selected,
    toggleRecipient,
    errors,
    busy: send.isPending,
    submit,
  };
};
