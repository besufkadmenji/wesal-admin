"use client";

import { Save as SaveIcon } from "lucide-react";
import { PrimaryButton } from "@/components/app/shared/button/PrimaryButton";
import { useDict } from "@/hooks/useDict";
export enum SaveButtonType {
  Admin,
  Settings,
}
export const SaveButton = ({
  type,
  onPress,
  isLoading,
  isDisabled,
}: {
  type: SaveButtonType;
  onPress?: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
}) => {
  const dict = useDict();
  const labelMap = {
    [SaveButtonType.Admin]: dict.common.actions.save,
    [SaveButtonType.Settings]: dict.common.actions.save,
  };
  return (
    <PrimaryButton
      startContent={<SaveIcon className="size-5" />}
      type="submit"
      onPress={onPress}
      isLoading={isLoading}
      isDisabled={isDisabled}
    >
      {labelMap[type]}
    </PrimaryButton>
  );
};
