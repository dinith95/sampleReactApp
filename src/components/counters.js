import React, { Component } from "react";
import Counter from "./counter";
import { connect } from "react-redux";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ],
    totalCounter: 0
  };

  handleDelete = id => {
    // console.log('delete clicked ', id);
    const counters = this.state.counters.filter(counter => {
      if (counter.id != id) {
        return counter;
      }
    });
    let totalCount = 0;
    counters.forEach(counter => (totalCount += counter.value));
    // console.log('counters :', counters);
    this.setState({
      counters: counters,
      totalCounter: totalCount
    });
  };

  handleDecrement = id => {
    console.log("decrement");
    const counters = this.state.counters.map(counter => {
      if (counter.id === id) {
        counter.value = counter.value - 1;
        return counter;
      } else {
        return counter;
      }
    });
    this.setState({
      counters: counters,
      totalCounter: this.state.totalCounter - 1
    });
  };

  handleIncrement = id => {
    console.log("increment");
    const counters = this.state.counters.map(counter => {
      if (counter.id === id) {
        counter.value = counter.value + 1;
        return counter;
      } else {
        return counter;
      }
    });
    this.setState({
      counters: counters,
      totalCounter: this.state.totalCounter + 1
    });
  };

  handleReset = () => {
    console.log("reset handle");
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({
      counters: counters,
      totalCounter: 0
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
              // onDelete={this.handleDelete}
              // onIncrement={this.handleIncrement}
              // onDecrement={this.handleDecrement}
            >
              <h2> counter {counter.id}</h2>
            </Counter>
          ))}
          {/* add counter id and the value to the list of counter tags  */}
        </ul>
        <div>
          <h2> total count {this.props.totalCount}</h2>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  totalCount: state.totalCounter
});
export default connect(
  mapStateToProps,
  {}
)(Counters);
