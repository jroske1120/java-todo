import React, { Component } from "react";
// import { Route, Redirect } from "react-router-dom";
import moment from "moment";
import TodoDataService from "../../api/todo1/TodoDataService";
import { Field, Form, Formik, ErrorMessage } from "formik";
import AuthenticationService from "./AuthenticationService.js";

class TodoComponent extends Component {
  state = {
    id: this.props.match.params.id,
    description: "",
    targetDate: "",
  };

  componentDidMount() {
    if (this.state.id === -1) {
      return;
    }
    let username = AuthenticationService.getLoggedInUserName();
    TodoDataService.retrieveTodo(username, this.state.id).then((response) =>
      this.setState({
        description: response.data.description,
        targetDate: moment(response.data.targetDate).format("MMM Do YY"),
      })
    );
  }

  onSubmit = (values) => {
    let username = AuthenticationService.getLoggedInUserName();
    let todo = {
      id: this.state.id,
      description: values.description,
      targetDate: values.targetDate,
    };
    if (this.state.id === -1) {
      TodoDataService.createTodo(username, todo).then(() =>
        this.props.history.push("/todos")
      );
    } else {
      TodoDataService.updateTodo(username, this.state.id, todo).then(() =>
        this.props.history.push("/todos")
      );
    }
  };

  validate(values) {
    let errors = {};
    if (!values.description) {
      errors.description = "Enter a Description";
    } else if (values.description.length < 5) {
      errors.description = "Enter at least 5 characters in Decription";
    }

    if (!moment(values.targetDate).isValid()) {
      errors.targetDate = "Enter a Valid Target Date";
    }
    return errors;
  }

  render() {
    let { description, targetDate } = this.state;
    return (
      <>
        <h1>Todo</h1>
        <div className="container">
          <Formik
            initialValues={{ description, targetDate }}
            onSubmit={this.onSubmit}
            validateOnChange={false}
            validateOnBlur={false}
            validate={this.validate}
            enableReinitialize={true}
          >
            {(props) => (
              <Form>
                <ErrorMessage
                  name="description"
                  component="div"
                  className="alert alert-warning"
                />
                <ErrorMessage
                  name="targetDate"
                  component="div"
                  className="alert alert-warning"
                />
                <fieldset className="form-group">
                  <label>Description</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="description"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label>targetDate</label>
                  <Field
                    className="form-control"
                    type="date"
                    name="targetDate"
                  />
                </fieldset>
                <button className="btn btn-success" type="submit">
                  Save
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </>
    );
  }
}
export default TodoComponent;
