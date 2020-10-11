import React, { Component } from "react";
import { Link } from "react-router-dom";
// import {BrowserRouter as Router, Route} from 'react-router-dom';
import HelloWorldService from "../../api/todo1/HelloWorldService.js";
class WelcomeComponent extends Component {
  constructor(props) {
    super(props);
    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
    this.state = {
      welcomeMessage: "",
    };
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
    this.Error = this.handleError.bind(this);
  }
  retrieveWelcomeMessage() {
    HelloWorldService.executeHelloWorldPathVariableService(
      this.props.match.params.name
    )
      .then((response) => this.handleSuccessfulResponse(response))
      .catch((error) => this.handleError(error));
  }

  handleSuccessfulResponse(response) {
    console.log(response);
    this.setState({
      welcomeMessage: response.data.message,
    });
  }
  handleError(error) {
    let errorMessage = "";
    if (error.message) errorMessage += error.message;
    if (error.response && error.response.data) {
      errorMessage += error.response.data.message;
    }
    this.setState({ welcomeMessage: errorMessage });
  }

  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <div className="container">
          Welcome {this.props.match.params.name}. You can manage your list
          <Link to="/todos">here</Link>
        </div>
        <div className="container">
          Click ehre for customized welcome message.
          <button
            className="btn btn-success"
            onClick={this.retrieveWelcomeMessage}
          >
            Get Welcome message
          </button>
        </div>
        <div className="container">{this.state.welcomeMessage}</div>
      </>
    );
  }
}

export default WelcomeComponent;
