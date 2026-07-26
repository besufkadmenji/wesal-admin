const labels: Record<string, { en: string; ar: string }> = {
  DRAFT: { en: "Draft", ar: "مسودة" },
  PENDING: { en: "Pending", ar: "قيد الانتظار" },
  ACCEPTED: { en: "Accepted", ar: "مقبول" },
  IN_PROGRESS: { en: "In progress", ar: "قيد التنفيذ" },
  AWAITING_CUSTOMER_CONFIRMATION: {
    en: "Awaiting customer confirmation",
    ar: "بانتظار تأكيد العميل",
  },
  DELIVERY_IN_PROGRESS: { en: "Delivery in progress", ar: "جاري التوصيل" },
  CANCELLATION_REQUESTED: {
    en: "Cancellation requested",
    ar: "تم طلب الإلغاء",
  },
  DISPUTED: { en: "Disputed", ar: "متنازع عليه" },
  COMPLETED: { en: "Completed", ar: "مكتمل" },
  REJECTED: { en: "Rejected", ar: "مرفوض" },
  CANCELLED: { en: "Cancelled", ar: "ملغي" },
  ACTIVE: { en: "Ongoing", ar: "جارية" },
  CLOSED: { en: "Closed", ar: "مغلق" },
  UNDER_REVIEW: { en: "Under review", ar: "قيد المراجعة" },
  RESOLVED: { en: "Resolved", ar: "تم الحل" },
  EXPIRED: { en: "Expired", ar: "منتهي" },
  PENDING_PAYMENT: { en: "Pending payment", ar: "بانتظار الدفع" },
  USER: { en: "Customer", ar: "العميل" },
  PROVIDER: { en: "Provider", ar: "مقدم الخدمة" },
  ADMIN: { en: "Administrator", ar: "المشرف" },
  SYSTEM: { en: "System", ar: "النظام" },
  REPORTER: { en: "Reporter", ar: "مقدم الشكوى" },
  TEXT: { en: "Message", ar: "رسالة" },
  CHAT_FEE_PAID: { en: "Chat fee paid", ar: "تم دفع رسوم المحادثة" },
  CONTRACT_CREATED: { en: "Contract created", ar: "تم إنشاء التعاقد" },
  CONTRACT_RESENT: { en: "Contract resent", ar: "تمت إعادة إرسال التعاقد" },
  CONTRACT_ACCEPTED: { en: "Contract accepted", ar: "تم قبول التعاقد" },
  CONTRACT_REJECTED: { en: "Contract rejected", ar: "تم رفض التعاقد" },
  CONTRACT_PAID: { en: "Contract paid", ar: "تم دفع التعاقد" },
  CONTRACT_PROVIDER_COMPLETED: {
    en: "Provider completed",
    ar: "أكمل مقدم الخدمة",
  },
  CONTRACT_DELIVERY_STARTED: {
    en: "Delivery started",
    ar: "بدأ التوصيل",
  },
  CONTRACT_COMPLETED: { en: "Contract completed", ar: "اكتمل التعاقد" },
  CONTRACT_CANCELLATION_REQUESTED: {
    en: "Cancellation requested",
    ar: "تم طلب إلغاء التعاقد",
  },
  CONTRACT_DISPUTED: { en: "Contract disputed", ar: "التعاقد محل نزاع" },
  CONTRACT_CANCELLED: { en: "Contract cancelled", ar: "تم إلغاء التعاقد" },
  PAYMENT_COMPLETED: { en: "Payment completed", ar: "اكتمل الدفع" },
  PROVIDER_COMPLETED: { en: "Provider completed", ar: "أكمل مقدم الخدمة" },
  DELIVERY_STARTED: { en: "Delivery started", ar: "بدأ التوصيل" },
  CUSTOMER_COMPLETED: { en: "Customer confirmed", ar: "أكد العميل الإكمال" },
  DELIVERY_REFUSED: { en: "Delivery refused", ar: "تم رفض الاستلام" },
  DISPUTE_REFUNDED: { en: "Customer refunded", ar: "تم رد المبلغ للعميل" },
  DISPUTE_RELEASED: {
    en: "Settlement released",
    ar: "تم تحرير التسوية",
  },
  TIMEOUT_COMPLETED: {
    en: "Completed by administrator",
    ar: "أُكمل بواسطة المشرف",
  },
  TIMEOUT_CANCELLED: {
    en: "Cancelled by administrator",
    ar: "أُلغي بواسطة المشرف",
  },
  CUSTOMER_REFUND: { en: "Customer refund", ar: "مبلغ مسترد للعميل" },
  HOLD: { en: "Funds on hold", ar: "مبلغ محتجز" },
  PLATFORM_COMMISSION: { en: "Platform commission", ar: "عمولة المنصة" },
  PROVIDER_RELEASE: { en: "Provider release", ar: "تحويل لمقدم الخدمة" },
  VAT: { en: "VAT", ar: "ضريبة القيمة المضافة" },
  CUSTOMER_ACCEPTANCE: { en: "Customer acceptance", ar: "توقيع قبول العميل" },
  CUSTOMER_COMPLETION: { en: "Customer completion", ar: "توقيع إكمال العميل" },
  PROVIDER_ACCEPTANCE: {
    en: "Provider acceptance",
    ar: "توقيع قبول مقدم الخدمة",
  },
  PROVIDER_COMPLETION: {
    en: "Provider completion",
    ar: "توقيع إكمال مقدم الخدمة",
  },
  REFUND_CUSTOMER: { en: "Full customer refund", ar: "رد كامل للعميل" },
  RELEASE_PROVIDER: {
    en: "Release normal settlement",
    ar: "تحرير التسوية الاعتيادية",
  },
  COMPLETE: { en: "Mark completed", ar: "تحديد كمكتمل" },
  CANCEL: { en: "Mark cancelled", ar: "تحديد كملغي" },
};

export const lifecycleEnumLabel = (value: string, lang: string) =>
  labels[value]?.[lang === "ar" ? "ar" : "en"] ??
  value
    .toLowerCase()
    .split("_")
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(" ");

export const lifecycleEnumOptions = (values: string[], lang: string) =>
  values.map((key) => ({ key, label: lifecycleEnumLabel(key, lang) }));

export const lifecycleDateFrom = (value: string | null) => {
  if (!value) return undefined;
  const date = new Date(value);
  date.setHours(0, 0, 0, 0);
  return date.toISOString();
};

export const lifecycleDateTo = (value: string | null) => {
  if (!value) return undefined;
  const date = new Date(value);
  date.setHours(23, 59, 59, 999);
  return date.toISOString();
};
