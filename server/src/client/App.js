import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <div>App Component</div>
        <button onClick={() => console.log("I'm Clicked")}>Click Me</button>
      </div>
    );
  }
}

export default App;
