import { SearchInput } from "../shared/filter/SearchInput";
import { useDict } from "@/hooks/useDict";
import { useQueryState } from "nuqs";
import { FilterSelect } from "@/components/app/shared/filter/FilterSelect";

export const CitiesFilter = () => {
  const dict = useDict();

  const cityStatusMap = {
    ACTIVE: dict.common.statuses.ACTIVE,
    INACTIVE: dict.common.statuses.INACTIVE,
  };
  const cityStatusOptions = Object.keys(cityStatusMap).map((key) => ({
    label: cityStatusMap[key as keyof typeof cityStatusMap],
    key: key,
  }));
  const [status, setStatus] = useQueryState("status");
  return (
    <div className="grid grid-cols-2 items-center gap-4 lg:flex">
      <SearchInput className="w-full md:w-max" />
      <FilterSelect
        options={cityStatusOptions}
        placeholder={dict.cities_page.table_headers.status}
        className="w-full md:w-max"
        values={status ? [status] : []}
        onValueChange={(values) => {
          setStatus(values[0] || null);
        }}
      />
    </div>
  );
};
