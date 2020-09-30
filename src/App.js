import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import TodoApp from "./Components/Todo/TodoApp";
import LoginComponent from "./Components/Todo/LoginComponent";
import WelcomeComponent from "./Components/Todo/WelcomeComponent";
import ErrorComponent from "./Components/Todo/ErrorComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={LoginComponent} />
            <Route path="/login" component={LoginComponent} />
            <Route path="/welcome" component={WelcomeComponent} />
            <Route component={ErrorComponent} />
          </Switch>
        </Router>
        {/* <TodoApp /> */}
      </div>
    );
  }
}

export default App;
