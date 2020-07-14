import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      onIncrement,
      onDecrement,
      onDelete,
      counters,
      onAddNewCounter,
    } = this.props;
    return (
      <React.Fragment>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <button
          onClick={onAddNewCounter}
          className="btn btn-warning btn-small m-2"
        >
          Add
        </button>
        <br></br>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
