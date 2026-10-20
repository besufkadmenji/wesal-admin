import { StatusChip } from "@/components/app/shared/StatusChip";
import { RatingStatus } from "@/gql/graphql";
import { useDict } from "@/hooks/useDict";

export const CommentStatusBadge = ({ status }: { status: RatingStatus }) => {
  const dict = useDict();
  return (
    <StatusChip
      tone={status === RatingStatus.Published ? "success" : "neutral"}
      label={dict.comments_page.status[status]}
    />
  );
};
