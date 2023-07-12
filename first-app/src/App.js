import React, { Component } from "react";
import Example from "./Example";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "Ukraine",
    };
  }

  handleClick = () => {
    if (this.state.country === "Ukraine") {
      this.setState({ country: "Ukraine is the best country" });
    } else {
      this.setState({ country: "Ukraine" });
    }
  };

  render() {
    return (
      <div>
        <Example country={this.state.country} />
        <button onClick={this.handleClick}>Toggle Country</button>
      </div>
    );
  }
}

export default App;
