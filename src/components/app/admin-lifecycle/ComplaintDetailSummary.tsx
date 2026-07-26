"use client";

import { ComplaintStatus } from "@/gql/graphql";
import { Select, SelectItem } from "@heroui/react";
import { LifecycleDetailField } from "./LifecycleDetailField";
import { LifecycleStatusBadge } from "./LifecycleStatusBadge";
import { lifecycleEnumLabel } from "./lifecycle-enum-labels";
import {
  COMPLAINT_STATUS_OPTIONS,
  ComplaintDetail,
  complaintDetailCopy,
  isTerminalComplaintStatus,
} from "./complaint-detail-helpers";

export const ComplaintDetailSummary = ({
  complaint,
  lang,
  statusPending,
  onStatusChange,
}: {
  complaint: ComplaintDetail;
  lang: string;
  statusPending: boolean;
  onStatusChange: (status: ComplaintStatus) => void;
}) => {
  const copy = complaintDetailCopy(lang);
  const terminal = isTerminalComplaintStatus(complaint.status);
  return (
    <section className="grid gap-4 rounded-2xl bg-white p-6 md:grid-cols-3 dark:bg-black">
      <LifecycleDetailField
        label={copy.transactionNumber}
        value={complaint.publicId ?? copy.empty}
      />
      <LifecycleDetailField
        label={copy.reporterType}
        value={lifecycleEnumLabel(complaint.reporterType, lang)}
      />
      <div>
        <span className="text-gray text-sm">{copy.status}</span>
        <div className="mt-1">
          {terminal ? (
            <LifecycleStatusBadge status={complaint.status} lang={lang} />
          ) : (
            <Select
              aria-label={copy.status}
              className="max-w-52"
              selectedKeys={[complaint.status]}
              isDisabled={statusPending}
              onSelectionChange={(keys) => {
                const status = String(Array.from(keys)[0] ?? "");
                if (status) onStatusChange(status as ComplaintStatus);
              }}
            >
              {COMPLAINT_STATUS_OPTIONS.map((status) => (
                <SelectItem key={status}>
                  {lifecycleEnumLabel(status, lang)}
                </SelectItem>
              ))}
            </Select>
          )}
        </div>
      </div>
    </section>
  );
};
