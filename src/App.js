import React, { Component } from "react";
import logo from "./logo.svg";
import Counters from "./components/counters";
import "./App.css";
import Counter from "./components/counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counters />
      </div>
    );
  }
}

export default App;
