import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import "./styles";

(function(){
  const app = document.getElementById("app");
  ReactDOM.render(
    <App />
  , app);
})();