import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RoundTextarea from "@/components/textarea/RoundTextArea";
import RoundSquareInput from "@/components/input/RoundSquareInput";

// TODO: add width restrictor

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <div className="layout">
      <RoundSquareInput placeholder="Type here" />
      <RoundTextarea placeholder="Type here" />
    </div>
  </React.StrictMode>,
);
