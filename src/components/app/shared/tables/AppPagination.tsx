import { ChevronLeft, ChevronRight } from "lucide-react";
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
            "text-app-link bg-accent-soft size-8 min-w-8 rounded-lg",
          )}
          onClick={onNext}
        >
          <ChevronRight className="size-4 rtl:rotate-180" strokeWidth={2} />
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
            "text-app-link bg-accent-soft size-8 min-w-8 rounded-lg",
          )}
          onClick={onPrevious}
        >
          <ChevronLeft className="size-4 rtl:rotate-180" strokeWidth={2} />
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
      className="mx-2 my-3 justify-self-center"
      classNames={{
        cursor:
          "bg-app-primary rounded-lg text-sm font-semibold leading-5 tracking-tight size-8",
        item: "rounded-lg bg-transparent text-subTitle hover:bg-accent-soft hover:text-app-link size-8 text-sm font-semibold leading-5 tracking-tight dark:text-dark-subTitle",
        prev: "size-8 bg-accent-soft text-app-link",
        wrapper: "gap-2",
      }}
    />
  );
};
