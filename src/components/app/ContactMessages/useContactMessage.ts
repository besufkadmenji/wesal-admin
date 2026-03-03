import {
  ContactMessage,
  ContactMessagePaginationInput,
  ContactMessageStatus,
  MessageType,
  PaginatedContactMessageResponse,
  SenderType,
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
  const [senderType] = useQueryState("senderType");
  const [dateFrom] = useQueryState("dateFrom");
  const [dateTo] = useQueryState("dateTo");

  const lang = useLang();
  const params: ContactMessagePaginationInput = {
    page,
    limit,
    ...(search && { search }),
    ...(status && { status: status as ContactMessageStatus }),
    ...(messageType && { messageType: messageType as MessageType }),
    ...(senderType && { senderType: senderType as SenderType }),
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
      senderType,
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
