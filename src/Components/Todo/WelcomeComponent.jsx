import React, { Component } from "react";
import { Link } from "react-router-dom";
// import {BrowserRouter as Router, Route} from 'react-router-dom';

class WelcomeComponent extends Component {

  retrieveWelcomeMessage() {
    console.log('retrieveWelcomeMessage clicked')
  }
  
  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <div className="container">
          Welcome {this.props.match.params.name}. 
          You can manage your list
          <Link to="/todos">here</Link>
        </div>
        <div className="container">
          Click ehre for customized welcome message. 
          <button 
          className="btn btn-success"
          onClick={this.retrieveWelcomeMessage}> Get Welcome message</button>
        </div>
      </>
    );
  }
}

export default WelcomeComponent;
