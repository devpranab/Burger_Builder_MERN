import React, { Component } from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import { auth } from "../redux/authActionCreators";
import Spinner from "../Components/Spinner/Spinner";

const mapDispatchToProps = dispatch => {
  return {
    auth: (email, password, mode) => dispatch(auth(email, password, mode))
  }
}

const mapStateToProps = state => {
  return {
   authLoading: state.authLoading,
   authFailedMsg: state.authFailedMsg
  }
}

class Auth extends Component {
  state = {
    mode: "Sign Up",
  };

  switchModeHandler = () => {
    this.setState({
      mode: this.state.mode === "Sign Up" ? "Login" : "Sign Up",
    });
  };

  render() {
    let form = null;
    if(this.props.authLoading){
      form = <Spinner/>
    }else{
      form = (
<Formik
          initialValues={{ email: "", password: "", passwordConfirm: "" }}
          onSubmit={(values) => {
            console.log("values:", values);
            this.props.auth(values.email, values.password, this.state.mode);
          }}
          validate={(values) => {
            const errors = {};

            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.password) {
              errors.password = "Required";
            } else if (values.password.length < 6) {
              errors.password = "Password must be atleast 6 characters!";
            }
            if (this.state.mode === "Sign Up") {
            if (!values.passwordConfirm) {
              errors.passwordConfirm = "Required";
            } else if (values.password !== values.passwordConfirm) {
              errors.passwordConfirm = "Password doesn't match";
             }
            }
            console.log("errors:", errors);
            return errors;
          }}
        >
          {/* Display form */}
          {({ values, handleChange, handleSubmit, errors }) => (
            <div
              style={{
                border: "1px solid gray",
                padding: "20px",
                borderRadius: "5px",
              }}
            >
              <form onSubmit={handleSubmit}>
                <input
                  name="email"
                  placeholder="Enter Your Email"
                  className="form-control"
                  value={values.email}
                  onChange={handleChange}
                />
                <span style={{ color: "red" }}>{errors.email}</span>
                <br />
                <input
                  name="password"
                  placeholder="Password"
                  className="form-control"
                  value={values.password}
                  onChange={handleChange}
                />
                <span style={{ color: "red" }}>{errors.password}</span>
                <br />
                {this.state.mode === "Sign Up" ? <div>
                <input
                  name="passwordConfirm"
                  placeholder="Confirm Password"
                  className="form-control"
                  value={values.passwordConfirm}
                  onChange={handleChange}
                />
                <span style={{ color: "red" }}>{errors.passwordConfirm}</span>
                <br />
                </div> : null}
                <button type="submit" className="btn btn-success">
                  {this.state.mode === "Sign Up" ? "Sign Up" : "Login"}
                </button>
              </form>
            </div>
          )}
        </Formik>
      )
    }
    return (
      <div>
        <button
          style={{
            width: "100%",
            backgroundColor: "#D70F64",
            color: "#fff",
          }}
          className="btn btn-lg"
          onClick={this.switchModeHandler}
        >
          Switch to {this.state.mode === "Sign Up" ? "Login" : "Sign Up"}
        </button>
        <br />
        <br />
        {form}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

//sana4041@gmail.com
//999999

//aaksh1@gmail.com
//090909