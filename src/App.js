import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoApp from "./Components/Todo/TodoApp";
import LoginComponent from "./Components/Todo/LoginComponent";
import WelcomeComponent from "./Components/Todo/WelcomeComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <Route path="/" component={LoginComponent} />
            <Route path="/login" component={LoginComponent} />
            <Route path="/welcome" component={WelcomeComponent} />
        </Router>
        <TodoApp />
        {/* <LoginComponent />
        <WelcomeComponent /> */}
      </div>
    );
  }
}

export default App;
