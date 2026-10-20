import CheckGreenIcon from "@/assets/icons/check.green.svg";
import { useDict } from "@/hooks/useDict";

export const AbsherVerified = () => {
  const dict = useDict();
  return (
    <div className="grid grid-cols-[auto_1fr] items-center gap-3 rounded-2xl border border-[#389441]/40 bg-[#389441]/8 p-4 dark:bg-[#389441]/15">
      <CheckGreenIcon className="size-7" />
      <div className="grid grid-cols-1 gap-2">
        <h3 className="text-primary font-medium dark:text-white">
          {dict.contract.verifiedWithAbsher}
        </h3>
        <p className="text-subTitle dark:text-dark-subTitle leading-7">
          {dict.contract.verifiedWithAbsherDescription}
        </p>
      </div>
    </div>
  );
};
