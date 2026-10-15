import { RatingStatus } from "@/gql/graphql";
import { useDict } from "@/hooks/useDict";
import RatingService from "@/services/rating.service";
import { showErrorMessage, showSuccessMessage } from "@/utils/show.message";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { parseAsInteger, useQueryState } from "nuqs";

export const COMMENTS_PAGE_SIZE = 10;

/** List + moderation state for the comments management page (BRD 4.3.19). */
export const useComments = (enabled: boolean) => {
  const dict = useDict();
  const queryClient = useQueryClient();
  const [search] = useQueryState("search", { defaultValue: "" });
  const [status] = useQueryState("status", { defaultValue: "" });
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));

  const query = useQuery({
    queryKey: ["admin-ratings", search, status, page],
    queryFn: () =>
      RatingService.adminRatings({
        search: search || undefined,
        status: (status as RatingStatus) || undefined,
        page,
        limit: COMMENTS_PAGE_SIZE,
      }),
    enabled,
  });

  const setStatus = useMutation({
    mutationFn: ({ id, status }: { id: string; status: RatingStatus }) =>
      RatingService.setStatus(id, status),
    onSuccess: (_, variables) => {
      showSuccessMessage(
        variables.status === RatingStatus.Hidden
          ? dict.comments_page.messages.hidden
          : dict.comments_page.messages.published,
      );
      void queryClient.invalidateQueries({ queryKey: ["admin-ratings"] });
      void queryClient.invalidateQueries({ queryKey: ["listing-ratings"] });
      void queryClient.invalidateQueries({
        queryKey: ["listing-rating-statistics"],
      });
    },
    onError: (error) => showErrorMessage(error),
  });

  return { query, page, search, status, setStatus };
};
