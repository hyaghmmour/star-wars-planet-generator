import React from "react";

class Generate extends React.Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }

  render() {
    return (
      <div>
        <h1>Welcome to Star Wars Planet Generator!</h1>
        <p>
          To get started, press the "Generate New Planet" button, if you would
          like to generate a new planet, press reset!
        </p>
      </div>
    );
  }
}

export default Generate;
