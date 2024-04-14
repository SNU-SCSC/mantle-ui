import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RoundSquareButton from "@/components/button/RoundSquareButton";

// TODO: add width restrictor

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <div className="layout">
      <RoundSquareButton
        innerText="Click me"
        buttonSize="large"
        isPrimary={true}
        color="blue"
      />
      <RoundSquareButton
        innerText="Click me"
        buttonSize="medium"
        isPrimary={true}
        color="blue"
      />
      <RoundSquareButton
        innerText="Click me"
        buttonSize="small"
        isPrimary={true}
        color="blue"
      />
      <RoundSquareButton
        innerText="Click me"
        buttonSize="large"
        isPrimary={false}
        color="blue"
      />
      <RoundSquareButton
        innerText="Click me"
        buttonSize="medium"
        isPrimary={false}
        color="blue"
      />
      <RoundSquareButton
        innerText="Click me"
        buttonSize="small"
        isPrimary={false}
        color="blue"
      />
      <RoundSquareButton
        innerText="Click me"
        buttonSize="large"
        isPrimary={true}
        color="black"
      />
      <RoundSquareButton
        innerText="Click me"
        buttonSize="medium"
        isPrimary={true}
        color="black"
      />
      <RoundSquareButton
        innerText="Click me"
        buttonSize="small"
        isPrimary={true}
        color="black"
      />
      <RoundSquareButton
        innerText="Click me"
        buttonSize="large"
        isPrimary={false}
        color="black"
      />
      <RoundSquareButton
        innerText="Click me"
        buttonSize="medium"
        isPrimary={false}
        color="black"
      />
      <RoundSquareButton
        innerText="Click me"
        buttonSize="small"
        isPrimary={false}
        color="black"
      />
    </div>
  </React.StrictMode>,
);
