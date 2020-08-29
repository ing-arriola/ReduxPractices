import React, { Component } from "react";
import { createStore } from "redux";
import Counter from "./containers/Counter/Counter";
import "./App.css";
import reducer from "./store/reducer";

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;
