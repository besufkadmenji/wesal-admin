import { AdminLifecycleContractQuery } from "@/gql/graphql";

export type ContractDetail = AdminLifecycleContractQuery["adminContract"];

export type ContractSignature = NonNullable<ContractDetail["signatures"]>[number];
export type ContractAudit = NonNullable<ContractDetail["audits"]>[number];
export type ContractSettlement = NonNullable<
  ContractDetail["settlements"]
>[number];

export const CONTRACT_SIGNATURE_TYPES = [
  "CUSTOMER_ACCEPTANCE",
  "CUSTOMER_COMPLETION",
  "PROVIDER_ACCEPTANCE",
  "PROVIDER_COMPLETION",
] as const;

export type ContractSignatureTypeKey =
  (typeof CONTRACT_SIGNATURE_TYPES)[number];

const inProgressStatuses = new Set([
  "ACCEPTED",
  "IN_PROGRESS",
  "AWAITING_CUSTOMER_CONFIRMATION",
  "DELIVERY_IN_PROGRESS",
  "CANCELLATION_REQUESTED",
  "DISPUTED",
]);

export const contractDetailCopy = (lang: string) => {
  const ar = lang === "ar";
  return {
    status: ar ? "الحالة" : "Status",
    version: ar ? "الإصدار" : "Version",
    totalPaid: ar ? "إجمالي المدفوع" : "Total paid",
    providerNet: ar ? "صافي مقدم الخدمة" : "Provider net",
    parties: ar ? "الأطراف والإعلان" : "Parties and listing",
    contractNumber: ar ? "رقم التعاقد" : "Contract number",
    adName: ar ? "اسم الإعلان" : "Ad name",
    clientName: ar ? "اسم العميل" : "Client name",
    clientPhone: ar ? "جوال العميل" : "Client mobile",
    clientLocation: ar ? "موقع العميل" : "Client location",
    tradeName: ar ? "الاسم التجاري" : "Trade name",
    providerPhone: ar ? "جوال مقدم الخدمة" : "Provider mobile",
    providerLocation: ar ? "موقع مقدم الخدمة" : "Provider location",
    financial: ar ? "المالية والتوصيل" : "Financial and delivery",
    agreedPrice: ar ? "السعر المتفق عليه" : "Agreed price",
    depositPercent: ar ? "نسبة العربون" : "Deposit percentage",
    depositAmount: ar ? "مبلغ العربون" : "Deposit amount",
    commissionPercent: ar ? "نسبة العمولة" : "Commission percentage",
    commissionAmount: ar ? "مبلغ العمولة" : "Commission amount",
    vat: ar ? "ضريبة القيمة المضافة" : "VAT",
    deliveryCompany: ar ? "شركة التوصيل" : "Delivery company",
    deliveryEstimate: ar ? "مدة التوصيل التقديرية (أيام)" : "Delivery estimate (days)",
    dates: ar ? "التواريخ والأسباب" : "Dates and reasons",
    acceptanceDate: ar ? "تاريخ قبول التعاقد" : "Contract acceptance date",
    cancellationDate: ar ? "تاريخ إلغاء التعاقد" : "Contract cancellation date",
    completionDate: ar ? "تاريخ إكمال التعاقد" : "Contract completion date",
    cancellationReason: ar ? "سبب الإلغاء" : "Reason for cancellation",
    disputeReason: ar ? "سبب النزاع" : "Dispute reason",
    signatures: ar ? "التوقيعات" : "Signatures",
    unsigned: ar ? "غير موقّع" : "Not signed",
    documentMeta: ar ? "مستند التعاقد" : "Contract document",
    legalTexts: ar ? "النصوص الملزمة" : "Binding texts",
    bindingText: ar ? "نص التعاقد الملزم" : "Binding contract text",
    undertakingText: ar ? "نص التعهد الملزم" : "Binding undertaking text",
    refundPolicy: ar ? "سياسة الاسترداد" : "Refund policy",
    audits: ar ? "سجل التدقيق" : "Audit history",
    noAudits: ar ? "لا توجد أحداث تدقيق" : "No audit events",
    settlements: ar ? "التسويات" : "Settlements",
    noSettlements: ar ? "لا توجد تسويات" : "No settlements",
    resolve: ar ? "حل النزاع / الإجراءراف" : "Admin resolution",
    resolveReason: ar ? "سبب إلزامي" : "Mandatory reason",
    resolveReasonPlaceholder: ar
      ? "اشرح قرار الحل"
      : "Explain the resolution",
    resolveOutcome: ar ? "النتيجة المالية" : "Financial outcome",
    resolveSubmit: ar ? "تنفيذ الحل" : "Resolve contract",
    viewConversation: ar ? "عرض المحادثة" : "View conversation",
    downloadPdf: ar ? "تحميل PDF الموقّع" : "Download signed PDF",
    empty: "—",
  };
};

export const formatContractMoney = (value: number, lang: string) =>
  new Intl.NumberFormat(lang === "ar" ? "ar-SA" : "en-SA", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);

export const formatContractDate = (value: string | null | undefined, lang: string) => {
  if (!value) return null;
  return new Date(value).toLocaleString(lang === "ar" ? "ar-SA" : "en-SA");
};

export const formatContractPercent = (value: number, lang: string) =>
  `${formatContractMoney(value, lang)}%`;

export const showAcceptanceDate = (status: string) =>
  inProgressStatuses.has(status) || status === "COMPLETED";

export const showCancellationDetails = (status: string) =>
  status === "CANCELLED" || status === "CANCELLATION_REQUESTED";

export const showCompletionDate = (status: string) => status === "COMPLETED";

export const showDisputeReason = (status: string) => status === "DISPUTED";

export const findSignature = (
  signatures: ContractSignature[] | null | undefined,
  signatureType: ContractSignatureTypeKey,
) => signatures?.find((signature) => signature.signatureType === signatureType);
