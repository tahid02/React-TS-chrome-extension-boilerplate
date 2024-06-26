import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import "./options.css";

const rootElement = document.createElement("div");
rootElement.id = "root";
document.body.appendChild(rootElement);
//
const root = createRoot(rootElement);
console.log(document.getElementById("root"));

root.render(
  <StrictMode>
    <h1>Your App</h1>
    <img src="icon.png" alt="" width="400" />
  </StrictMode>
);
