import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@/index";
import Button from "@/components/button/Button";
import TextInput from "@/components/input/TextInput";
import TextArea from "@/components/textarea/TextArea";

// TODO: add width restrictor

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <div id="Layout">
      <h1>Dashboard</h1>
      <div id="Buttons">
        <Button>Button 1</Button>
        <Button color="blue">Button 2</Button>
        <Button color="green">Button 3</Button>
        <Button color="red">Button 4</Button>
        <Button color="yellow">Button 5</Button>
        <Button accent>Button A1</Button>
        <Button accent color="blue">
          Button A2
        </Button>
        <Button accent color="green">
          Button A3
        </Button>
        <Button accent color="red">
          Button A4
        </Button>
        <Button accent color="yellow">
          Button A5
        </Button>
      </div>
      <div id="Inputs">
        <TextInput placeholder="Text Input" label="TextInput 1" />
        <TextInput placeholder="Text Input" />
        <TextArea placeholder="Text Area" label="TextArea 1" />
        <TextArea placeholder="Text Area" resizable />
      </div>
    </div>
  </React.StrictMode>,
);
