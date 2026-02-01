import { useDict } from "@/hooks/useDict";
import { useQueryState } from "nuqs";
import { FilterSelect } from "../shared/filter/FilterSelect";
import { SearchInput } from "../shared/filter/SearchInput";

export const DeliveryCompaniesFilter = () => {
  const dict = useDict();

  const deliveryCompanyStatusMap = {
    ACTIVE: dict.common.statuses.ACTIVE,
    INACTIVE: dict.common.statuses.INACTIVE,
  };
  const deliveryCompanyStatusOptions = Object.keys(deliveryCompanyStatusMap).map((key) => ({
    label: deliveryCompanyStatusMap[key as keyof typeof deliveryCompanyStatusMap],
    key: key,
  }));
  const [status, setStatus] = useQueryState("status");

  return (
    <div className="grid grid-cols-2 items-center gap-4 lg:flex">
      <SearchInput className="w-full md:w-max" />
      <FilterSelect
        options={deliveryCompanyStatusOptions}
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
