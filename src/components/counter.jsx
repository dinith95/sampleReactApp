import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: this.props.value, // declare the count as props value
    tags: ["tag 01", "tag 02", "tag 03"]
  };

  styles = {
    // fontSize: 20,
    fontWeight: "bold"
  };
  // get count method => return number if count > 1 else return zero
  getCount() {
    return this.props.value === 0 ? <h3>Zero</h3> : this.props.value; // jsx can be directly returned
  }
  // conditional style classes
  getClasses() {
    let styleString = "badge m-2 ";
    if (this.state.count === 0) {
      styleString += "badge-warning";
    } else {
      styleString += "badge-primary";
    }
    return styleString;
  }

  handleIncrement = () => {
    // state should be updated
    // this.setState({
    //   count: this.state.count + 1
    // });
    // this.
  };

  handleDelete = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <span className={this.getClasses()}>{this.getCount()} </span>

        <button
          onClick={() => this.props.onIncrement(this.props.id)}
          className="btn btn-secondary btn-sm"
        >
          increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.id)}
          className="btn-warning m-2"
        >
          {" "}
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn-danger"
        >
          {" "}
          Delete
        </button>

        <img src={this.state.image} alt="" />
        {/* <ul>
          {this.getTags()}
        </ul> */}
      </React.Fragment>
    );
  }
}

export default Counter;
