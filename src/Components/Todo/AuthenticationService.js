// import React, { Component } from "react";

class AuthenticationService {
  registerSuccessfulLogin(username, password) {
    console.log("succesful register");
    sessionStorage.setItem("authenticatedUser", username);
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
}

export default new AuthenticationService();
