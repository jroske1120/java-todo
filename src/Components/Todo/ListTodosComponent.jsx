import React, { Component } from "react";
import TodoDataService from "../../api/todo1/TodoDataService.js";
import AuthenticationService from "./AuthenticationService.js";
class ListTodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      message: null,
    };
  }

  componentDidMount() {
    this.refreshTodos();
  }

  refreshTodos() {
    let username = AuthenticationService.getLoggedInUserName();
    TodoDataService.retrieveAllTodos(username).then((response) => {
      console.log(response.data);
      this.setState({
        todo: response.data,
      });
    });
  }

  deleteTodoClicked(id) {
    let username = AuthenticationService.getLoggedInUserName();
    TodoDataService.deleteTodo(username, id).then((response) => {
      this.setState({
        message: `Delete of todo ${id} successful`,
      });
      this.refreshTodos();
    });
  }

  render() {
    return (
      <div>
        <h1>List Todos</h1>
        {this.state.message && (
          <div className="alert alert-success">{this.state.message}</div>
        )}
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
                <th>Date Completed</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todo.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.dateCompleted.toString()}</td>
                  <td>
                    <button
                      onClick={() => this.deleteTodoClicked(todo.id)}
                      className="btn btn-warning"
                    >
                      Delete
                    </button>
                  </td>
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
