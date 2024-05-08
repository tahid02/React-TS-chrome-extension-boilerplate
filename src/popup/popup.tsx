import React from "react";
import ReactDom from "react-dom";
const p = <p>hello worlds</p>;
const root = document.createElement("div");
document.body.appendChild(root);
ReactDom.render(p, root);
