import { DayPicker } from "react-day-picker";
import { twMerge } from "tailwind-merge";
import { Button, Popover, PopoverContent, PopoverTrigger } from "@heroui/react";
import CalendarIcon from "@/assets/icons/app/calendar.svg";
import moment from "moment";
import { useDict } from "@/hooks/useDict";
import { useEffect, useState } from "react";
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
          startContent={<CalendarIcon className="size-4" />}
          variant="bordered"
          className="border bg-white"
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
                "text-sm font-medium text-[#8B8D97] flex items-center gap-3 ltr:mr-6 rtl:ml-6",
              ),
              chevron: "text-[#000000] size-4",
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
              console.log(v?.from?.toISOString(), v?.to?.toISOString());
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
            className="bg-primary text-white"
          >
            {dict.common.actions.apply}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
