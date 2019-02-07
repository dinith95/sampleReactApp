import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    // image: "https://picsum.photos/200",
    tags: [
      'tag 01' , 'tag 02' , 'tag 03'
    ]
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };
  // get count method => return number if count > 1 else return zero 
  getCount() {
    return this.state.count === 0 ? <h1>Zero</h1> : this.state.count; // jsx can be directly returned 
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
  getTags(){
    if(this.state.tags.length === 0){
      return <p> no elements avalable </p>
    }else {
      return this.state.tags.map(tag => <li key = {tag}>{ tag }</li> )
    }
  }

    handleIncrement = (id) => {
      // state should be updated 
      this.setState({
        count: this.state.count + id ,
      })
    }
  // the main ui structure is placed in the render method 
  render() {
    return (
      // react fragment is a ideal replacement for div 
      <React.Fragment> 
        <span className={this.getClasses()}>{this.getCount()} </span> 
        {/* the getClasses() method is passed as a style class */}
        {/* the getcount() method is passed as the count  */}

        <button onClick={ () => this.handleIncrement(23)} className="btn btn-secondary btn-sm">increment</button>
        <img src={this.state.image} alt="" />
        <ul>
          {this.getTags()}
        </ul>
      </React.Fragment>
    );
  }
}

export default Counter;
