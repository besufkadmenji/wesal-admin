import { twMerge } from "tailwind-merge";

export const AppProgress = ({
  progress,
  className,
}: {
  progress: number;
  className?: string;
}) => {
  const realProgress = Math.min(Math.max(progress, 0), 100);
  return (
    <div
      className={twMerge(
        "grid h-2 w-full grid-cols-1 rounded-full bg-[#E0E0E0] dark:bg-white/10",
        className,
      )}
    >
      <div
        className="from-app-primary to-success h-full rounded-full bg-linear-to-r duration-250 ease-in-out"
        style={{
          width: `${realProgress}%`,
        }}
      />
    </div>
  );
};
