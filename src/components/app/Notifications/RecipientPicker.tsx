import { FormInput } from "@/components/app/shared/forms/FormInput";
import { BroadcastRecipientType } from "@/gql/graphql";
import { useDict } from "@/hooks/useDict";
import BroadcastService, {
  RecipientOption,
} from "@/services/broadcast.service";
import { Checkbox, Chip, Spinner } from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import { useDeferredValue, useState } from "react";

/** Searchable picker of active accounts of one recipient type. */
export const RecipientPicker = ({
  type,
  selected,
  onToggle,
}: {
  type: BroadcastRecipientType;
  selected: RecipientOption[];
  onToggle: (option: RecipientOption) => void;
}) => {
  const dict = useDict();
  const copy = dict.add_new_notification_form;
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search);
  const options = useQuery({
    queryKey: ["broadcast-recipient-options", type, deferredSearch],
    queryFn: () => BroadcastService.recipientOptions(type, deferredSearch),
  });
  const mine = selected.filter((option) => option.type === type);
  const isSelected = (id: string) => mine.some((option) => option.id === id);

  return (
    <div className="grid grid-cols-1 gap-3">
      <p className="text-sm font-semibold text-[#4D5464] dark:text-white">
        {dict.notifications_page.recipient_types[type]}
      </p>
      {mine.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {mine.map((option) => (
            <Chip
              key={option.id}
              onClose={() => onToggle(option)}
              variant="flat"
            >
              {option.name}
            </Chip>
          ))}
        </div>
      )}
      <FormInput
        label={copy.labels.search_recipients}
        hideLabel
        placeholder={copy.labels.search_recipients}
        value={search}
        onChange={setSearch}
      />
      <div className="border-gray-border-alt dark:border-dark-border grid max-h-64 grid-cols-1 gap-1 overflow-y-auto rounded-lg border p-2">
        {options.isLoading ? (
          <Spinner size="sm" />
        ) : (options.data ?? []).length === 0 ? (
          <p className="text-subTitle p-2 text-sm">{copy.no_matches}</p>
        ) : (
          (options.data ?? []).map((option) => (
            <Checkbox
              key={option.id}
              isSelected={isSelected(option.id)}
              onValueChange={() => onToggle(option)}
              classNames={{ base: "max-w-full", label: "w-full" }}
            >
              <span className="flex justify-between gap-4">
                <span>{option.name}</span>
                {option.detail && (
                  <span className="text-subTitle text-sm" dir="ltr">
                    {option.detail}
                  </span>
                )}
              </span>
            </Checkbox>
          ))
        )}
      </div>
    </div>
  );
};
