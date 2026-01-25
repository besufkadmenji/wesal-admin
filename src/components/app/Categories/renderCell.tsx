import { ActionsCell } from "@/components/app/shared/tables/ActionsCell";
import { RowType } from "@/components/app/shared/tables/AppTable";
import Image from "next/image";
import { Key } from "react";

export const renderCell = (
  row: RowType,
  column: Key,
  action: {
    onView: () => void;
    onEdit: () => void;
    onDelete: () => void;
  },
) => {
  if (column === "action") {
    return (
      <ActionsCell
        onView={action.onView}
        onEdit={action.onEdit}
        onDelete={action.onDelete}
      />
    );
  } else if (column === "image") {
    return (
      <div className="relative h-10 aspect-video">
        <Image
          src={`${process.env.NEXT_PUBLIC_DATA}/files/${row["image"] as string}`}
          alt="Category Image"
          width={50}
          height={50}
        />
      </div>
    );
  }
  return <p className="w-max">{row[column as string]}</p>;
};
