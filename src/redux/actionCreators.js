import * as actionTypes from "./actionTypes";
import axios from "axios";

export const addIngredient = igtype => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        payload: igtype,
    };
};

export const removeIngredient = igtype => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        payload: igtype,
    };
};

export const updatePurchasable = () => {
    return {
        type: actionTypes.UPDATE_PURCHASABLE,
    };
};

export const resetIngredients = () => {
    return {
        type: actionTypes.RESET_INGREDIENTS,
    };
};

export const loadOrders = orders => {
    return {
        type: actionTypes.LOAD_ORDERS,
        payload: orders
    };
};

export const orderLoadFailed = () => {
    return {
        type: actionTypes.ORDER_LOAD_FAILED
    };
};

export const fetchOrders = (token) => dispatch => {
    axios
        .get("https://burger-builder-edc35-default-rtdb.firebaseio.com/orders.json?auth=" + token)
        .then((response) => {
            console.log(response.data);
            dispatch(loadOrders(response.data));
        })
        .catch((err) => {
            dispatch(orderLoadFailed());
        });
};