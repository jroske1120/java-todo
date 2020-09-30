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
    console.log("this.state...", this.state);
    const s = this.state;
    if (s.username === "joel" && s.password === "joel") {
      this.setState({ successMessage: true, loginFailed: false });
    } else {
      this.setState({ loginFailed: true, successMessage: false });
    }
  };
  render() {
    return (
      <div>
        {/* <ShowInvalidCredentials loginFailed={this.state.loginFailed} />
        <ShowLoginSuccessMessage successMessage={this.state.successMessage} /> */}
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

// function ShowInvalidCredentials(props) {
//   if (props.loginFailed) {
//     return <div>Invalid Login</div>;
//   } return null;
// }

// function ShowLoginSuccessMessage(props) {
//   if (props.successMessage) {
//     return         <div>Login Successful</div>
//     ;
//   } return null;
// }


export default LoginComponent;
