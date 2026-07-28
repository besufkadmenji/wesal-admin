import "@apollo/client";

declare module "@apollo/client" {
  export namespace ApolloClient {
    export namespace DeclareDefaultOptions {
      interface WatchQuery {
        fetchPolicy?: "no-cache";
      }

      interface Query {
        fetchPolicy?: "no-cache";
      }

      interface Mutate {
        errorPolicy?: "none";
      }
    }
  }
}
