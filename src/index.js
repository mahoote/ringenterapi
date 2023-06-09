import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import reportWebVitals from "./reportWebVitals";

import "bulma/css/bulma.min.css";
import "./css/menuBurger.css";
import { FontStyles } from "./components/globals/fonts/fonts.style";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <FontStyles />
    <App />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
