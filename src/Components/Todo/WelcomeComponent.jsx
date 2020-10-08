import React, { Component } from "react";
import { Link } from "react-router-dom";
// import {BrowserRouter as Router, Route} from 'react-router-dom';
import HelloWorldService from "../../api/todo1/HelloWorldService.js";
class WelcomeComponent extends Component {
  constructor(props) {
    super(props)
    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
    this.state = {
        welcomeMessage: ''
    }
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
  }
  retrieveWelcomeMessage() {
    HelloWorldService.executeHelloWorldService()
    .then((response) => this.handleSuccessfulResponse(response))
    
    // .catch()
  }

  handleSuccessfulResponse(response){
    console.log(response)
    this.setState({
      welcomeMessage: response.data
    });
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
