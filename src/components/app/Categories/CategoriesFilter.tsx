import { SearchInput } from "../shared/filter/SearchInput";

export const CategoriesFilter = () => {
  return (
    <div className="grid grid-cols-2 items-center gap-4 lg:flex">
      <SearchInput className="w-full md:w-max" />
    </div>
  );
};
