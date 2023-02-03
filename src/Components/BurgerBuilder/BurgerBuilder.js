import React, { Component } from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";
import Summary from "./Summary/Summary";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import { connect } from "react-redux";
import {
    addIngredient,
    removeIngredient,
    updatePurchasable,
  } from "../../redux/actionCreators";

// state access by redux
const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
    purchasable: state.purchasable,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIngredient: (igtype) => dispatch(addIngredient(igtype)),
    removeIngredient: (igtype) => dispatch(removeIngredient(igtype)),
    updatePurchasable: () => dispatch(updatePurchasable()),
  };
};

class BurgerBuilder extends Component {
  state = {
    modalOpen: false,
  };

  // updatepPurchasable function
  updatepPurchasable = (ingredients) => {
    const sum = ingredients.reduce((sum, element) => {
      return sum + element.amount;
    }, 0);
    this.setState({ purchasable: sum > 0 });
  };

  // add function
  addIngredientHandle = (type) => {
    // console.log(type);
    // const ingredients = [...this.state.ingredients];
    // const newPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
    // for (let item of ingredients) {
    //   if (item.type === type) item.amount++;
    // }
    // this.setState({ ingredients: ingredients, totalPrice: newPrice });
    // this.updatepPurchasable(ingredients);
    this.props.addIngredient(type);
    this.props.updatePurchasable();
  };

  // remove function
  removeIngredientHandle = (type) => {
    // console.log(type);
    // const ingredients = [...this.state.ingredients];
    // const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
    // for (let item of ingredients) {
    //   if (item.type === type) {
    //     if (item.amount <= 0) return;
    //     item.amount--;
    //   }
    // }
    // this.setState({ ingredients: ingredients, totalPrice: newPrice });
    // this.updatepPurchasable(ingredients);
    this.props.removeIngredient(type);
    this.props.updatePurchasable();
  };

  // toggle function
  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };

  // handleCheckout
  handleCheckout = () => {
    this.props.history.push("/checkout");
  };

  //   componentDidMount(){
  //     console.log(this.props);//history for routing
  //   }

  render() {
    return (
      <div>
        <div className="d-flex flex-md-row flex-column">
          <Burger ingredients={this.props.ingredients} />
          <Controls
            ingredientAdded={this.addIngredientHandle}
            ingredientRemoved={this.removeIngredientHandle}
            price={this.props.totalPrice}
            toggleModal={this.toggleModal}
            purchasable={this.props.purchasable}
          />
        </div>
        {/* Modal */}
        <Modal isOpen={this.state.modalOpen}>
          <ModalHeader>Your Order Summary</ModalHeader>
          <ModalBody>
            <h5>Total Price: {this.props.totalPrice.toFixed(0)} INR</h5>
            <Summary ingredients={this.props.ingredients} />
          </ModalBody>
          <ModalFooter>
            <Button
              style={{ backgroundColor: "#D70F64" }}
              onClick={this.handleCheckout}
            >
              Continue to Checkout
            </Button>
            <Button color="secondary" onClick={this.toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
