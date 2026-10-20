import { useDict } from "@/hooks/useDict";
import { norsal } from "@/assets/fonts/norsal";
import { sar } from "@/assets/fonts/sar";
import { Button, cn, Input } from "@heroui/react";
import { HTMLInputTypeAttribute, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";
import { FieldLabel } from "./FieldLabel";
import { FIELD_INPUT_TEXT_CLASS, FIELD_LABEL_CLASS } from "./formClassNames";
import { Eye as EyeIcon } from "lucide-react";
import { EyeOff as EyeOffIcon } from "lucide-react";
export const FormInput = ({
  label,
  placeholder,
  value,
  onChange,
  isOptional = false,
  startContent,
  endContent,
  hideLabel = false,
  onSubmit,
  isDisabled = false,
  className,
  classNames,
  onFocus,
  onBlur,
  errorMessage,
  readOnly,
  type,
  dir,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  isOptional?: boolean;
  startContent?: ReactNode;
  endContent?: ReactNode;
  hideLabel?: boolean;
  onSubmit?: () => void;
  isDisabled?: boolean;
  className?: string;
  classNames?: {
    inputWrapper?: string;
    input?: string;
    label?: string;
  };
  onFocus?: () => void;
  onBlur?: () => void;
  errorMessage?: string;
  readOnly?: boolean;
  type?: HTMLInputTypeAttribute;
  dir?: "rtl" | "ltr";
}) => {
  return (
    <div dir={dir} className={twMerge("grid w-full grid-cols-1")}>
      <Input
        labelPlacement="outside"
        label={
          hideLabel ? null : (
            <FieldLabel label={label} isOptional={isOptional} />
          )
        }
        aria-label={label}
        placeholder={placeholder}
        value={value}
        onValueChange={onChange}
        variant="bordered"
        size="lg"
        className={twMerge(norsal.className, className)}
        errorMessage={errorMessage}
        isInvalid={!!errorMessage}
        classNames={{
          inputWrapper: cn(
            "h-12 rounded-lg border  bg-gray-border  dark:bg-dark-gray-2 dark:border-dark-gray-3 border-gray-border-alt data-[hover=true]:border-app-primary group-data-[focus=true]:border-app-primary group-data-[focus=true]:data-[hover=true]:border-app-primary",
            classNames?.inputWrapper,
            readOnly && "border-gray-border-alt! dark:border-dark-border!",
          ),
          label: twMerge(FIELD_LABEL_CLASS, classNames?.label),
          input: twMerge(FIELD_INPUT_TEXT_CLASS, classNames?.input),
        }}
        startContent={startContent}
        endContent={endContent}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            onSubmit?.();
          }
        }}
        isDisabled={isDisabled}
        onFocus={onFocus}
        onBlur={onBlur}
        readOnly={readOnly}
        type={type}
      />
    </div>
  );
};

export const CurrencyInput = ({
  label,
  placeholder,
  value,
  onChange,
  isOptional = false,
  isDisabled,
  errorMessage,
  readOnly,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  isOptional?: boolean;
  isDisabled?: boolean;
  errorMessage?: string;
  readOnly?: boolean;
}) => {
  return (
    <FormInput
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      isOptional={isOptional}
      endContent={
        <div className={twMerge("text-subTitle text-xs", sar.className)}>A</div>
      }
      errorMessage={errorMessage}
      isDisabled={isDisabled}
      readOnly={readOnly}
    />
  );
};

export const PasswordInput = ({
  label,
  placeholder,
  value,
  onChange,
  isOptional = false,
  isDisabled,
  errorMessage,
  readOnly,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  isOptional?: boolean;
  isDisabled?: boolean;
  errorMessage?: string;
  readOnly?: boolean;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const a11y = useDict().common.a11y;
  return (
    <FormInput
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      isOptional={isOptional}
      endContent={
        <Button
          className="size-5 min-h-0 min-w-0 bg-transparent p-0"
          onPress={() => setShowPassword(!showPassword)}
          isIconOnly
          aria-label={showPassword ? a11y.hide_password : a11y.show_password}
          aria-pressed={showPassword}
        >
          {showPassword ? (
            <EyeOffIcon aria-hidden className="text-subTitle size-5 dark:text-white" />
          ) : (
            <EyeIcon aria-hidden className="text-subTitle size-5 dark:text-white" />
          )}
        </Button>
      }
      errorMessage={errorMessage}
      isDisabled={isDisabled}
      readOnly={readOnly}
      type={showPassword ? "text" : "password"}
    />
  );
};
