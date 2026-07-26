import { twMerge } from "tailwind-merge";
import { lifecycleEnumLabel } from "./lifecycle-enum-labels";

const success = new Set(["ACTIVE", "ACCEPTED", "COMPLETED", "RESOLVED"]);
const warning = new Set([
  "DRAFT",
  "PENDING",
  "PENDING_PAYMENT",
  "AWAITING_CUSTOMER_CONFIRMATION",
]);
const info = new Set(["IN_PROGRESS", "DELIVERY_IN_PROGRESS", "UNDER_REVIEW"]);
const danger = new Set(["REJECTED", "CANCELLED", "CLOSED", "EXPIRED"]);

export const LifecycleStatusBadge = ({
  status,
  lang,
  label,
}: {
  status: string;
  lang: string;
  label?: string;
}) => (
  <span
    className={twMerge(
      "inline-flex rounded-xl px-2 py-1 text-sm font-medium",
      success.has(status) && "bg-green-50 text-green-600",
      warning.has(status) && "bg-yellow-50 text-yellow-700",
      info.has(status) && "bg-indigo-50 text-indigo-600",
      danger.has(status) && "bg-red-50 text-red-600",
      ["DISPUTED", "CANCELLATION_REQUESTED"].includes(status) &&
        "bg-orange-50 text-orange-600",
    )}
  >
    {label ?? lifecycleEnumLabel(status, lang)}
  </span>
);
