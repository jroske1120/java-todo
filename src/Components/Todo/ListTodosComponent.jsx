import React, { Component } from "react";
import TodoDataService from "../../api/todo1/TodoDataService.js";
import AuthenticationService from "./AuthenticationService.js";
class ListTodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
    };
  }

  componentDidMount() {
    let username = AuthenticationService.getLoggedInUserName;
    TodoDataService.retrieveAllTodos(username).then((response) => {
      console.log(response.data);
      this.setState({
        todo: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        <h1>List Todos</h1>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
                <th>Date Completed</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todo.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.dateCompleted.toString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListTodosComponent;
