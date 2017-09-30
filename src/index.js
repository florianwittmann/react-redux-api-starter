import React from "react";
import ReactDOM from "react-dom";
import Store from "./store";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import registerServiceWorker from "./registerServiceWorker";
import "./styles/index.css";
import "font-awesome/css/font-awesome.min.css";
import { LOGIN_EXISTINGTOKEN } from "./data/user/types";

const token = localStorage.getItem("token");
// If we have a token, consider the user to be signed in
if (token) {
  // we need to update application state
  Store.dispatch({ type: LOGIN_EXISTINGTOKEN });
}

ReactDOM.render(
  <Provider store={Store}><AppRouter /></Provider>,
  document.getElementById("root")
);
registerServiceWorker();
