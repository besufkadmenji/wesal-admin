import { SearchInput } from "../shared/filter/SearchInput";
import { useDict } from "@/hooks/useDict";
import { useQueryState } from "nuqs";
import { FilterSelect } from "@/components/app/shared/filter/FilterSelect";

export const CategoriesFilter = () => {
  const dict = useDict();

  const categoryStatusMap = {
    ACTIVE: dict.common.statuses.ACTIVE,
    INACTIVE: dict.common.statuses.INACTIVE,
  };
  const categoryStatusOptions = Object.keys(categoryStatusMap).map((key) => ({
    label: categoryStatusMap[key as keyof typeof categoryStatusMap],
    key: key,
  }));
  const [status, setStatus] = useQueryState("status");
  return (
    <div className="grid grid-cols-2 items-center gap-4 lg:flex">
      <SearchInput className="w-full md:w-max" />
      <FilterSelect
        options={categoryStatusOptions}
        placeholder={dict.categories_page.table_headers.status}
        className="w-full md:w-max"
        values={status ? [status] : []}
        onValueChange={(values) => {
          setStatus(values[0] || null);
        }}
      />
    </div>
  );
};
