import { FormSection } from "@/components/app/shared/forms/AppForm";
import { FormSelect } from "@/components/app/shared/forms/FormSelect";
import { BadgeBound } from "@/gql/graphql";
import { useDict } from "@/hooks/useDict";
import { Radio, RadioGroup } from "@heroui/react";
import { BadgeTierForm, MAX_BOUNDS, MIN_BOUNDS } from "./badgeOptions";

/** One badge block: max and min dropdowns plus an enable/disable choice. */
export const BadgeTierBlock = ({
  value,
  readOnly,
  onChange,
}: {
  value: BadgeTierForm;
  readOnly: boolean;
  onChange: (change: Partial<BadgeTierForm>) => void;
}) => {
  const dict = useDict();
  const copy = dict.badges_page;
  const options = (bounds: BadgeBound[]) =>
    bounds.map((bound) => ({ key: bound, label: copy.bounds[bound] }));

  return (
    <FormSection title={copy.tiers[value.tier]}>
      <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-3">
        <FormSelect
          label={copy.labels.max}
          placeholder={copy.placeholders.select}
          value={value.maxBound ?? ""}
          options={options(MAX_BOUNDS)}
          onChange={(bound) => onChange({ maxBound: bound as BadgeBound })}
          readOnly={readOnly}
        />
        <FormSelect
          label={copy.labels.min}
          placeholder={copy.placeholders.select}
          value={value.minBound ?? ""}
          options={options(MIN_BOUNDS)}
          onChange={(bound) => onChange({ minBound: bound as BadgeBound })}
          readOnly={readOnly}
        />
        <div className="grid grid-cols-1 gap-2">
          <p className="text-sm leading-5 font-semibold tracking-tight text-[#4D5464] dark:text-white">
            {copy.labels.status}
          </p>
          <RadioGroup
            orientation="horizontal"
            aria-label={copy.labels.status}
            value={value.enabled ? "enabled" : "disabled"}
            onValueChange={(choice) =>
              onChange({ enabled: choice === "enabled" })
            }
            isDisabled={readOnly}
            classNames={{ wrapper: "h-12 items-center gap-6" }}
          >
            <Radio value="enabled">{copy.labels.enabled}</Radio>
            <Radio value="disabled">{copy.labels.disabled}</Radio>
          </RadioGroup>
        </div>
      </div>
    </FormSection>
  );
};
