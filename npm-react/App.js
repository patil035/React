import React from "react";
import ReactDOM from "react-dom";

const element = React.createElement(
  "h1",
  {
    style: {
      fontWeight: "bold",
    },
  },
  "React with NPM packages"
);

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(element);
