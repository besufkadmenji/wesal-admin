import {
  AdminBroadcastQuery,
  AdminBroadcastsQuery,
  BroadcastPaginationInput,
  BroadcastRecipientOptionsQuery,
  BroadcastRecipientType,
  SendBroadcastInput,
  SendBroadcastMutation,
} from "@/gql/graphql";
import {
  ADMIN_BROADCAST_QUERY,
  ADMIN_BROADCASTS_QUERY,
  BROADCAST_RECIPIENT_OPTIONS_QUERY,
  SEND_BROADCAST_MUTATION,
} from "@/graphql/broadcast/broadcasts";
import client from "@/utils/apollo.client";

export type AdminBroadcastRow =
  AdminBroadcastsQuery["adminBroadcasts"]["items"][number];
export type AdminBroadcastDetail = AdminBroadcastQuery["adminBroadcast"];
export type RecipientOption =
  BroadcastRecipientOptionsQuery["broadcastRecipientOptions"][number];

/** Admin notification management (BRD 4.3.24). */
class BroadcastService {
  static list = async (
    input: BroadcastPaginationInput,
  ): Promise<AdminBroadcastsQuery["adminBroadcasts"] | null> => {
    try {
      const result = await client().query<AdminBroadcastsQuery>({
        query: ADMIN_BROADCASTS_QUERY,
        variables: { input },
        fetchPolicy: "network-only",
      });
      return result.data?.adminBroadcasts ?? null;
    } catch (e) {
      console.error("adminBroadcastsResult", e);
    }
    return null;
  };

  static detail = async (id: string): Promise<AdminBroadcastDetail | null> => {
    try {
      const result = await client().query<AdminBroadcastQuery>({
        query: ADMIN_BROADCAST_QUERY,
        variables: { id },
        fetchPolicy: "network-only",
      });
      return result.data?.adminBroadcast ?? null;
    } catch (e) {
      console.error("adminBroadcastResult", e);
    }
    return null;
  };

  static recipientOptions = async (
    type: BroadcastRecipientType,
    search: string,
  ): Promise<RecipientOption[]> => {
    const result = await client().query<BroadcastRecipientOptionsQuery>({
      query: BROADCAST_RECIPIENT_OPTIONS_QUERY,
      variables: { type, search: search || undefined },
      fetchPolicy: "network-only",
    });
    return result.data?.broadcastRecipientOptions ?? [];
  };

  static send = async (input: SendBroadcastInput) => {
    const result = await client().mutate<SendBroadcastMutation>({
      mutation: SEND_BROADCAST_MUTATION,
      variables: { input },
    });
    if (result.error) throw result.error;
    return result.data?.sendBroadcast ?? null;
  };
}

export default BroadcastService;
