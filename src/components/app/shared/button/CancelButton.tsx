import { useDict } from "@/hooks/useDict";
import { Button } from "@heroui/react";
import { twMerge } from "tailwind-merge";
import { X as CloseIcon } from "lucide-react";
export const CancelButton = ({
  onPress,
  className,
  isLoading,
  isDisabled,
}: {
  className?: string;
  onPress?: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
}) => {
  const dict = useDict();
  const baseClass =
    "bg-transparent h-10 px-3.5 text-sm rounded-lg leading-5 font-semibold tracking-tight text-[#858D9D] border border-[#858D9D] dark:text-white dark:border-white";
  return (
    <Button
      className={twMerge(baseClass, className)}
      variant="bordered"
      startContent={
        <CloseIcon className="size-5 shrink-0 text-[#858D9D] dark:text-white" />
      }
      onPress={onPress}
    >
      {dict.common.actions.cancel}
    </Button>
  );
};
