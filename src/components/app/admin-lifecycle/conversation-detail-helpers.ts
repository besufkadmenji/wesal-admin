import {
  AdminLifecycleConversationQuery,
  ComplaintStatus,
  ContractStatus,
  ConversationStatus,
} from "@/gql/graphql";

type AdminConversation = AdminLifecycleConversationQuery["adminConversation"];

export type ConversationDetail = AdminConversation & {
  contracts: Array<{
    id: string;
    publicId: number | null;
    status: ContractStatus;
  }>;
  complaints: Array<{
    id: string;
    publicId: number | null;
    status: ComplaintStatus;
  }>;
};

export type ConversationMessage = NonNullable<
  AdminConversation["messages"]
>[number];

export const conversationDetailCopy = (lang: string) => {
  const ar = lang === "ar";
  return {
    status: ar ? "الحالة" : "Status",
    feeCycle: ar ? "دورة الرسوم" : "Fee cycle",
    parties: ar ? "الأطراف والإعلان" : "Parties and listing",
    conversationNumber: ar ? "رقم المحادثة" : "Conversation number",
    customerName: ar ? "اسم العميل" : "Customer name",
    customerPhone: ar ? "جوال العميل" : "Customer mobile",
    tradeName: ar ? "الاسم التجاري" : "Trade name",
    providerPhone: ar ? "جوال مقدم الخدمة" : "Provider mobile",
    listing: ar ? "الإعلان" : "Listing",
    dates: ar ? "التواريخ والرسوم" : "Dates and fees",
    createdAt: ar ? "تاريخ الإنشاء" : "Created at",
    closedAt: ar ? "تاريخ الإكمال" : "Completed at",
    customerFeePaidAt: ar ? "دفع رسوم العميل" : "Customer fee paid at",
    providerFeePaidAt: ar ? "دفع رسوم مقدم الخدمة" : "Provider fee paid at",
    related: ar ? "السجلات المرتبطة" : "Related records",
    contracts: ar ? "التعاقدات" : "Contracts",
    complaints: ar ? "الشكاوى" : "Complaints",
    none: ar ? "لا يوجد" : "None",
    messages: ar ? "سجل المحادثة" : "Conversation log",
    noMessages: ar ? "لا توجد رسائل" : "No messages",
    viewContract: ar ? "عرض التعاقد" : "View contract",
    viewComplaint: ar ? "عرض الشكوى" : "View complaint",
    empty: "—",
    ongoing: ar ? "جارية" : "Ongoing",
    completed: ar ? "مكتملة" : "Completed",
  };
};

export const formatConversationDate = (
  value: string | null | undefined,
  lang: string,
) => {
  if (!value) return null;
  return new Date(value).toLocaleString(lang === "ar" ? "ar-SA" : "en-SA");
};

export const showClosedAt = (status: string, closedAt: string | null) =>
  status === ConversationStatus.Closed || closedAt != null;

export const conversationStatusLabel = (status: string, lang: string) => {
  const copy = conversationDetailCopy(lang);
  if (status === ConversationStatus.Active) return copy.ongoing;
  if (status === ConversationStatus.Closed) return copy.completed;
  return status;
};
