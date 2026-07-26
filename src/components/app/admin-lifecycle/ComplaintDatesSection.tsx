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
    <section className="rounded-2xl bg-white p-6 dark:bg-black">
      <h2 className="mb-4 text-lg font-bold">{copy.dates}</h2>
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
    </section>
  );
};
