import { AppCheckbox } from "@/components/app/shared/AppCheckbox";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { Key, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  AppPagination,
  PaginationType,
} from "@/components/app/shared/tables/AppPagination";

export type { PaginationType } from "@/components/app/shared/tables/AppPagination";

export type ColumnType = {
  key: string;
  label: string;
  align?: "start" | "end" | "center";
};

export type RowType = {
  key: string;
  [key: string]: string;
};

export const AppTable = ({
  columns,
  rows,
  renderCell,
  selectedRows,
  onRowSelect,
  onSelectAllRows,
  pagination,
  label,
  endAlign = "end",
  classNames,
  disableSelect = true,
  rowClick,
  emptyContent,
}: {
  columns: ColumnType[];
  rows: RowType[];
  renderCell: (row: RowType, column: Key) => ReactNode;
  selectedRows?: RowType[];
  onRowSelect?: (rows: RowType[]) => void;
  onSelectAllRows?: (rows: RowType[]) => void;
  pagination?: PaginationType;
  label?: string;
  endAlign?: "center" | "start" | "end" | undefined;
  disableSelect?: boolean;
  classNames?: {
    table?: string;
    wrapper?: string;
    th?: string;
    tr?: string;
  };
  rowClick?: (row: RowType) => void;
  emptyContent?: ReactNode;
}) => {
  const [innerSelectedRows, setInnerSelectedRows] = useState<RowType[]>(
    selectedRows || [],
  );

  const allSelected =
    innerSelectedRows.length === rows.length && rows.length > 0;
  const someSelected =
    innerSelectedRows.length > 0 && innerSelectedRows.length < rows.length;

  return (
    <div
      className={twMerge(
        "dark:bg-dark-black grid grid-cols-1 overflow-hidden rounded-2xl border border-[#22283a]/[0.07] bg-white p-0 shadow-[0_1px_2px_rgba(34,40,58,0.04),0_8px_24px_-12px_rgba(34,40,58,0.10)] dark:border-white/8",
        classNames?.table,
      )}
    >
      <Table
        aria-label={label ?? "App Table"}
        classNames={{
          wrapper: twMerge(
            "shadow-none border-0 p-0 rounded-none",
            classNames?.wrapper,
          ),
          th: twMerge(
            "rounded-none! h-11 bg-[#f6f7fa] dark:bg-white/[0.04] border-b border-[#22283a]/[0.07] text-subTitle text-xs font-semibold leading-5 tracking-wide dark:text-dark-subTitle dark:border-white/8",
            classNames?.th,
          ),
          tr: twMerge(
            "border-b border-[#22283a]/[0.05] last:border-b-0 text-title text-sm dark:text-dark-white leading-5 h-14 transition-colors duration-150 hover:bg-[#22283a]/[0.025] dark:border-white/5 dark:hover:bg-white/[0.03]",
            classNames?.tr,
            rowClick && "cursor-pointer",
          ),
        }}
        key={innerSelectedRows.length}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.key}
              align={
                column.align ??
                (columns[columns.length - 1].key === column.key
                  ? endAlign
                  : "start")
              }
            >
              {!disableSelect && columns[0].key === column.key && (
                <AppCheckbox
                  isIndeterminate={someSelected}
                  isSelected={allSelected}
                  onValueChange={(v) => {
                    const next = v ? [...rows] : [];
                    setInnerSelectedRows(next);
                    onSelectAllRows?.(next);
                  }}
                />
              )}
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows} emptyContent={emptyContent}>
          {(item) => (
            <TableRow key={item.key} onClick={() => rowClick?.(item)}>
              {(columnKey) => (
                <TableCell>
                  {!disableSelect && columns[0].key === columnKey ? (
                    <div className="flex items-center">
                      <AppCheckbox
                        isSelected={innerSelectedRows.some(
                          (r) => r.key === item.key,
                        )}
                        onValueChange={(v) => {
                          const exists = innerSelectedRows.some(
                            (r) => r.key === item.key,
                          );
                          let next: RowType[];
                          if (v) {
                            next = exists
                              ? innerSelectedRows
                              : [...innerSelectedRows, item];
                          } else {
                            next = innerSelectedRows.filter(
                              (r) => r.key !== item.key,
                            );
                          }
                          setInnerSelectedRows(next);
                          onRowSelect?.(next);
                        }}
                      />
                      {renderCell(item, columnKey)}
                    </div>
                  ) : (
                    renderCell(item, columnKey)
                  )}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      {pagination && <AppPagination pagination={pagination} />}
    </div>
  );
};
