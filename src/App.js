import React, { Component } from "react";
import "./App.css";
import TodoApp from "./Components/Todo/TodoApp";
import LoginComponent from "./Components/Todo/LoginComponent";
import ThirdComponent from "./Components/Todo/ThirdComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
       
            Edit <code>src/App.js</code> and save to reload.

        <TodoApp />
        <LoginComponent />
        {/* <ThirdComponent /> */}
      </div>
    );
  }
}


export default App;
