import React from "react";
import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as BaseApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5050",
  cache: new InMemoryCache(),
});

const ApolloProviderWrapper = () => (
  <BaseApolloProvider client={client}>
    <App />
  </BaseApolloProvider>
);

export default ApolloProviderWrapper;
