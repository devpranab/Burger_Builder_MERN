import React from "react";
import "./Burger.css";
import Ingredient from "../Ingredient/Ingredient";

const Burger = () => {
  return (
    <div className="Burger">
      <Ingredient type="bread-top" />
      <Ingredient type="meat" />
      <Ingredient type="meat" />
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default Burger;