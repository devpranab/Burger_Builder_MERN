import React, { Component } from "react";
import { Button } from "reactstrap";

class Checkout extends Component {
  state = {
    values: {
      deliveryAddress: "",
      phone: "",
      paymentType: "Cash On Delivery",
    },
  };

  // goBack function
  goBack = () => {
    this.props.history.goBack("/");
  };

  // inputChangerHandler function
  inputChangerHandler = (e) => {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value,
      },
    });
  };

  // submitHandler
  submitHandler = () => {
    console.log(this.state.values);
  };

  render() {
    return (
      <div>
        <form
          style={{
            border: "1px solid grey",
            boxShadow: "1px 1px #888",
            borderRadius: "5px",
            padding: "20px",
          }}
        >
          <textarea
            name="deliveryAddress"
            value={this.state.values.deliveryAddress}
            className="form-control"
            placeholder="Your Address"
            onChange={(e) => this.inputChangerHandler(e)}
          ></textarea>
          <br />
          <input
            name="phone"
            className="form-control"
            value={this.state.values.phone}
            placeholder="Your Phone Number"
            onChange={(e) => this.inputChangerHandler(e)}
          />
          <br />
          <select
            name="paymentType"
            className="form-control"
            value={this.state.values.paymentType}
            onChange={(e) => this.inputChangerHandler(e)}
          >
            <option value="Cash On Delivery">Cash On Delivery</option>
            <option value="Phonepe">Phonepe</option>
            <option value="Credit Card">Credit Card</option>
          </select>
          <br />
          <Button
            style={{ backgroundColor: "#D70F64" }}
            onClick={this.submitHandler}
          >
            Place Order
          </Button>
          <Button
            style={{ marginLeft: "10px" }}
            color="secondary"
            onClick={this.goBack}
          >
            Cancel
          </Button>
        </form>
      </div>
    );
  }
}

export default Checkout;