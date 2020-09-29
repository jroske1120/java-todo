import React, { Component } from "react";
import "./App.css";
import FirstComponent from "./Components/learning-examples/FirstComponent";
import SecondComponent from "./Components/learning-examples/SecondComponent";
import ThirdComponent from "./Components/learning-examples/ThirdComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
       
            Edit <code>src/App.js</code> and save to reload.

        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    );
  }
}


export default App;
