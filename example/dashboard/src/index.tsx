import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// TODO: add width restrictor

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <div className="layout">
      <h1>Dashboard</h1>
    </div>
  </React.StrictMode>,
);
