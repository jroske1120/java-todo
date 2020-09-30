
import React from "react";
// import {BrowserRouter as Router, Route} from 'react-router-dom';

function WelcomeComponent () {
    return (
    <div className="WelcomeComponent">{this.props.params}</div>
    );
  }

  export default WelcomeComponent;