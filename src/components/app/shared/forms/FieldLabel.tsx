import { useDict } from "@/hooks/useDict";

/**
 * UI-8: a field label with the localized "(Optional)" suffix. Replaces the
 * `after:content-[…]` class, whose Arabic variant was malformed and never
 * rendered.
 */
export const FieldLabel = ({
  label,
  isOptional,
}: {
  label: string;
  isOptional?: boolean;
}) => {
  const dict = useDict();
  return (
    <>
      {label}
      {isOptional && (
        <span className="text-subTitle ms-1 text-sm font-normal dark:text-white/70">
          {dict.common.optional}
        </span>
      )}
    </>
  );
};
