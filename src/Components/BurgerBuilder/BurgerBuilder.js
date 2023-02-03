import React, { Component } from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";

const INGREDIENT_PRICE = {
    salad: 20,
    cheese: 40,
    meat: 90
}

class BurgerBuilder extends Component {
  state = {
    ingredients: [
      { type: "salad", amount: 0 },
      { type: "cheese", amount: 0 },
      { type: "meat", amount: 0 },
    ],
    totalPrice: 80,
  };

  // add function
  addIngredientHandle = (type) => {
    console.log(type);
    const ingredients = [...this.state.ingredients];
    const newPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
    for (let item of ingredients) {
      if (item.type === type) item.amount++;
    }
    this.setState({ingredients : ingredients, totalPrice : newPrice});
  };

  // remove function
  removeIngredientHandle = (type) => {
    console.log(type);
    const ingredients = [...this.state.ingredients];
    const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
    for (let item of ingredients) {
      if (item.type === type) {
        if (item.amount <= 0) return;
        item.amount--;
      }
    }
    this.setState({ingredients : ingredients, totalPrice : newPrice})
  };

  render() {
    return (
      <div className="d-flex flex-md-row flex-column">
        <Burger ingredients={this.state.ingredients} />
        <Controls
          ingredientAdded={this.addIngredientHandle}
          ingredientRemoved={this.removeIngredientHandle}
          price={this.state.totalPrice}
        />
      </div>
    );
  }
}

export default BurgerBuilder;
