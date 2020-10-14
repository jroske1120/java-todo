import React, { Component } from "react";
// import AuthenticationService from "./AuthenticationService";
// import { Route, Redirect } from "react-router-dom";
import moment from "moment";
import { Field, Form, Formik } from "formik";

class TodoComponent extends Component {
  state = {
    id: this.props.match.params.id,
    description: "Learn Java",
    dateCompleted: moment(new Date()).format("YYYY_MM_DD"),
  };
  render() {
    return (
      <>
        <h1>Todo</h1>
        <div className="container">
          <Formik>
            {(props) => (
              <Form>
                <fieldset className="form-group">
                  <label>Description</label>
                  <Field className="form-constrol" type="text" name="description"/>
                </fieldset>
                <fieldset className="form-group">
                  <label>dateCompleted</label>
                  <Field className="form-constrol"  type="date" name="dateCompleted"/>
                </fieldset>
                <button className="btn btn-success" type="submit">Save</button>
              </Form>
            )}
          </Formik>
        </div>
      </>
    );
  }
}
export default TodoComponent;
