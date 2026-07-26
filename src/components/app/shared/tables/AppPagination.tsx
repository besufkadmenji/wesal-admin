import ChevronLeftIcon from "@/assets/icons/app/chevron.left.svg";
import ChevronRightIcon from "@/assets/icons/app/chevron.right.svg";
import {
  cn,
  Pagination,
  PaginationItemRenderProps,
  PaginationItemType,
} from "@heroui/react";

export type PaginationType = {
  page: number;
  total: number;
  onChange: (page: number) => void;
};

export const AppPagination = ({
  pagination,
}: {
  pagination: PaginationType;
}) => {
  const hasNext = pagination.page < pagination.total;
  const hasPrevious = pagination.page > 1;
  const renderItem = ({
    ref,
    key,
    value,
    onNext,
    onPrevious,
    setPage,
    className,
  }: PaginationItemRenderProps) => {
    if (value === PaginationItemType.NEXT) {
      return hasNext ? (
        <button
          key={key}
          className={cn(
            className,
            "text-app-primary size-8 min-w-8 bg-[#5DD5C412]",
          )}
          onClick={onNext}
        >
          <ChevronRightIcon className="size-5 rtl:rotate-180" />
        </button>
      ) : (
        <div key="next" />
      );
    }

    if (value === PaginationItemType.PREV) {
      return hasPrevious ? (
        <button
          key={key}
          className={cn(
            className,
            "text-app-primary size-8 min-w-8 bg-[#5DD5C412]",
          )}
          onClick={onPrevious}
        >
          <ChevronLeftIcon className="size-5 rtl:rotate-180" />
        </button>
      ) : (
        <div key="prev" />
      );
    }

    if (value === PaginationItemType.DOTS) {
      return (
        <button key={key} className={className}>
          ...
        </button>
      );
    }

    return (
      <button
        key={key}
        ref={ref}
        className={cn(className)}
        onClick={() => setPage(value)}
      >
        {value}
      </button>
    );
  };

  return (
    <Pagination
      page={pagination.page}
      total={pagination.total}
      onChange={pagination.onChange}
      renderItem={renderItem}
      showControls
      className="mx-2 my-3"
      classNames={{
        cursor:
          "bg-app-primary rounded-lg text-sm font-semibold leading-5 tracking-tight size-8",
        item: "rounded-lg bg-[#5DD5C412] text-app-primary size-8 text-sm font-semibold leading-5 tracking-tight",
        prev: "size-8 bg-[#5DD5C412] text-app-primary",
        wrapper: "gap-2",
      }}
    />
  );
};
