import { ReactNode } from "react";

export const LifecycleDetailField = ({
  label,
  value,
  dir,
  className,
}: {
  label: string;
  value: ReactNode;
  dir?: "ltr" | "rtl";
  className?: string;
}) => (
  <div className={className}>
    <span className="text-gray text-sm">{label}</span>
    <div dir={dir} className="mt-1 font-medium wrap-break-word">
      {value}
    </div>
  </div>
);
