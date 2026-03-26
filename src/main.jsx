import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { HoverProvider } from "@/context/HoverContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HoverProvider>
      <App />
    </HoverProvider>
  </StrictMode>,
);
