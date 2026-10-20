import { cn, Textarea } from "@heroui/react";
import { FieldLabel } from "./FieldLabel";
import { FIELD_INPUT_TEXT_CLASS, FIELD_LABEL_CLASS } from "./formClassNames";

export const FormAreaInput = ({
  label,
  placeholder,
  value,
  onChange,
  isOptional = false,
  errorMessage,
  readOnly,
  className,
  dir,
  minRows = 7,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  isOptional?: boolean;
  errorMessage?: string;
  readOnly?: boolean;
  className?: string;
  dir?: "rtl" | "ltr";
  minRows?: number;
}) => {
  return (
    <div dir={dir} className={className}>
      <Textarea
        labelPlacement="outside"
        label={<FieldLabel label={label} isOptional={isOptional} />}
        placeholder={placeholder}
        value={value}
        onValueChange={onChange}
        variant="bordered"
        minRows={minRows}
        className={className}
        classNames={{
          inputWrapper: cn(
            "h-12 rounded-lg bg-gray-border dark:bg-dark-gray-2 dark:border-dark-gray-3 border border-gray-border-alt data-[hover=true]:border-app-primary group-data-[focus=true]:border-app-primary",

            readOnly && "border-gray-border-alt!",
          ),
          label: FIELD_LABEL_CLASS,
          input: FIELD_INPUT_TEXT_CLASS,
        }}
        errorMessage={errorMessage}
        isInvalid={!!errorMessage}
        readOnly={readOnly}
      />
    </div>
  );
};
