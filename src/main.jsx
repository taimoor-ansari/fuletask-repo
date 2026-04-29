import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom/client";
import TagManager from "react-gtm-module";
import "./index.css";
import App from "./App.jsx";

const tagManagerArgs = {
  gtmId: "GTM-MCG6FQTP",
};

TagManager.initialize(tagManagerArgs);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
