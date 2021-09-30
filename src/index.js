import React from "react";
import ReactDOM from "react-dom";
import { Global as GlobalStyles, css } from "@emotion/react";
import App from "./App";

const globalStyles = css`
  body * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles styles={globalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
