import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 15,
    fontWeight: "bold",
  };

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary btn-sm m-2"
        >
          increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className={this.getButtonClasses()}
        >
          decrement
        </button>
        <div
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="button btn btn-danger btn-sm m-2"
        >
          delete
        </div>
        <br></br>
      </React.Fragment>
    );
  }

  getButtonClasses() {
    let classes = "btn btn-sm m-2 btn-";
    classes += this.props.counter.value === 0 ? "secondary" : "primary";
    return classes;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "danger" : "warning";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
