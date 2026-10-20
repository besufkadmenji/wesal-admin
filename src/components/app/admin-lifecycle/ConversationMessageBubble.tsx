import { ConversationSenderType, MessageKind } from "@/gql/graphql";
import { twMerge } from "tailwind-merge";
import { lifecycleEnumLabel } from "./lifecycle-enum-labels";
import {
  ConversationMessage,
  formatConversationDate,
} from "./conversation-detail-helpers";

export const ConversationMessageBubble = ({
  message,
  lang,
}: {
  message: ConversationMessage;
  lang: string;
}) => {
  const isSystem =
    message.senderType === ConversationSenderType.System ||
    message.kind !== MessageKind.Text;
  const time =
    formatConversationDate(message.createdAt, lang) ?? "—";

  if (isSystem) {
    return (
      <div className="flex justify-center">
        <div className="bg-gray-background text-subTitle dark:text-dark-subTitle max-w-lg rounded-full px-4 py-2 text-center text-xs dark:bg-white/8">
          <span className="text-primary font-medium dark:text-white">
            {lifecycleEnumLabel(message.kind, lang)}
          </span>
          <span className="mx-2">·</span>
          <time>{time}</time>
          {message.content?.trim() ? (
            <p className="mt-1 whitespace-pre-wrap">{message.content}</p>
          ) : null}
        </div>
      </div>
    );
  }

  const isProvider = message.senderType === ConversationSenderType.Provider;

  return (
    <div
      className={twMerge(
        "flex",
        isProvider ? "justify-end" : "justify-start",
      )}
    >
      <div
        className={twMerge(
          "max-w-[85%] rounded-2xl px-4 py-3 md:max-w-[70%]",
          isProvider
            ? "bg-app-primary/10 text-primary rounded-ee-md dark:bg-[#6474a6]/25 dark:text-white"
            : "bg-gray-background text-primary rounded-es-md dark:bg-white/8 dark:text-white",
        )}
      >
        <div className="mb-1 flex items-center justify-between gap-3 text-xs">
          <strong>{lifecycleEnumLabel(message.senderType, lang)}</strong>
          <time className="text-subTitle dark:text-dark-subTitle shrink-0">{time}</time>
        </div>
        <p className="text-sm leading-6 wrap-break-word whitespace-pre-wrap">
          {message.content}
        </p>
      </div>
    </div>
  );
};
