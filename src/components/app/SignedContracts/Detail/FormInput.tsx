import { twMerge } from "tailwind-merge";

export const FormInput = ({
  label,
  value,
  className,
}: {
  label: string;
  value?: string;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "grid h-23 grid-cols-1 gap-2 rounded-2xl! border border-[#F2F2F2] bg-[#FBFBFB] p-4",
        className,
      )}
    >
      <p className="text-gray leading-7">{label}</p>
      <p className="leading-7 text-black">{value}</p>
    </div>
  );
};
