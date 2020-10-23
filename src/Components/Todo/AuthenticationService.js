// import React, { Component } from "react";
import axios from "axios";
import {API_URL} from '../../Constants'
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
class AuthenticationService {
  executeBasicAuthenticationService(username, password) {
    return axios.get(`${API_URL}/basicauth`, {
      headers: { authorization: this.createBasicAuthToken(username, password) },
    });
  }

  executeJwtAuthenticationService(username, password) {
    return axios.post(`${API_URL}/authenticate`, {
      username,
      password,
    });
  }

  //refactored auth into a method to call rather than recoding
  createBasicAuthToken(username, password) {
    return "Basic " + window.btoa(username + ":" + password);
  }

  registerSuccessfulLogin(username, password) {
    // let basicAuthHeader = "Basic " + window.btoa(username + ":" + password);
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
  }
  logout() {
    sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
  }

  createJWTToken(token) {
    return "Bearer " + token;
  }

  registerSuccessfulLoginForJwt(username, token) {
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    this.setupAxiosInterceptors(this.createJWTToken(token));
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) {
      return false;
    } else {
      return true;
    }
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) {
      return "";
    } else {
      return user;
    }
  }

  setupAxiosInterceptors(token) {
    //adds an auth header to every request
    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = token;
      }
      return config;
    });
  }
}

export default new AuthenticationService();
