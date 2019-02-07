import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 5 }
    ]
  };

  handleDelete = id => {
    // console.log('delete clicked ', id);
    const counters = this.state.counters.filter(counter => {
      if (counter.id != id) {
        return counter;
      }
    });
    // console.log('counters :', counters);
    this.setState({
      counters: counters
    });
  };

  handleReset = () => {
    console.log("reset handle");
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({
      counters: counters
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
            >
              <h2> counter {counter.id}</h2>
            </Counter>
          ))}
          {/* add counter id and the value to the list of counter tags  */}
        </ul>
      </React.Fragment>
    );
  }
}

export default Counters;
