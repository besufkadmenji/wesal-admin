import {
  ContactMessage,
  ContactMessagePaginationInput,
  ContactMessageStatus,
  MessageType,
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
  const [status] = useQueryState("status");
  const [search] = useQueryState("search");
  const [messageType] = useQueryState("messageType");
  const [dateFrom] = useQueryState("dateFrom");
  const [dateTo] = useQueryState("dateTo");

  const lang = useLang();
  const params: ContactMessagePaginationInput = {
    page,
    limit,
    ...(search && { search }),
    ...(status && { status: status as ContactMessageStatus }),
    ...(messageType && { messageType: messageType as MessageType }),
    ...(dateFrom && { dateFrom }),
    ...(dateTo && { dateTo }),
  };

  return useQuery({
    queryKey: [
      "contactMessages",
      lang,
      page,
      limit,
      status,
      messageType,
      dateFrom,
      dateTo,
      search,
    ],
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
