import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Console - Rendered");

    return (
      <div>
        <button
          onClick={this.props.onReset}
          debugger
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            //  id={counter.id}
            //  value={counter.value}
            counter={counter} //zamiast id ={counter.id}  oraz value = {ceounter.value} przekazujemy cały counter
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
