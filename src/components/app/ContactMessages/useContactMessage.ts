import {
  ContactMessage,
  ContactMessagePaginationInput,
  PaginatedContactMessageResponse,
} from "@/gql/graphql";
import { useLang } from "@/hooks/useLang";
import ContactMessageService from "@/services/contact.message.service";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { parseAsInteger, useQueryState } from "nuqs";

export const useContactMessages = (): UseQueryResult<
  PaginatedContactMessageResponse | null,
  Error
> => {
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [limit] = useQueryState("limit", parseAsInteger.withDefault(10));

  const lang = useLang();
  const params: ContactMessagePaginationInput = {
    page,
    limit,
  };

  return useQuery({
    queryKey: ["contactMessages", lang, page, limit],
    queryFn: () => ContactMessageService.contactMessages(params),
  });
};

export const useContactMessage = (
  id: string,
): UseQueryResult<ContactMessage | null, Error> => {
  const lang = useLang();

  return useQuery({
    queryKey: ["contactMessage", id, lang],
    queryFn: () => ContactMessageService.contactMessage(id),
    enabled: !!id,
  });
};
