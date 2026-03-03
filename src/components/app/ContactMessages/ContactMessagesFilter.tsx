import { useDict } from "@/hooks/useDict";
import { useQueryState } from "nuqs";
import { FilterSelect } from "../shared/filter/FilterSelect";
import { FormDatePicker } from "../shared/forms/FormDatePicker";
import { SearchInput } from "../shared/filter/SearchInput";
import { DayPicker } from "react-day-picker";
import { twMerge } from "tailwind-merge";
import { Button, Popover, PopoverContent, PopoverTrigger } from "@heroui/react";
import CalendarIcon from "@/assets/icons/app/calendar.svg";
import moment from "moment";
import { DateRangeFilter } from "@/components/app/ContactMessages/DateRangeFilter";
import { SenderType } from "@/gql/graphql";

export const ContactMessagesFilter = () => {
  const dict = useDict();
  const d = dict.contact_messages_page;

  const statusOptions = Object.entries(d.status).map(([key, label]) => ({
    key,
    label,
  }));

  const messageTypeOptions = Object.entries(d.message_types).map(
    ([key, label]) => ({
      key,
      label,
    }),
  );
  const senderMap = {
    [SenderType.Guest]: dict.contact_message_page.sender_types.guest,
    [SenderType.User]: dict.contact_message_page.sender_types.user,
    [SenderType.Provider]: dict.contact_message_page.sender_types.provider,
  };
  const [status, setStatus] = useQueryState("status");
  const [messageType, setMessageType] = useQueryState("messageType");
  const [senderType, setSenderType] = useQueryState("senderType");
  const [dateFrom, setDateFrom] = useQueryState("dateFrom");
  const [dateTo, setDateTo] = useQueryState("dateTo");
  const [query, setQuery] = useQueryState("search");

  return (
    <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_auto_auto] items-center gap-4">
      <SearchInput className="w-full lg:min-w-0" noClear key={query} />
      <FilterSelect
        options={statusOptions}
        placeholder={d.filter_placeholder}
        className="w-full"
        classNames={{
          innerWrapper: "min-w-0",
        }}
        values={status ? [status] : []}
        onValueChange={(values) => {
          setStatus(values[0] || null);
        }}
      />
      <FilterSelect
        options={messageTypeOptions}
        placeholder={d.type_placeholder}
        className="w-full"
        classNames={{
          innerWrapper: "min-w-0",
        }}
        values={messageType ? [messageType] : []}
        onValueChange={(values) => {
          setMessageType(values[0] || null);
        }}
      />
      <FilterSelect
        options={Object.entries(senderMap).map(([key, label]) => ({
          key,
          label,
        }))}
        placeholder={dict.contact_message_page.sender_type}
        className="w-full"
        classNames={{
          innerWrapper: "min-w-0",
        }}
        values={senderType ? [senderType] : []}
        onValueChange={(values) => {
          setSenderType(values[0] || null);
        }}
      />
      <DateRangeFilter
        key={`${dateFrom}${dateTo}`}
        dateFrom={dateFrom}
        dateTo={dateTo}
        setDateFrom={(date: string | null): void => {
          setDateFrom(date);
        }}
        setDateTo={(date: string | null): void => {
          setDateTo(date);
        }}
      />

      {(status || messageType || dateFrom || dateTo || query || senderType) && (
        <Button
          onPress={() => {
            setStatus(null);
            setMessageType(null);
            setDateFrom(null);
            setDateTo(null);
            setQuery(null);
            setSenderType(null);
          }}
          className="bg-primary/10 text-primary font-medium"
        >
          {dict.common.actions.clearFilters}
        </Button>
      )}

      {/* <FormDatePicker
        label={d.date_from}
        className="w-full"
        value={dateFrom}
        onChange={(date) => setDateFrom(date)}
      />
      <FormDatePicker
        label={d.date_to}
        className="w-full"
        value={dateTo}
        onChange={(date) => setDateTo(date)}
      /> */}
    </div>
  );
};
