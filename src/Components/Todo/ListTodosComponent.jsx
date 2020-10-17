import React, { Component } from "react";
import TodoDataService from "../../api/todo1/TodoDataService.js";
import AuthenticationService from "./AuthenticationService.js";
import moment from "moment";
class ListTodosComponent extends Component {
 state = {
      todo: [],
      message: null,
    };
  

  componentDidMount() {
    this.refreshTodos();
  }

  addTodoClicked= ()=> {
    console.log('create')
    this.props.history.push('/todos/-1')
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

  updateTodoClicked(id) {
    console.log('update' + id)
    // /todos/${id}
    this.props.history.push(`/todos/${id}`)
    // let username = AuthenticationService.getLoggedInUserName();
    // TodoDataService.deleteTodo(username, id).then((response) => {
    //   this.setState({
    //     message: `Delete of todo ${id} successful`,
    //   });
    //   this.refreshTodos();
    // });
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
                <th>Target Date</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todo.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{moment(todo.targetDate).format("MM-DD-YY")}</td>
                  <td> <button
                      onClick={() => this.updateTodoClicked(todo.id)}
                      className="btn btn-success"
                    >
                      Update
                    </button></td>
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
          <div className="row">
            <button 
            className="btn btn-success" 
            onClick={this.addTodoClicked}
            >Add</button>

          </div>
        </div>
      </div>
    );
  }
}

export default ListTodosComponent;
