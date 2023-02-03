import React, { Component } from 'react';
import { Button } from 'reactstrap';
import axios from "axios";
import { connect } from 'react-redux';
import { resetIngredients } from "../../../redux/actionCreators";

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        purchasable: state.purchasable
    };
};

const mapDispatchToProps = dispatch => {
    return {
        resetIngredients: () => dispatch(resetIngredients())
    };
};

class Checkout extends Component {
    state = {
        values: {
            deliveryAddress: "",
            phone: "",
            paymentType: "Cash On Delivery",
        }
    };

    // goBack function
    goBack = () => {
        this.props.history.goBack("/");
    };

    // inputChangerHandler function
    inputChangerHandler = e => {
        this.setState({
            values: {
                ...this.state.values,
                [e.target.name]: e.target.value
            }
        });
    };

    // submitHandler 
    submitHandler = () => {
        console.log(this.state.values);
        const order = {    //order post to database(firebase)
            ingredients: this.props.ingredients,
            customer: this.state.values,
            price: this.props.totalPrice,
            orderTime: new Date(),
        };
        console.log(order);
        axios
        .post("https://burger-builder-5ba58-default-rtdb.firebaseio.com/orders.json", order)
        .then(response => console.log(response))
        .catch(err => console.log(err));

        alert("Saving Orders to Database!");
    }

    render() {
        return (
            <div>
                   <h4
                    style={{
                        border: "1px solid grey",
                        boxShadow: "1px 1px #888888",
                        borderRadius: "5px",
                        padding: "20px",
                    }}>
                    Payment: {this.props.totalPrice} INR
                </h4>
                <form
                    style={{
                        border: "1px solid grey",
                        boxShadow: "1px 1px #888",
                        borderRadius: "5px",
                        padding: "20px",
                    }}>
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
                        onChange={(e) => this.inputChangerHandler(e)}>
                        <option value="Cash On Delivery">Cash On Delivery</option>
                        <option value="Phonepe">Phonepe</option>
                        <option value="Credit Card">Credit Card</option>
                    </select>
                    <br />
                    <Button
                        style={{ backgroundColor: "#D70F64" }} onClick={this.submitHandler}>
                        Place Order
                    </Button>
                    <Button
                    style={{marginLeft: "10px"}}
                        color="secondary" onClick={this.goBack}>
                        Cancel
                    </Button>
                
                </form>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);