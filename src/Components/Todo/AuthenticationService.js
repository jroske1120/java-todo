// import React, { Component } from "react";
import axios from "axios";
class AuthenticationService {
  registerSuccessfulLogin(username, password) {
    console.log("succesful register");
    sessionStorage.setItem("authenticatedUser", username);
    this.setupAxiosInterceptors()
  }
  logout() {
    sessionStorage.removeItem("authenticatedUser");
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");
    if (user === null) {
      return false;
    } else {
      return true;
    }
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem("authenticatedUser");
    if (user === null) {
      return "";
    } else {
      return user;
    }
  }

  setupAxiosInterceptors() {
    let username = "joel";
    let password = "joel";

    let basicAuthHeader = "Basic " + window.btoa(username + ":" + password);
    //adds an auth header to every request
    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = basicAuthHeader
      }
      return config
    });
  }
}

export default new AuthenticationService();
