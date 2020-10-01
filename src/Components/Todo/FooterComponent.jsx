import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService";
import { Route, Redirect } from "react-router-dom";


class FooterComponent extends Component {
    render() {
      return (
        <footer className="footer">
          <span className="text-muted">&copy; Joel Roske 2020</span>
        </footer>
      );
    }
  }
  export default FooterComponent;