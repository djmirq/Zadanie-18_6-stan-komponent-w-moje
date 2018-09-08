import React, { Component } from "react"; //imrc

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    // console.log("prevProps", prevProps);
    // console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      console.log("Pobieram nowe dane z serwera");
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }
  //   state = {
  //     value: this.props.counter.value,
  //     //tags: ["tag1", "tag2", "tag3"]
  //     tags: []
  //   };

  styles = {
    fontSize: 12,
    fontWeight: "bold",
     width: 50
  };

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags</p>;

  //     return (
  //       <ul>
  //         {" "}
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}{" "}
  //       </ul>
  //     );
  //   }

  // constructor(){
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  // }

  //   handleIncrement = product => {
  //     console.log(product);
  //     this.setState({ value: this.state.value + 1 });
  //   };

  render() {
    console.log("Counter - Rendered");
    //console.log(this.props);
    return (
      <div>
        {/* {this.state.tags.length === 0 && "Please create a new tag!"} */}
        {/* {this.renderTags()} */}
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-success btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-warning btn-sm m-2"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
