import * as actionTypes from "./actionTypes";
import axios from "axios";

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: {
            token: token,
            userId: userId
        }
    }
}

export const auth = (email, password, mode) => dispatch => {
    const authData = {
        email: email,
        password: password,
        returnSecureToken: true
    }

    let authUrl = null;
    if(mode === "Sign Up"){
        authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
    }else{
        authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
    }

    const API_KEY = "AIzaSyDEOIKevtFk9lia0_ru0HvIJbtGDpWKhw4";
    axios.post(authUrl + API_KEY, authData)
    .then(response => {
        console.log(response);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
    });
}

//https://firebase.google.com/docs/reference/rest/auth#section-create-email-password