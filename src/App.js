import "./styles.css";
import React, { Component } from "react";
import Generate from "./components/Generate";
import Planet from "./components/Planet";
//10 different planets

/**
 * This project is to test API fetching with random data
 * Generate a random Number and make a call to the sw api for that planet's data
 */
class App extends Component {
  constructor() {
    super();
    this.state = {
      content: <Generate />
    };
    this.reset = this.reset.bind(this);
    this.generate = this.generate.bind(this);
  }

  reset() {
    this.setState(() => {
      return {
        content: <Generate />
      };
    });
  }

  generate() {
    let num = Math.ceil(Math.random() * 10);
    this.setState(() => {
      return {
        content: <Planet num={num} />
      };
    });
  }

  componentDidMount() {
    this.reset();
  }
  /**
   * Create an app component that has 3 elements
   * - A content section which resizes based on if it's a planet element or title
   * - A button to generate a planet's data
   * - A button to reset the card
   */
  render() {
    return (
      <div className="app-wrapper">
        <div>{this.state.content}</div>
        <button className="reset-button" onClick={this.reset}>
          Reset
        </button>
        <button className="app-button" onClick={this.generate}>
          Generate New Planet
        </button>
      </div>
    );
  }
}

export default App;
