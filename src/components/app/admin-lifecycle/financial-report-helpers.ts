import { formatDate } from "@/utils/date.time.helpers";
import { SummaryCardType } from "@/components/app/shared/summary/SummaryCard";

export type ReportKind = "contracts" | "conversations" | "premium";

export type ReportPeriod = "today" | "week" | "month" | "12months" | "all";

export type ReportPeriodSelection = ReportPeriod | null;

export type ReportData = {
  items: Array<Record<string, string | number | boolean | null>>;
  meta: { total: number; page: number; limit: number };
  [key: string]: unknown;
};

export type ReportTotalKey =
  | "totalPaid"
  | "totalProviderNet"
  | "totalVat"
  | "totalCommission"
  | "totalAdminProfit"
  | "totalCharity"
  | "totalContractValue"
  | "totalCustomerRefunds"
  | "totalProviderReleases"
  | "totalCustomerFees"
  | "totalProviderFees"
  | "totalFees";

export type ReportTotal = {
  key: ReportTotalKey;
  labelKey:
    | "totalPaid"
    | "providerNet"
    | "vat"
    | "commission"
    | "adminProfit"
    | "charity"
    | "contractTotal"
    | "refunds"
    | "releases"
    | "customerFees"
    | "providerFees"
    | "totalFees";
};

export const MONEY_COLUMNS = new Set([
  "providerNet",
  "vat",
  "commission",
  "adminProfit",
  "contractTotal",
  "totalPaid",
  "customerRefund",
  "customerFee",
  "providerFee",
  "fee",
]);

export const reportConfig = {
  contracts: {
    endpoint: "/reports/contracts/export",
    // BRD 4.3.22: provider profit, VAT and admin profit are in the footer.
    totals: [
      { key: "totalContractValue", labelKey: "contractTotal" },
      { key: "totalPaid", labelKey: "totalPaid" },
      { key: "totalCharity", labelKey: "charity" },
      { key: "totalCustomerRefunds", labelKey: "refunds" },
      { key: "totalProviderReleases", labelKey: "releases" },
    ] satisfies ReportTotal[],
    // BRD 4.3.22 columns; rowNumber, contractDate, tradeName and
    // deliveryCompany are derived in `reportCellValue`.
    columns: [
      "rowNumber",
      "contractNumber",
      "contractDate",
      "customerName",
      "tradeName",
      "deliveryCompany",
      "providerNet",
      "vat",
      "adminProfit",
      "contractTotal",
    ],
    linkColumn: "contractNumber",
    idField: "contractId",
    detailPath: "/contracts",
    showCategoryFilter: true,
    showDeliveryCompanyFilter: true,
  },
  conversations: {
    endpoint: "/reports/conversation-fees/export",
    totals: [
      { key: "totalCustomerFees", labelKey: "customerFees" },
      { key: "totalProviderFees", labelKey: "providerFees" },
    ] satisfies ReportTotal[],
    columns: [
      "conversationNumber",
      "customerName",
      "providerName",
      "status",
      "customerFee",
      "providerFee",
      "startedAt",
    ],
    linkColumn: "conversationNumber",
    idField: "conversationId",
    detailPath: "/conversations",
    showCategoryFilter: false,
    showDeliveryCompanyFilter: false,
  },
  premium: {
    endpoint: "/reports/premium-ads/export",
    totals: [
      { key: "totalFees", labelKey: "totalFees" },
    ] satisfies ReportTotal[],
    columns: [
      "listingName",
      "providerName",
      "providerPhone",
      "status",
      "fee",
      "createdAt",
      "featuredStartsAt",
      "featuredEndsAt",
    ],
    linkColumn: null,
    idField: null,
    detailPath: null,
    showCategoryFilter: false,
    showDeliveryCompanyFilter: false,
  },
} as const satisfies Record<
  ReportKind,
  {
    endpoint: string;
    totals: ReportTotal[];
    columns: readonly string[];
    linkColumn: string | null;
    idField: string | null;
    detailPath: string | null;
    showCategoryFilter: boolean;
    showDeliveryCompanyFilter: boolean;
  }
>;

export const reportCountCardType: Record<ReportKind, SummaryCardType> = {
  contracts: SummaryCardType.CONTRACTS,
  conversations: SummaryCardType.CONVERSATIONS,
  premium: SummaryCardType.REPORTS,
};

export const reportStatuses: Record<ReportKind, string[]> = {
  contracts: [
    "PENDING",
    "ACCEPTED",
    "REJECTED",
    "IN_PROGRESS",
    "AWAITING_CUSTOMER_CONFIRMATION",
    "DELIVERY_IN_PROGRESS",
    "CANCELLATION_REQUESTED",
    "DISPUTED",
    "COMPLETED",
    "ADMIN_RESOLVED",
    "CANCELLED",
  ],
  conversations: ["ACTIVE", "CLOSED"],
  premium: ["ACTIVE", "EXPIRED", "PENDING_PAYMENT"],
};

export const financialReportCopy = (lang: string) => {
  const ar = lang === "ar";
  return {
    titles: {
      contracts: ar ? "التقرير المالي للتعاقدات" : "Contract financial report",
      conversations: ar
        ? "التقرير المالي لرسوم المحادثات"
        : "Conversation-fee report",
      premium: ar ? "التقرير المالي للإعلانات المميزة" : "Premium-ad report",
    },
    countLabels: {
      contracts: ar ? "التعاقدات" : "Contracts",
      conversations: ar ? "المحادثات" : "Conversations",
      premium: ar ? "دورات الإعلان المميز" : "Promotion cycles",
    },
    countSubTitle: ar ? "إجمالي" : "Total",
    moneySubTitle: ar ? "ر.س" : "SAR",
    status: ar ? "الحالة" : "Status",
    category: ar ? "القسم" : "Category",
    deliveryCompany: ar ? "شركة التوصيل" : "Delivery company",
    footer: {
      contracts: ar ? "عدد التعاقدات" : "Contracts",
      providerNet: ar ? "إجمالي ربح مقدمي الخدمة" : "Total provider profit",
      vat: ar ? "إجمالي الضريبة" : "Total VAT",
      adminProfit: ar ? "إجمالي ربح الإدارة" : "Total admin profit",
      completed: ar ? "التعاقدات المكتملة" : "Completed contracts",
    },
    clearFilters: ar ? "مسح عوامل التصفية" : "Clear filters",
    empty: ar ? "لا توجد نتائج" : "No records found",
    exportPdf: ar ? "تصدير PDF" : "Export PDF",
    exportXlsx: ar ? "تصدير XLSX" : "Export XLSX",
    dash: "—",
    totals: {
      totalPaid: ar ? "إجمالي المدفوع" : "Total paid",
      providerNet: ar ? "صافي مقدم الخدمة" : "Provider net",
      vat: ar ? "الضريبة" : "VAT",
      commission: ar ? "العمولة" : "Commission",
      adminProfit: ar ? "ربح الإدارة" : "Admin profit",
      charity: ar ? "صدقات وصال الخير" : "Wesal Al-Khair charity",
      contractTotal: ar ? "إجمالي التعاقدات" : "Contracts total",
      refunds: ar ? "المبالغ المستردة" : "Refunds",
      releases: ar ? "المبالغ المحولة" : "Releases",
      customerFees: ar ? "رسوم العملاء" : "Customer fees",
      providerFees: ar ? "رسوم مقدمي الخدمة" : "Provider fees",
      totalFees: ar ? "إجمالي الرسوم" : "Total fees",
    },
    columns: {
      rowNumber: "#",
      contractNumber: ar ? "رقم التعاقد" : "Contract no.",
      contractDate: ar ? "تاريخ التعاقد" : "Contract date",
      tradeName: ar ? "الاسم التجاري" : "Trade name",
      deliveryCompany: ar ? "شركة التوصيل" : "Delivery company",
      adminProfit: ar ? "ربح الإدارة" : "Admin profit",
      contractTotal: ar ? "إجمالي التعاقد" : "Contract total",
      conversationNumber: ar ? "المحادثة" : "Conversation",
      customerName: ar ? "العميل" : "Customer",
      providerName: ar ? "مقدم الخدمة" : "Provider",
      providerPhone: ar ? "الجوال" : "Mobile",
      listingName: ar ? "الإعلان" : "Listing",
      status: ar ? "الحالة" : "Status",
      providerNet: ar ? "ربح مقدم الخدمة" : "Provider profit",
      vat: ar ? "الضريبة" : "VAT",
      commission: ar ? "العمولة" : "Commission",
      totalPaid: ar ? "المدفوع" : "Paid",
      customerRefund: ar ? "المسترد" : "Refund",
      customerFee: ar ? "رسوم العميل" : "Customer fee",
      providerFee: ar ? "رسوم مقدم الخدمة" : "Provider fee",
      fee: ar ? "الرسوم" : "Fee",
      createdAt: ar ? "تاريخ الدفع" : "Payment date",
      startedAt: ar ? "تاريخ البدء" : "Start date",
      featuredStartsAt: ar ? "بداية التمييز" : "Featured from",
      featuredEndsAt: ar ? "نهاية التمييز" : "Featured to",
    } as Record<string, string>,
  };
};

export const formatReportMoney = (value: number, lang: string) =>
  new Intl.NumberFormat(lang === "ar" ? "ar-SA" : "en-SA", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);

export const formatReportDate = (
  value: string | number | null | undefined,
  lang: string,
) => {
  if (value == null || value === "") return null;
  return formatDate(String(value), lang, { withTime: true });
};

export const formatReportCell = (
  column: string,
  value: string | number | null | undefined,
  lang: string,
) => {
  const copy = financialReportCopy(lang);
  if (value == null || value === "") return copy.dash;
  if (MONEY_COLUMNS.has(column)) {
    return formatReportMoney(Number(value), lang);
  }
  if (column.endsWith("At")) {
    return formatReportDate(value, lang) ?? copy.dash;
  }
  return String(value);
};

/** Raw value for a column, including the contract report's derived ones. */
export const reportCellValue = (
  column: string,
  item: Record<string, string | number | boolean | null>,
  rowNumber: number,
  lang: string,
): string | number | null => {
  const text = (value: unknown) =>
    value == null || value === "" ? null : (value as string | number);
  switch (column) {
    case "rowNumber":
      return rowNumber;
    case "contractDate":
      return item.createdAt ? formatDate(String(item.createdAt), lang) : null;
    case "tradeName":
      return text(item.providerName);
    case "deliveryCompany":
      return lang === "ar"
        ? text(item.deliveryCompanyNameAr ?? item.deliveryCompanyNameEn)
        : text(item.deliveryCompanyNameEn ?? item.deliveryCompanyNameAr);
    default:
      return text(item[column]);
  }
};

const startOfDay = (date: Date) => {
  const next = new Date(date);
  next.setHours(0, 0, 0, 0);
  return next;
};

const endOfDay = (date: Date) => {
  const next = new Date(date);
  next.setHours(23, 59, 59, 999);
  return next;
};

const toDateInputValue = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const periodToDateRange = (
  period: ReportPeriod,
): { from: string | null; to: string | null } => {
  if (period === "all") return { from: null, to: null };
  const now = new Date();
  const to = toDateInputValue(endOfDay(now));
  if (period === "today") {
    return { from: toDateInputValue(startOfDay(now)), to };
  }
  const fromDate = startOfDay(now);
  if (period === "week") fromDate.setDate(fromDate.getDate() - 6);
  if (period === "month") fromDate.setDate(fromDate.getDate() - 29);
  if (period === "12months") fromDate.setFullYear(fromDate.getFullYear() - 1);
  return { from: toDateInputValue(fromDate), to };
};
