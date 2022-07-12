import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CartProvider } from "./contexts/cart.context";
import { UserProvier } from "./contexts/user.context";
import { CategoriesProvider } from "./contexts/categories.context";

const client = new ApolloClient({
  uri: "https://crwn-clothing.com/",
  cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <UserProvier>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvier>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
