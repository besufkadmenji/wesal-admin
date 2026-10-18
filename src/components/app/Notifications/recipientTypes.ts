import { BroadcastRecipientType } from "@/gql/graphql";
import { Dictionary } from "@/config/i18n/types";

export const RECIPIENT_TYPES: BroadcastRecipientType[] = [
  BroadcastRecipientType.User,
  BroadcastRecipientType.Provider,
];

/** "Customers, Service providers" for a broadcast's recipient types. */
export const recipientTypesLabel = (
  dict: Dictionary,
  types: BroadcastRecipientType[],
) =>
  types
    .map((type) => dict.notifications_page.recipient_types[type])
    .join("، ");
