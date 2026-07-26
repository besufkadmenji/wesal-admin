import CalendarIcon from "@/assets/icons/app/calendar.svg";
import { cn, DatePicker, DateValue } from "@heroui/react";
import { parseDate } from "@internationalized/date";
import { ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

export const FormDatePicker = ({
  label,
  className,
  onChange,
  value: initial,
  classNames,
  selectorIcon,
  selectorButtonPlacement,
  readOnly,
  errorMessage,
}: {
  label: string;
  className?: string;
  classNames?: {
    inputWrapper?: string;
  };
  value: string | null;
  onChange: (date: string | null) => void;
  selectorIcon?: ReactNode;
  selectorButtonPlacement?: "start" | "end";
  readOnly?: boolean;
  errorMessage?: string;
}) => {
  const [value, setValue] = useState<DateValue | null>(
    initial ? (parseDate(initial) as unknown as DateValue) : null,
  );

  return (
    <DatePicker
      label={label}
      labelPlacement="outside"
      variant="bordered"
      className={twMerge(className, readOnly && "opacity-100!")}
      selectorButtonPlacement={selectorButtonPlacement}
      selectorIcon={
        selectorIcon ?? <CalendarIcon className="size-3! text-white" />
      }
      value={value as never}
      onChange={(date: unknown) => {
        if (!date) {
          return;
        }
        const selected = date as DateValue;
        setValue(selected);
        onChange(String(selected));
      }}
      isDisabled={readOnly}
      classNames={{
        label:
          "text-[#4D5464]! dark:text-white! text-sm! font-semibold! leading-5 tracking-tight after:text-subTitle after:font-normal after:text-sm after:ms-1 dark:after:text-white/70",
        selectorButton: "p-2",
        selectorIcon: "text-[#53545C] dark:text-white",
        inputWrapper: cn(
          "h-10 rounded-lg bg-gray-border border dark:bg-dark-gray-2 dark:border-dark-gray-3 border-gray-border-alt hover:border-app-primary focus-within:border-app-primary focus-within:hover:border-app-primary ",
          classNames?.inputWrapper,
        ),
        input:
          "placeholder:[#4D5464] dark:placeholder:text-white/50 dark:text-white text-secondary text-sm font-semibold leading-5 tracking-tight",
      }}
      calendarProps={{
        classNames: {
          cellButton:
            "data-[selected=true]:text-white data-[selected=true]:bg-app-primary data-[hover=true]:text-app-primary data-[selected=true]:data-[hover=true]:bg-app-primary data-[selected=true]:data-[hover=true]:text-white",
        },
      }}
      errorMessage={errorMessage}
      isInvalid={!!errorMessage}
    />
  );
};
