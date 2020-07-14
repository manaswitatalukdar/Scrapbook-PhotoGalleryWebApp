import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";
import { render } from "@testing-library/react";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleAddNewCounter = () => {
    const counters = [...this.state.counters];
    const length = counters.length;
    console.log("counters: ", length);
    counters[length] = { id: length + 1, value: 0 };
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    console.log("incremented!!");
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value > 0) counters[index].value--;
    this.setState({ counters });
    console.log("decremented!!");
  };

  handleDelete = (counter) => {
    const counters = this.state.counters.filter((c) => c.id !== counter);
    this.setState({ counters });
    console.log("Deleted!", counter);
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
    console.log("Reset!!");
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onAddNewCounter={this.handleAddNewCounter}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
