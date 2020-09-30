import React, { Component } from "react";

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
      this.props.history.push(`/welcome/${this.state.username}`)
      this.setState({ successMessage: true, loginFailed: false });
    } else {
      this.setState({ loginFailed: true, successMessage: false });
    }
  };
  render() {
    return (
      <div>
        {this.state.loginFailed && <div>Invalid Login</div>}
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
        <button onClick={this.Login}>Login</button>
      </div>
    );
  }
}

export default LoginComponent;
