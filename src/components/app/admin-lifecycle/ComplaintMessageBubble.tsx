import { twMerge } from "tailwind-merge";
import { lifecycleEnumLabel } from "./lifecycle-enum-labels";
import {
  ComplaintMessage,
  formatComplaintDate,
  isAdminComplaintMessage,
} from "./complaint-detail-helpers";

export const ComplaintMessageBubble = ({
  message,
  lang,
}: {
  message: ComplaintMessage;
  lang: string;
}) => {
  const isAdmin = isAdminComplaintMessage(message.authorType);
  const time = formatComplaintDate(message.createdAt, lang) ?? "—";

  return (
    <div
      className={twMerge("flex", isAdmin ? "justify-end" : "justify-start")}
    >
      <div
        className={twMerge(
          "max-w-[85%] rounded-2xl px-4 py-3 md:max-w-[70%]",
          isAdmin
            ? "bg-app-primary/10 rounded-ee-md"
            : "bg-gray-background rounded-es-md",
        )}
      >
        <div className="mb-1 flex items-center justify-between gap-3 text-xs">
          <strong>{lifecycleEnumLabel(message.authorType, lang)}</strong>
          <time className="text-gray shrink-0">{time}</time>
        </div>
        <p className="text-sm leading-6 wrap-break-word whitespace-pre-wrap">
          {message.content}
        </p>
      </div>
    </div>
  );
};
