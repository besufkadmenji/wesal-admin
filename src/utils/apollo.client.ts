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
import { createClient } from "graphql-ws";
import Cookies from "js-cookie";

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

  const wsLink =
    typeof window !== "undefined"
      ? new GraphQLWsLink(
          createClient({
            url: process.env.NEXT_PUBLIC_SOCKET ?? "",
            lazy: true,
            retryAttempts: Infinity,
            shouldRetry: () => true,
            // Admin-only subscriptions authenticate with the admin token.
            connectionParams: () => {
              const currentToken = token ?? Cookies.get("token");
              return currentToken
                ? { Authorization: `Bearer ${currentToken}` }
                : {};
            },
            on: {
              connected: () => {
                window.dispatchEvent(new Event("wesal:graphql-reconnected"));
              },
            },
          }),
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
