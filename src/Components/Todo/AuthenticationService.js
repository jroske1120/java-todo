// import React, { Component } from "react";
import axios from "axios";
class AuthenticationService {
  executeBasicAuthenticationService(username, password) {
    return axios.get("http://localhost:8080/basicauth", {
      headers: { authorization: this.createBasicAuthToken(username, password) },
    });
  }

  //refactored auth into a method to call rather than recoding 
  createBasicAuthToken(username, password) {
    return "Basic " + window.btoa(username + ":" + password);
  }

  registerSuccessfulLogin(username, password) {
    // let basicAuthHeader = "Basic " + window.btoa(username + ":" + password);
    sessionStorage.setItem("authenticatedUser", username);
    this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
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

  setupAxiosInterceptors(basicAuthHeader) {
    //adds an auth header to every request
    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = basicAuthHeader;
      }
      return config;
    });
  }
}

export default new AuthenticationService();
