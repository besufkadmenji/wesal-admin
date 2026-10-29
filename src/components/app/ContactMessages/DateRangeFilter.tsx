import { DayPicker } from "react-day-picker";
import { twMerge } from "tailwind-merge";
import { Button, Popover, PopoverContent, PopoverTrigger } from "@heroui/react";
import { CalendarDays as CalendarIcon } from "lucide-react";
import moment from "moment";
import { useDict } from "@/hooks/useDict";
import { useState } from "react";
export const DateRangeFilter = ({
  dateFrom,
  dateTo,
  setDateFrom,
  setDateTo,
}: {
  dateFrom: string | null;
  dateTo: string | null;
  setDateFrom: (date: string | null) => void;
  setDateTo: (date: string | null) => void;
}) => {
  const dict = useDict();
  const [localDateFrom, setLocalDateFrom] = useState<string | null>(dateFrom);
  const [localDateTo, setLocalDateTo] = useState<string | null>(dateTo);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover
      placement="bottom"
      isOpen={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
    >
      <PopoverTrigger>
        <Button
          startContent={<CalendarIcon className="text-app-link size-4" />}
          variant="bordered"
          className="border-gray-border-alt data-[hover=true]:border-app-primary dark:border-dark-border dark:bg-dark-black shrink-0 border bg-white whitespace-nowrap"
        >
          {localDateFrom
            ? moment(localDateFrom).format("MMM D, YYYY")
            : dict.contact_messages_page.date_from}{" "}
          -{" "}
          {localDateTo
            ? moment(localDateTo).format("MMM D, YYYY")
            : dict.contact_messages_page.date_to}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="grid grid-cols-1 gap-4">
          <DayPicker
            mode="range"
            captionLayout="dropdown"
            classNames={{
              caption_label: twMerge(
                "text-sm font-medium text-subTitle dark:text-dark-subTitle flex items-center gap-3 me-6",
              ),
              chevron: "text-app-link size-4 fill-app-primary",
            }}
            formatters={{
              formatWeekdayName: (date, options) =>
                date.toLocaleDateString(options!.locale!.labels! as string, {
                  weekday: "narrow",
                }),
            }}
            selected={{
              from: localDateFrom ? new Date(localDateFrom) : undefined,
              to: localDateTo ? new Date(localDateTo) : undefined,
            }}
            onSelect={(v) => {
              setLocalDateFrom(v?.from ? v.from.toISOString() : null);
              setLocalDateTo(v?.to ? v.to.toISOString() : null);
            }}
          />
          <Button
            onPress={() => {
              setDateFrom(localDateFrom);
              setDateTo(localDateTo);
              setIsOpen(false);
            }}
            className="bg-app-primary text-white"
          >
            {dict.common.actions.apply}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
