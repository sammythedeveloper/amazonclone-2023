import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./index.css";
import { StateProvider } from "./Components/StateProvider";
import reducer, { initialState } from "./Components/reducer";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
