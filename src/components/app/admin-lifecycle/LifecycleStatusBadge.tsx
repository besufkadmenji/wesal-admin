import {
  StatusChip,
  type StatusTone,
} from "@/components/app/shared/StatusChip";
import { lifecycleEnumLabel } from "./lifecycle-enum-labels";

const TONE_BY_STATUS: Record<string, StatusTone> = {
  ACTIVE: "success",
  ACCEPTED: "success",
  COMPLETED: "success",
  RESOLVED: "success",
  ADMIN_RESOLVED: "success",
  DRAFT: "warning",
  PENDING: "warning",
  PENDING_PAYMENT: "warning",
  AWAITING_CUSTOMER_CONFIRMATION: "warning",
  IN_PROGRESS: "info",
  DELIVERY_IN_PROGRESS: "info",
  UNDER_REVIEW: "info",
  REJECTED: "danger",
  CANCELLED: "danger",
  CLOSED: "danger",
  EXPIRED: "danger",
  DISPUTED: "orange",
  CANCELLATION_REQUESTED: "orange",
};

export const LifecycleStatusBadge = ({
  status,
  lang,
  label,
}: {
  status: string;
  lang: string;
  label?: string;
}) => (
  <StatusChip
    tone={TONE_BY_STATUS[status] ?? "neutral"}
    label={label ?? lifecycleEnumLabel(status, lang)}
  />
);
