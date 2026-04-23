import { ListingType } from "@/gql/graphql";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import { useQueryState } from "nuqs";
import { FilterSelect } from "../shared/filter/FilterSelect";
import { SearchInput } from "../shared/filter/SearchInput";

export const ListingsFilter = () => {
  const dict = useDict();
  const lang = useLang();

  const listingTypeOptions = [
    { label: lang === "ar" ? "مجاني" : "Free", key: ListingType.Free },
    { label: lang === "ar" ? "مدفوع" : "Paid", key: ListingType.Featured },
  ];
  const listingStatusMap = {
    ACTIVE: dict.common.statuses.ACTIVE,
    INACTIVE: dict.common.statuses.INACTIVE,
  };
  const listingStatusOptions = Object.keys(listingStatusMap).map((key) => ({
    label: listingStatusMap[key as keyof typeof listingStatusMap],
    key: key,
  }));
  const [type, setType] = useQueryState("type");
  const [status, setStatus] = useQueryState("status");

  return (
    <div className="grid grid-cols-2 items-center gap-4 lg:flex">
      <SearchInput className="w-full md:w-max" />
      <FilterSelect
        options={listingTypeOptions}
        placeholder={dict.listings_page.table_headers.type}
        className="w-full md:w-max"
        values={type ? [type] : []}
        onValueChange={(values) => {
          setType(values[0] || null);
        }}
      />
      <FilterSelect
        options={listingStatusOptions}
        placeholder={dict.listings_page.table_headers.status}
        className="w-full md:w-max"
        values={status ? [status] : []}
        onValueChange={(values) => {
          setStatus(values[0] || null);
        }}
      />
    </div>
  );
};
