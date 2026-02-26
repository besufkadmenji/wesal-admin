import { RejectReasonModal } from "@/components/app/ProviderRequests/Detail/RejectReasonModal";
import { SuccessModal } from "@/components/app/ProviderRequests/Detail/SuccessModal";
import { useProviders } from "@/components/app/ProviderRequests/useProvider";
import { NoData, NoDataType } from "@/components/app/shared/NoData";
import { useDict } from "@/hooks/useDict";
import { DateTimeHelpers } from "@/utils/date.time.helpers";
import { usePathname, useRouter } from "next/navigation";
import { parseAsInteger, useQueryState } from "nuqs";
import { Key, ReactNode } from "react";
import { AppTable, ColumnType, RowType } from "../shared/tables/AppTable";
import { AppTableSkeleton } from "../shared/tables/AppTableSkeleton";
import { useManageProvider } from "./Detail/useManageProvider";
import { renderCell } from "./renderCell";

export const RequestsList = () => {
  const dict = useDict();
  const { data, isLoading } = useProviders();
  // const { deleteProduct, busy } = useManageProduct();
  const [isDeleteWarningOpen, setIsDeleteWarningOpen] = useQueryState(
    "isDeleteWarningOpen",
  );
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const { activateProvider, deactivateProvider, busy } = useManageProvider();
  const [showRejectModal, setShowRejectModal] =
    useQueryState("showRejectModal");
  const request = data?.items.find((req) => req.id === showRejectModal);
  const router = useRouter();
  const pathname = usePathname();
  const columns: ColumnType[] = [
    {
      key: "number",
      label: dict.providers_request_page.table_headers.number,
    },
    {
      key: "name",
      label: dict.providers_request_page.table_headers.name,
    },
    {
      key: "phone",
      label: dict.providers_request_page.table_headers.phone_number,
    },
    {
      key: "email",
      label: dict.providers_request_page.table_headers.email,
    },
    {
      key: "businessName",
      label: dict.providers_request_page.table_headers.businessName,
      align: "center",
    },
    {
      key: "date",
      label: dict.providers_request_page.table_headers.request_date,
      align: "center",
    },
    {
      key: "action",
      label: dict.providers_request_page.table_headers.actions,
      align: "center",
    },
  ];

  return isLoading ? (
    <AppTableSkeleton columns={columns.length} rows={10} />
  ) : !data || data.items.length === 0 ? (
    <NoData type={NoDataType.SubscriberRequests} />
  ) : (
    <>
      <AppTable
        label="Requests"
        columns={columns}
        rows={data.items.map((request) => ({
          key: request.id,
          number: `${request.publicId ?? "-"}`,
          name: request.name ?? "-",
          phone: request.phone,
          email: request.email,
          businessName: request.commercialName ?? "-",
          date: DateTimeHelpers.formatDate(request.createdAt),
        }))}
        renderCell={(row: RowType, column: Key): ReactNode =>
          renderCell(row, column, dict, {
            onView: () => {
              router.push(`${pathname}/${row.key}`);
            },
            onApprove: () => {
              activateProvider(row.key);
            },
            onReject: () => {
              setShowRejectModal(row.key, { history: "push" });
            },
          })
        }
        pagination={{
          page: data.meta.page,
          total: data.meta.totalPages,
          onChange: (p) => {
            setPage(p, { history: "push" });
          },
        }}
      />
      <SuccessModal />
      {request && <RejectReasonModal request={request} />}
    </>
  );
};
