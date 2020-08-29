import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";

const reduxstore = createStore(reducer);

ReactDOM.render(
  <Provider store={reduxstore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
