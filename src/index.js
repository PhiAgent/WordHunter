import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import { ContextProvider } from "./context/GameContext";


var mountNode = document.getElementById("app");
ReactDOM.render(<ContextProvider>
                  <App />
                </ContextProvider>
                , mountNode);