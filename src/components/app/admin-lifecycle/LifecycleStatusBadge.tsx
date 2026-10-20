import { StatusChip } from "@/components/app/shared/StatusChip";
import { lifecycleEnumLabel } from "./lifecycle-enum-labels";
import { statusTone } from "./statusTone";

export const LifecycleStatusBadge = ({
  status,
  lang,
  label,
}: {
  status: string;
  lang: string;
  label?: string;
}) => (
  <StatusChip
    tone={statusTone(status)}
    label={label ?? lifecycleEnumLabel(status, lang)}
  />
);
