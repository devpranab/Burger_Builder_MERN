import React, { Component } from "react";
import { Formik } from "formik";

class Auth extends Component {
  render() {
    return (
      <div style={{
        border: "1px solid black",
        padding: "15px"
      }}>
        <h2 style={{marginBottom: "15px"}}>Login</h2>
        <Formik
          initialValues={
            { email: "", password: "", passwordConfirm: "" }
        }
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {/* Display form */}
          {({values, handleChange, handleSubmit}) => (
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  name="email"
                  placeholder="Enter Your Email"
                  className="form-control"
                  value={values.email}
                  onChange={handleChange}
                />
                <br />
                <input
                  name="password"
                  placeholder="Password"
                  className="form-control"
                  value={values.password}
                  onChange={handleChange}
                />
                <br />
                <input
                  name="passwordConfirm"
                  placeholder="Confirm Password"
                  className="form-control"
                  value={values.passwordConfirm}
                  onChange={handleChange}
                />
                <br />
                <button type="submit" className="btn btn-success">
                  Sign up
                </button>
              </form>
            </div>
          )}
        </Formik>
      </div>
    );
  }
}

export default Auth;