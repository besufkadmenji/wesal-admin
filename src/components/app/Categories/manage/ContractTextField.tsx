import { Switch } from "@heroui/react";
import { ReactNode } from "react";
import { useDict } from "@/hooks/useDict";

export const ContractTextField = ({
  title,
  enabled,
  onEnabledChange,
  readOnly,
  hint,
  children,
}: {
  title: string;
  enabled: boolean;
  onEnabledChange: (enabled: boolean) => void;
  readOnly?: boolean;
  hint?: ReactNode;
  children: ReactNode;
}) => {
  const dict = useDict();
  return (
    <div className="border-default-200 grid gap-3 rounded-xl border p-4 md:col-span-2">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-semibold">{title}</p>
        <Switch
          isSelected={enabled}
          isReadOnly={readOnly}
          onValueChange={onEnabledChange}
        >
          {enabled
            ? dict.category_contract_settings.enabled
            : dict.category_contract_settings.disabled}
        </Switch>
      </div>
      {hint ? <p className="text-default-500 text-sm">{hint}</p> : null}
      {children}
    </div>
  );
};
