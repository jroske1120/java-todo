import React, { Component } from "react";
import "./App.css";
import "./bootstrap.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import TodoApp from "./Components/Todo/TodoApp";
// import LoginComponent from "./Components/Todo/LoginComponent";
// import WelcomeComponent from "./Components/Todo/WelcomeComponent";
// import ErrorComponent from "./Components/Todo/ErrorComponent";
import AuthenticationService from "./Components/Todo/AuthenticationService.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <HeaderComponent />
          <Switch>
            <Route path="/" exact component={LoginComponent} />
            <Route path="/login" component={LoginComponent} />
            <Route path="/welcome/:name" component={WelcomeComponent} />
            <Route path="/todos" component={ListTodosComponent} />
            <Route path="/logout" component={LogoutComponent} />
            <Route component={ErrorComponent} />
          </Switch>
          <FooterComponent />
        </Router>
        {/* <TodoApp /> */}
      </div>
    );
  }
}

class LoginComponent extends Component {
  state = {
    username: "",
    password: "",
    loginFailed: false,
    successMessage: "",
  };

  handleChange = (event, propertyName) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  Login = () => {
    const s = this.state;
    if (s.username === "joel" && s.password === "joel") {
      AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
      this.props.history.push(`/welcome/${this.state.username}`);
      this.setState({ successMessage: true, loginFailed: false });
    } else {
      this.setState({ loginFailed: true, successMessage: false });
    }
  };
  render() {
    return (
      <div>
        {this.state.loginFailed && (
          <div className="alert alert-warning">Invalid Login</div>
        )}
        {this.state.successMessage && <div> Login Successful</div>}
        Username:
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={(event) => this.handleChange(event, "username")}
        />
        Password:
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={(event) => this.handleChange(event, "password")}
        />
        <button className="btn btn-success" onClick={this.Login}>
          Login
        </button>
      </div>
    );
  }
}
class ErrorComponent extends Component {
  render() {
    return (
    <h1 className="ErrorComponent">
        404
        </h1>
    );
  }
}
class HeaderComponent extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>Joel</div>
          <ul className="navbar-nav">
            <li>
              <Link className="nav-link" to="/welcome/joel">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/todos">
                Todo
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            <li>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link 
              className="nav-link" 
              onClick={AuthenticationService.logout}
              to="/logout">
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
class FooterComponent extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="text-muted">&copy; Joel Roske 2020</span>
      </footer>
    );
  }
}

class LogoutComponent extends Component {
  render() {
    return (
      <>
        <h1>You are logged out</h1>
        <div className="container">Thank you for using the todo app!</div>
      </>
    );
  }
}
class ListTodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        {
          id: 1,
          description: "Learn React",
          done: false,
          targetDate: new Date(),
        },
        {
          id: 2,
          description: "Learn Java",
          done: false,
          targetDate: new Date(),
        },
        {
          id: 3,
          description: "Learn Something Else",
          done: false,
          targetDate: new Date(),
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>List Todos</h1>
        <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>description</th>
              <th>done</th>
              <th>targetDate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todo.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}

class WelcomeComponent extends Component {
  render() {
    return (
      <>
      <h1>Welcome!</h1>
      <div className="container">
        Welcome {this.props.match.params.name}. You can manage your list 
        <Link to="/todos">here</Link>
      </div>
      </>
    );
  }
}

export default App;
