import { Select, SelectItem } from "@heroui/react";
import { useId } from "react";
import { twMerge } from "tailwind-merge";

export const FormSelect = ({
  label,
  placeholder,
  value,
  onChange,
  options,
  isDisabled,
  errorMessage,
  readOnly,
}: {
  label?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  options: { label: string; key: string }[];
  isDisabled?: boolean;
  errorMessage?: string;
  readOnly?: boolean;
}) => {
  // UI-8: the visible label names the select (it used to be unlinked).
  const labelId = useId();
  return (
    <div className="grid grid-cols-1 gap-2">
      {label && (
        <p
          id={labelId}
          className="after:text-subTitle text-sm! leading-5 font-semibold! tracking-tight text-[#4D5464]! subpixel-antialiased after:ms-1 after:text-sm after:font-normal dark:text-white! dark:after:text-white/70"
        >
          {label}
        </p>
      )}
      <Select
        aria-labelledby={label ? labelId : undefined}
        aria-label={label ? undefined : placeholder}
        placeholder={placeholder}
        selectedKeys={[value]}
        selectionMode="single"
        disallowEmptySelection
        onSelectionChange={(value) => {
          onChange(Array.from(value)[0].toString() || "");
        }}
        items={options}
        variant="bordered"
        className={twMerge(readOnly && "opacity-100!")}
        classNames={{
          trigger:
            "h-12 rounded-lg bg-gray-border border dark:bg-dark-gray-2 border-gray-border-alt dark:border-dark-gray-3 data-[hover=true]:border-app-primary data-[open=true]:border-app-primary data-[focus=true]:border-app-primary ",
        }}
        isDisabled={isDisabled || readOnly}
        errorMessage={errorMessage}
        isInvalid={!!errorMessage}
      >
        {(item) => <SelectItem>{item.label}</SelectItem>}
      </Select>
    </div>
  );
};

export const FormSelectMultiple = ({
  label,
  placeholder,
  values,
  onChange,
  options,
  isDisabled,
  errorMessage,
  readOnly,
}: {
  label: string;
  placeholder: string;
  values: string[];
  onChange: (value: string[]) => void;
  options: { label: string; key: string }[];
  isDisabled?: boolean;
  errorMessage?: string;
  readOnly?: boolean;
}) => {
  const labelId = useId();
  return (
    <div className="grid grid-cols-1 gap-2">
      <p
        id={labelId}
        className="after:text-subTitle text-sm! leading-5 font-semibold! tracking-tight text-[#4D5464]! subpixel-antialiased after:ms-1 after:text-sm after:font-normal dark:text-white! dark:after:text-white/70"
      >
        {label}
      </p>
      <Select
        aria-labelledby={labelId}
        placeholder={placeholder}
        selectedKeys={values}
        selectionMode="multiple"
        disallowEmptySelection
        onSelectionChange={(value) => {
          onChange(Array.from(value).map((v) => v.toString()) || []);
        }}
        items={options}
        variant="bordered"
        className={twMerge(readOnly && "opacity-100!")}
        classNames={{
          trigger:
            "h-12 rounded-lg bg-gray-border border dark:bg-dark-gray-2 border-gray-border-alt dark:border-dark-gray-3 data-[hover=true]:border-app-primary data-[open=true]:border-app-primary data-[focus=true]:border-app-primary ",
        }}
        isDisabled={isDisabled || readOnly}
        errorMessage={errorMessage}
        isInvalid={!!errorMessage}
      >
        {(item) => <SelectItem>{item.label}</SelectItem>}
      </Select>
    </div>
  );
};
