import { RatingStatus } from "@/gql/graphql";
import { useDict } from "@/hooks/useDict";
import { twMerge } from "tailwind-merge";

export const CommentStatusBadge = ({ status }: { status: RatingStatus }) => {
  const dict = useDict();
  return (
    <span
      className={twMerge(
        "inline-flex rounded-xl px-2 py-1 text-sm font-medium",
        status === RatingStatus.Published
          ? "bg-green-50 text-green-600"
          : "bg-gray-100 text-gray-600",
      )}
    >
      {dict.comments_page.status[status]}
    </span>
  );
};
