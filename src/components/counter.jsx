import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    image: "https://picsum.photos/200"
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };
  getCount() {
    return this.state.count === 0 ? <h1>Zero</h1> : this.state.count;
  }
  getClasses() {
    let styleString = "badge m-2 ";
    if (this.state.count === 0) {
      styleString += "badge-warning";
    } else {
      styleString += "badge-primary";
    }
    return styleString;
  }
  render() {
    return (
      <React.Fragment>
        <span className={this.getClasses()}>{this.getCount()} </span>
        <button className="btn btn-secondary btn-sm">increment</button>
        <img src={this.state.image} alt="" />
      </React.Fragment>
    );
  }
}

export default Counter;
