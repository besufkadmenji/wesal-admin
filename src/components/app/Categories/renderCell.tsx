import { ActionsCell } from "@/components/app/shared/tables/ActionsCell";
import { RowType } from "@/components/app/shared/tables/AppTable";
import { Category } from "@/gql/graphql";
import Image from "next/image";
import { Key } from "react";
import { AppSwitch } from "../shared/AppSwitch";

export const renderCell = (
  row: RowType,
  column: Key,
  {
    category,
    action,
  }: {
    category: Category;
    action: {
      onView: () => void;
      onEdit: () => void;
      onDelete: () => void;
      onActivate: (value: boolean) => void;
    };
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
  } else if (column === "status") {
    return (
      <AppSwitch
        isSelected={category.status === "ACTIVE"}
        onValueChange={(checked) => {
          action.onActivate(checked);
        }}
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

