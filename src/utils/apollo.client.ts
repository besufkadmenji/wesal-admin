import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { SetContextLink } from "@apollo/client/link/context";
import { RemoveTypenameFromVariablesLink } from "@apollo/client/link/remove-typename";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient, type Client as WsClient } from "graphql-ws";
import Cookies from "js-cookie";
import { fallbackLng, languages } from "@/config/i18n/settings";

/** The page's language: the URL segment first, then the `lang` cookie. */
const pageLanguage = () => {
  const segment =
    typeof window !== "undefined"
      ? window.location.pathname.split("/")[1]
      : undefined;
  if (segment && languages.includes(segment)) return segment;
  return Cookies.get("lang") || fallbackLng;
};

// Live sockets that are connected right now, with the language each sent.
// Each client() call builds its own socket client; only connected ones
// need restarting.
const connectedSockets = new Map<WsClient, string>();

/**
 * Q-30: a socket sends the page language only when it connects, and the
 * language menu switches pages without a reload. Sockets whose language no
 * longer matches the page are terminated: graphql-ws reconnects (not
 * fatal) with the current language and resubscribes, so live pop-ups
 * follow the switch. Returns whether any socket restarted.
 */
export const syncRealtimeLanguage = (language: string): boolean => {
  let restarted = false;
  for (const [socket, socketLanguage] of connectedSockets) {
    if (socketLanguage === language) continue;
    connectedSockets.delete(socket);
    socket.terminate();
    restarted = true;
  }
  return restarted;
};

const removeTypenameLink = new RemoveTypenameFromVariablesLink();

const client = (token?: string, url?: string) => {
  const httpLink = new HttpLink({
    uri: url ?? "/api/proxy/graphql",
  });

  const authLink = new SetContextLink(({ headers }) => {
    console.log("Setting auth headers", Cookies.get("lang"));
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${
          token ?? (typeof window !== "undefined" ? Cookies.get("token") : "")
        }`,
        "accept-language": Cookies.get("lang") || "ar",
      },
    };
  });

  let socket: WsClient | null = null;
  let socketLanguage = fallbackLng;
  const wsLink =
    typeof window !== "undefined"
      ? new GraphQLWsLink(
          (socket = createClient({
            url: process.env.NEXT_PUBLIC_SOCKET ?? "",
            lazy: true,
            retryAttempts: Infinity,
            shouldRetry: () => true,
            // Admin-only subscriptions authenticate with the admin token.
            connectionParams: () => {
              const currentToken = token ?? Cookies.get("token");
              // Live notifications are sent in this language, like HTTP
              // requests (ClickUp 869fp1jmt: pop-ups were in English).
              const language = pageLanguage();
              socketLanguage = language;
              return {
                ...(currentToken
                  ? { Authorization: `Bearer ${currentToken}` }
                  : {}),
                "accept-language": language,
              };
            },
            on: {
              connected: () => {
                if (socket) connectedSockets.set(socket, socketLanguage);
                window.dispatchEvent(new Event("wesal:graphql-reconnected"));
              },
              closed: () => {
                if (socket) connectedSockets.delete(socket);
              },
            },
          })),
        )
      : authLink.concat(httpLink);

  const defaultOptions: ApolloClient.DefaultOptions = {
    watchQuery: {
      fetchPolicy: "no-cache",
    },
    query: {
      fetchPolicy: "no-cache",
    },
    mutate: {
      errorPolicy: "none",
    },
  };
  const link = ApolloLink.from([removeTypenameLink, httpLink]);

  const splitLink = ApolloLink.split(
    ({ query }) => {
      const definition = getMainDefinition(query);

      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink,
    authLink.concat(link),
  );

  return new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions,
    ssrMode: true,
    queryDeduplication: false,
  });
};

export default client;
