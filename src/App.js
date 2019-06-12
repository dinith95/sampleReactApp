import React, { Component } from "react";
import logo from "./logo.svg";
import Counters from "./components/counters";
import "./App.css";
import Counter from "./components/counter";
import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from 'redux';
import store from "./store";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Counters />
        </Provider>
      </div>
    );
  }
}

export default App;
