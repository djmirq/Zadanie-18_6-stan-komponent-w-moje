import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor(props) {
    super(props);
    console.log("App - Constructor", this.props);
  }

  componentDidMount() {
    //this.setState({movies}) //get data from server and update list ?
    console.log("App - Mounted");
  }

  handleIncrement = counterId => {
    // const counters = [...this.state.counters]; //clone
    // const index = counters.indexOf(counter); //okreslenie który to id w counters
    // counters[index] = { ...counter }; //clone
    // counters[index].value++; //podniesienie wartosci
    // this.setState({ counters }); //nadpisane zmodyfikowaną listą  robimy tak, ponieważ nie usuwa się kolekcji, tylko ją modyfikuje?
    this.setState(state => ({ //Inny zapis
      ...state,
      counters: state.counters.map(el => ({
        id: el.id,
        value: el.id === counterId ? el.value + 1 : el.value
      }))
    }));
  };

  handleDecrement = counterId => {
    // const counters = [...this.state.counters]; //clone
    // const index = counters.indexOf(counter); //okreslenie który to id w counters
    // counters[index] = { ...counter }; //clone
    // counters[index].value--; //zmiana wartosci
    // this.setState({ counters }); //nadpisane zmodyfikowaną listą  robimy tak, ponieważ nie usuwa się kolekcji, tylko ją modyfikuje?
    this.setState(state => ({  //Inny zapis
      ...state,
      counters: state.counters.map(el => ({
        id: el.id,
        value: el.id === counterId ? el.value - 1 : el.value
      }))
    }));
  };

  handleReset = () => {
    const newcounters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ newcounters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");

    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
