import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { SettingsProvider } from "./context/SettingsContext";
import { TodoProvider } from "./context/TodosContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SettingsProvider>
    <TodoProvider>
      <App />
    </TodoProvider>
  </SettingsProvider>
);
