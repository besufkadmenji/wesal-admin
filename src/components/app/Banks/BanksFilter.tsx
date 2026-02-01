import { useDict } from "@/hooks/useDict";
import { useQueryState } from "nuqs";
import { FilterSelect } from "../shared/filter/FilterSelect";
import { SearchInput } from "../shared/filter/SearchInput";

export const BanksFilter = () => {
  const dict = useDict();

  const bankStatusMap = {
    ACTIVE: dict.common.statuses.ACTIVE,
    INACTIVE: dict.common.statuses.INACTIVE,
  };
  const bankStatusOptions = Object.keys(bankStatusMap).map((key) => ({
    label: bankStatusMap[key as keyof typeof bankStatusMap],
    key: key,
  }));
  const [status, setStatus] = useQueryState("status");

  return (
    <div className="grid grid-cols-2 items-center gap-4 lg:flex">
      <SearchInput className="w-full md:w-max" />
      <FilterSelect
        options={bankStatusOptions}
        placeholder={dict.subscription_requests_page.table_headers.type}
        className="w-full md:w-max"
        values={status ? [status] : []}
        onValueChange={(values) => {
          setStatus(values[0] || null);
        }}
      />
    </div>
  );
};
