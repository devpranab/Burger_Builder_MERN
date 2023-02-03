import React, { Component } from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";

class BurgerBuilder extends Component {
  state = {
    ingredients: [
      { type: "salad", amount: 0 },
      { type: "cheese", amount: 0 },
      { type: "meat", amount: 0 },
    ],
  };

  // add function
  addIngredientHandle = (type) => {
    console.log(type);
    const ingredients = [...this.state.ingredients];
    for (let item of ingredients) {
      if (item.type === type) item.amount++;
    }
    this.setState({ ingredients: ingredients });
  };

  // remove function
  removeIngredientHandle = (type) => {
    console.log(type);
    const ingredients = [...this.state.ingredients];
    for (let item of ingredients) {
      if (item.type === type) {
        if (item.amount <= 0) return;
        item.amount--;
      }
    }
    this.setState({ ingredients: ingredients });
  };

  render() {
    return (
      <div className="d-flex flex-md-row flex-column">
        <Burger ingredients={this.state.ingredients} />
        <Controls
          ingredientAdded={this.addIngredientHandle}
          ingredientRemoved={this.removeIngredientHandle}
        />
      </div>
    );
  }
}

export default BurgerBuilder;
