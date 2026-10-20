import { statusMap } from "@/components/app/SignedContracts/renderCell";
import { useDict } from "@/hooks/useDict";
import { useQueryState } from "nuqs";
import { FilterSelect } from "../shared/filter/FilterSelect";
import { SearchInput } from "../shared/filter/SearchInput";

export const SignedContractsFilter = () => {
  const dict = useDict();
  // S4-58: e.g. the dashboard links here with ?status=TERMINATION_REQUESTED.
  const [status, setStatus] = useQueryState("status");
  const options = Object.entries(statusMap(dict)).map(([key, label]) => ({
    key,
    label,
  }));
  return (
    <div className="grid grid-cols-2 items-center gap-4 lg:flex">
      <SearchInput className="w-full md:w-max" />
      <FilterSelect
        options={options}
        placeholder={dict.contract_status.label}
        className="w-full md:w-max"
        values={status ? [status] : []}
        onValueChange={(values) => {
          setStatus(values[0] || null);
        }}
      />
    </div>
  );
};
