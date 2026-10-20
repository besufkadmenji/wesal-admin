import { DetailCard } from "@/components/app/shared/detail/DetailCard";
import { LifecycleDetailField } from "./LifecycleDetailField";
import {
  ComplaintDetail,
  complaintDetailCopy,
  formatComplaintDate,
} from "./complaint-detail-helpers";

export const ComplaintDatesSection = ({
  complaint,
  lang,
}: {
  complaint: ComplaintDetail;
  lang: string;
}) => {
  const copy = complaintDetailCopy(lang);
  return (
    <DetailCard title={copy.dates}>
      <div className="grid gap-4 md:grid-cols-2">
        <LifecycleDetailField
          label={copy.createdAt}
          value={formatComplaintDate(complaint.createdAt, lang) ?? copy.empty}
        />
        <LifecycleDetailField
          label={copy.reviewedAt}
          value={formatComplaintDate(complaint.reviewedAt, lang) ?? copy.empty}
        />
      </div>
    </DetailCard>
  );
};
