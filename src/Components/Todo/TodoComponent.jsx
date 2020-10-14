import React, { Component } from "react";
// import AuthenticationService from "./AuthenticationService";
// import { Route, Redirect } from "react-router-dom";


class TodoComponent extends Component {
    render() {
      return (
       <div>TodoComponent {this.props.match.params.id}</div>
      );
    }
  }
  export default TodoComponent;