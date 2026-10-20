import { DetailCard } from "@/components/app/shared/detail/DetailCard";
import { LifecycleDetailField } from "./LifecycleDetailField";
import {
  ComplaintDetail,
  complaintDetailCopy,
} from "./complaint-detail-helpers";

export const ComplaintPartiesSection = ({
  complaint,
  lang,
}: {
  complaint: ComplaintDetail;
  lang: string;
}) => {
  const copy = complaintDetailCopy(lang);
  return (
    <DetailCard title={copy.parties}>
      <div className="grid gap-4 md:grid-cols-2">
        <LifecycleDetailField
          label={copy.customerName}
          value={complaint.conversation.user.name ?? copy.empty}
        />
        <LifecycleDetailField
          label={copy.customerPhone}
          value={complaint.conversation.user.phone}
          dir="ltr"
        />
        <LifecycleDetailField
          label={copy.tradeName}
          value={complaint.conversation.provider.commercialName ?? copy.empty}
        />
        <LifecycleDetailField
          label={copy.providerPhone}
          value={complaint.conversation.provider.phone}
          dir="ltr"
        />
        <LifecycleDetailField
          label={copy.adName}
          value={complaint.listing.name}
        />
        <LifecycleDetailField
          label={copy.reviewer}
          value={complaint.reviewer?.fullName ?? copy.unassigned}
        />
      </div>
    </DetailCard>
  );
};
