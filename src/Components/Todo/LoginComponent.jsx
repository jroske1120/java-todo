import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService.js";

class LoginComponent extends Component {
  state = {
      username: "joel",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
    };

  handleChange =(event)=> {
    // console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  Login = () => {
    console.log("state is...", this.state);
    // if (this.state.username === "joel" && this.state.password === "joel") {
    //   AuthenticationService.registerSuccessfulLogin(
    //     this.state.username,
    //     this.state.password
    //   );
    //   this.props.history.push(`/welcome/${this.state.username}`);
    //   this.setState({ showSuccessMessage: true });
    //   this.setState({ hasLoginFailed: false });
    // } else {
    //   this.setState({ showSuccessMessage: false });
    //   this.setState({ hasLoginFailed: true });
    // }

    AuthenticationService.executeBasicAuthenticationService(
      this.state.username,
      this.state.password
    )
      .then(() => {
        AuthenticationService.registerSuccessfulLogin(
          this.state.username,
          this.state.password
        );
        this.props.history.push(`/welcome/${this.state.username}`);
      })
      .catch(() => {
        this.setState({ showSuccessMessage: false });
        this.setState({ hasLoginFailed: true });
      });
  };


  render() {
    return (
      <div>
        <h1>Login</h1>
        <div className="container">
          {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
          {this.state.hasLoginFailed && (
            <div className="alert alert-warning">Invalid Credentials</div>
          )}
          {this.state.showSuccessMessage && <div>Login Sucessful</div>}
          {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
          User Name:{" "}
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          Password:{" "}
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button className="btn btn-success" onClick={this.Login}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
