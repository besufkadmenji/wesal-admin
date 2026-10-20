import { BroadcastRecipientType } from "@/gql/graphql";
import BroadcastService from "@/services/broadcast.service";
import { useQuery } from "@tanstack/react-query";
import { parseAsInteger, useQueryState } from "nuqs";

export const BROADCASTS_PAGE_SIZE = 10;

/** Sent-notifications list state (BRD 4.3.24 list: search + recipient type). */
export const useBroadcasts = (enabled: boolean) => {
  const [search] = useQueryState("search", { defaultValue: "" });
  const [recipientType] = useQueryState("recipientType", {
    defaultValue: "",
  });
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));

  const query = useQuery({
    queryKey: ["admin-broadcasts", search, recipientType, page],
    queryFn: () =>
      BroadcastService.list({
        search: search || undefined,
        recipientType: (recipientType as BroadcastRecipientType) || undefined,
        page,
        limit: BROADCASTS_PAGE_SIZE,
      }),
    enabled,
  });

  return { query, page, search, recipientType };
};
