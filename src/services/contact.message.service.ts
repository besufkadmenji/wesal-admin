import {
  ContactMessage,
  ContactMessagePaginationInput,
  PaginatedContactMessageResponse,
} from "@/gql/graphql";
import { CONTACT_MESSAGE_QUERY } from "@/graphql/contact-message/contactMessage";
import { CONTACT_MESSAGES_QUERY } from "@/graphql/contact-message/contactMessages";
import { MARK_AS_READ_MUTATION } from "@/graphql/contact-message/markAsRead";
import { REMOVE_CONTACT_MESSAGE_MUTATION } from "@/graphql/contact-message/removeContactMessage";
import client from "@/utils/apollo.client";
import { parseGraphQLError } from "@/utils/parse-graphql-error";
import axiosClient from "@/utils/axios.client";
import { REPLY_TO_CONTACT_MESSAGE } from "@/graphql/contact-message/replyToContactMessage";

class ContactMessageService {
  static contactMessages = async (
    paginationInput: ContactMessagePaginationInput,
  ): Promise<PaginatedContactMessageResponse | null> => {
    try {
      const contactMessagesResult = await client().query({
        query: CONTACT_MESSAGES_QUERY,
        variables: {
          paginationInput,
        },
      });
      return contactMessagesResult.data?.contactMessages ?? null;
    } catch (e) {
      console.error("contactMessagesResult", e);
    }
    return null;
  };
  static contactMessage = async (
    contactMessageId: string,
  ): Promise<ContactMessage | null> => {
    try {
      const contactMessageResult = await client().query({
        query: CONTACT_MESSAGE_QUERY,
        variables: {
          contactMessageId,
        },
      });
      return contactMessageResult.data?.contactMessage ?? null;
    } catch (e) {
      console.error("contact messageResult", e);
    }
    return null;
  };

  static markAsRead = async (markAsReadId: string) => {
    try {
      const markAsReadResponse = await client().mutate({
        mutation: MARK_AS_READ_MUTATION,
        variables: {
          markAsReadId,
        },
      });
      return markAsReadResponse.data?.markAsRead ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
  static sendReply = async (
    replyToContactMessageId: string,
    message: string,
  ) => {
    try {
      const replyContactMessageResponse = await client().mutate({
        mutation: REPLY_TO_CONTACT_MESSAGE,
        variables: {
          replyToContactMessageId,
          message,
        },
      });
      return replyContactMessageResponse.data?.replyToContactMessage ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
  static removeContactMessage = async (removeContactMessageId: string) => {
    try {
      const removeContactMessageResponse = await client().mutate({
        mutation: REMOVE_CONTACT_MESSAGE_MUTATION,
        variables: {
          removeContactMessageId,
        },
      });
      return removeContactMessageResponse.data?.removeContactMessage ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };

  static exportContactMessages = async (fields?: string[]): Promise<Blob> => {
    const params =
      fields && fields.length > 0 ? { fields: fields.join(",") } : {};
    const response = await axiosClient.get("/contact-messages/export", {
      params,
      responseType: "blob",
    });
    return new Blob([response.data], { type: "text/csv" });
  };
}

export default ContactMessageService;
