import React, { Component } from "react";

 class LoginComponent extends Component {
   state = {
     username: '',
     password: '',
   }

   handleChange = ( event, propertyName ) => {
    this.setState( {
        [propertyName]: event.target.value
      
    } );
  }
    render() {
      return (
        <div>
      Username: 
      <input 
      type="text" name="username" 
      value={this.state.username} 
      onChange={ event => this.handleChange(event, 'username') } 
      />
      Password: 
      <input type="password" name="password" 
      value={this.state.password} 
      onChange={ event => this.handleChange(event, 'password') } 
      />
      <button>Login</button>
      </div>
      );   
    }
  }
  
  export default LoginComponent;