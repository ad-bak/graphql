import ReactDOM from "react-dom";
import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import ApolloProviderWrapper from "./ApolloProvider";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProviderWrapper />
  </React.StrictMode>
);

reportWebVitals();
