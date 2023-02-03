import React, { Component } from "react";
import { Formik } from "formik";

class Auth extends Component {
  render() {
    return (
      <div>
        <h2 style={{marginBottom: "15px"}}>Login</h2>
        <Formik
          initialValues={
            { email: "", password: "", passwordConfirm: "" }
        }
          onSubmit={(values) => {
            console.log("values:", values);
          }}

          validate={(values) => {
            const errors = {};

            if(!values.email){
                errors.email = "Required";
            }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                errors.email = "Invalid email address"
            }

            if(!values.password){
                errors.password = "Required";
            }else if(values.password.length < 6){
                errors.password = "Password must be atleast 6 characters!"
            }
            
            if(!values.passwordConfirm){
                errors.passwordConfirm = "Required";
            }else if(values.password!==values.passwordConfirm){
                errors.passwordConfirm = "Password doesn't match"
            }
            console.log("errors:", errors);
            return errors;
          }}
        >
          {/* Display form */}
          {({values, handleChange, handleSubmit, errors}) => (
            <div style={{
                border: "1px solid gray",
                padding: "20px",
                borderRadius: "5px"
            }}>
              <form onSubmit={handleSubmit}>
                <input
                  name="email"
                  placeholder="Enter Your Email"
                  className="form-control"
                  value={values.email}
                  onChange={handleChange}
                />
                <span style={{color: "red"}}>{errors.email}</span>
                <br />
                <input
                  name="password"
                  placeholder="Password"
                  className="form-control"
                  value={values.password}
                  onChange={handleChange}
                />
                 <span style={{color: "red"}}>{errors.password}</span>
                <br />
                <input
                  name="passwordConfirm"
                  placeholder="Confirm Password"
                  className="form-control"
                  value={values.passwordConfirm}
                  onChange={handleChange}
                />
                 <span style={{color: "red"}}>{errors.passwordConfirm}</span>
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