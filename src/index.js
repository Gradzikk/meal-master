import React from "react";
import { createRoot } from "react-dom/client";
import { AppProvider } from "./context/AppContext";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
    <style jsx global>{`
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
      }
      body {
        background-color: #f0f2f5;
        line-height: 1.6;
      }
      button {
        cursor: pointer;
      }
      button:hover {
        opacity: 0.9;
      }
      input {
        width: 100%;
      }
    `}</style>
  </React.StrictMode>
);