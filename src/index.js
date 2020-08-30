import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import results from "./store/reducers/results";
import counter from "./store/reducers/counter";
const mainReducer = combineReducers({
  counterReducer: counter,
  resultsReducer: results,
});

const reduxstore = createStore(mainReducer);

ReactDOM.render(
  <Provider store={reduxstore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
