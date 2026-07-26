import {
  AdminLifecycleComplaintQuery,
  ComplaintMessageAuthorType,
  ComplaintStatus,
} from "@/gql/graphql";

export type ComplaintDetail = AdminLifecycleComplaintQuery["adminComplaint"];

export type ComplaintMessage = NonNullable<ComplaintDetail["messages"]>[number];

export type ComplaintAttachment = {
  path?: string;
  url?: string;
  filename?: string;
};

const terminalStatuses = new Set<string>([
  ComplaintStatus.Resolved,
  ComplaintStatus.Rejected,
  ComplaintStatus.Closed,
]);

export const COMPLAINT_STATUS_OPTIONS = [
  ComplaintStatus.Pending,
  ComplaintStatus.UnderReview,
  ComplaintStatus.Resolved,
  ComplaintStatus.Rejected,
  ComplaintStatus.Closed,
] as const;

export const complaintDetailCopy = (lang: string) => {
  const ar = lang === "ar";
  return {
    status: ar ? "الحالة" : "Status",
    transactionNumber: ar ? "رقم المعاملة" : "Transaction number",
    reporterType: ar ? "مقدم الشكوى" : "Reporter type",
    content: ar ? "محتوى الشكوى" : "Complaint content",
    title: ar ? "عنوان الشكوى" : "Complaint title",
    description: ar ? "نص الشكوى" : "Complaint text",
    attachments: ar ? "المرفقات" : "Attached images",
    noAttachments: ar ? "لا توجد مرفقات" : "No attachments",
    parties: ar ? "الأطراف والإعلان" : "Parties and listing",
    customerName: ar ? "اسم العميل" : "Customer name",
    customerPhone: ar ? "جوال العميل" : "Customer mobile",
    tradeName: ar ? "الاسم التجاري" : "Trade name",
    providerPhone: ar ? "جوال مقدم الخدمة" : "Provider mobile",
    adName: ar ? "اسم الإعلان" : "Ad name",
    reviewer: ar ? "المراجع" : "Reviewer",
    unassigned: ar ? "غير معيّن" : "Unassigned",
    dates: ar ? "التواريخ" : "Dates",
    createdAt: ar ? "تاريخ الإنشاء" : "Created at",
    reviewedAt: ar ? "تاريخ المراجعة" : "Reviewed at",
    messages: ar ? "رد الإدارة" : "Response",
    noMessages: ar ? "لا توجد ردود بعد" : "No replies yet",
    replyLabel: ar ? "رد المشرف" : "Admin reply",
    sendReply: ar ? "إرسال الرد" : "Send reply",
    threadClosed: ar
      ? "هذه الشكوى مغلقة ولا يمكن الرد عليها."
      : "This complaint is closed to further replies.",
    viewConversation: ar ? "عرض المحادثة" : "View conversation",
    viewContract: ar ? "عرض التعاقد" : "View contract",
    replySent: ar ? "تم إرسال الرد" : "Reply sent",
    statusUpdated: ar ? "تم تحديث الحالة" : "Status updated",
    empty: "—",
  };
};

export const formatComplaintDate = (
  value: string | null | undefined,
  lang: string,
) => {
  if (!value) return null;
  return new Date(value).toLocaleString(lang === "ar" ? "ar-SA" : "en-SA");
};

export const isTerminalComplaintStatus = (status: string) =>
  terminalStatuses.has(status);

export const normalizeComplaintAttachments = (
  attachments: ComplaintDetail["attachments"],
): ComplaintAttachment[] => {
  if (!Array.isArray(attachments)) return [];
  return attachments.filter(
    (item): item is ComplaintAttachment =>
      item != null && typeof item === "object",
  );
};

export const attachmentSource = (attachment: ComplaintAttachment) =>
  attachment.url
    ? attachment.url
    : `${process.env.NEXT_PUBLIC_DATA}/files/${attachment.path ?? attachment.filename ?? ""}`;

export const isAdminComplaintMessage = (authorType: string) =>
  authorType === ComplaintMessageAuthorType.Admin;
