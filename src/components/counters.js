import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
    totalCounter: 0,
  };

  handleDelete = id => {
    // console.log('delete clicked ', id);
    const counters = this.state.counters.filter(counter => counter.id != id);
    const totalCount = counters.reduce(
      (total, counter) => total + counter.value,
      0
    );
    // console.log('counters :', counters);
    this.setState({
      counters: counters,
      totalCounter: totalCount,
    });
  };

  handleDecrement = id => {
    console.log("decrement");
    const counters = this.state.counters.map(counter => {
      counter.value = counter.id === id ? counter.value - 1 : counter.value;
      return counter;
    });
    this.setState({
      counters: counters,
      totalCounter: this.state.totalCounter - 1,
    });
  };

  handleIncrement = id => {
    console.log("increment");
    const counters = this.state.counters.map(counter => {
      counter.value = counter.id === id ? counter.value + 1 : counter.value;
      return counter;
    });
    this.setState({
      counters: counters,
      totalCounter: this.state.totalCounter + 1,
    });
  };

  handleReset = () => {
    console.log("reset handle");
    const counters = [...this.state.counters];
    counters.forEach(c => (c.value = 0));
    this.setState({
      counters: counters,
      totalCounter: 0,
    });
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleReset} className="btn btn-primary">
          {" "}
          REset{" "}
        </button>
        <ul>
          {this.state.counters.map(counter => (
            <Counter
              id={counter.id}
              key={counter.id}
              value={counter.value}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}>
              <h2> counter {counter.id}</h2>
            </Counter>
          ))}
          {/* add counter id and the value to the list of counter tags  */}
        </ul>
        <div>
          <h2> total count {this.state.totalCounter}</h2>
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
