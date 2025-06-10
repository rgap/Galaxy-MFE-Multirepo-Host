import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const mount = async () => {
  try {
    const container = document.getElementById("root");
    const root = createRoot(container);

    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Error mounting host application:", error);
  }
};

mount();
