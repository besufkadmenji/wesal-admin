import type { StatusTone } from "@/components/app/shared/StatusChip";

/** UI-7: one tone per lifecycle status (badges, dashboard status chart). */
export const TONE_BY_STATUS: Record<string, StatusTone> = {
  ACTIVE: "success",
  COMPLETED: "success",
  RESOLVED: "success",
  ADMIN_RESOLVED: "success",
  DRAFT: "warning",
  PENDING: "warning",
  PENDING_PAYMENT: "warning",
  ACCEPTED: "warning",
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

export const statusTone = (status: string): StatusTone =>
  TONE_BY_STATUS[status] ?? "neutral";
