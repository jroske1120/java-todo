// import React, { Component } from "react";

class AuthenticationService {
    registerSuccessfulLogin(username,password){
        console.log('succesful register')
        sessionStorage.setItem('authenticatedUser', username);
    }
    logout() {
        sessionStorage.removeItem('authenticatedUser')
    }
  }

  export default new AuthenticationService()