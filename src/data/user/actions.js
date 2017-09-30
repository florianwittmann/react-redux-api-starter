import axios from "axios";
import {
  LOGIN_INPROGRESS,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_INPROGRESS,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT_SUCCESS,
  REQUEST_PASSWORD_RESET_INPROGRESS,
  REQUEST_PASSWORD_RESET_SUCCESS,
  REQUEST_PASSWORD_RESET_FAILURE,
  PASSWORD_RESET_INPROGRESS,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAILURE
} from "./types";
import { parseError, parseLoginError } from "../../utils/errors";

const ROOT_URL = process.env.REACT_APP_API_SERVER;

export function loginUser({ email, password }, callback) {
  return function(dispatch) {
    dispatch({ type: LOGIN_INPROGRESS });

    // submit email/password to server
    axios
      .post(`${ROOT_URL}/user/login`, { email, password })
      .then(response => {
        // If request is good
        // - Update state to indicate auth
        dispatch({ type: LOGIN_SUCCESS });
        // - Save JWT Token
        localStorage.setItem("token", response.data.token);
        callback();
      })
      .catch(error => {
        // If request if bad
        // - Show an error to the user
        dispatch({
          type: LOGIN_FAILURE,
          error: parseLoginError(error)
        });
      });
  };
}

export function signupUser({ email, password }, callback) {
  return function(dispatch) {
    dispatch({ type: SIGNUP_INPROGRESS });

    axios
      .post(`${ROOT_URL}/user/signup`, { email, password })
      .then(response => {
        dispatch({ type: SIGNUP_SUCCESS });
        localStorage.setItem("token", response.data.token);
        callback();
      })
      .catch(error =>
        dispatch({
          type: SIGNUP_FAILURE,
          error: parseError(error)
        })
      );
  };
}

export function requestPasswordReset({ email }, callback) {
  return function(dispatch) {
    dispatch({ type: REQUEST_PASSWORD_RESET_INPROGRESS });

    axios
      .post(`${ROOT_URL}/user/reset`, { email })
      .then(response => {
        dispatch({ type: REQUEST_PASSWORD_RESET_SUCCESS });
        callback();
      })
      .catch(error =>
        dispatch({
          type: REQUEST_PASSWORD_RESET_FAILURE,
          error: parseError(error)
        })
      );
  };
}

export function resetPassword(token, { password }, callback) {
  return function(dispatch) {
    dispatch({ type: PASSWORD_RESET_INPROGRESS });

    axios
      .post(`${ROOT_URL}/user/reset/${token}`, { password })
      .then(response => {
        // If request is good
        // - Update state to indicate auth
        dispatch({ type: PASSWORD_RESET_SUCCESS });
        // - Save JWT Token
        localStorage.setItem("token", response.data.token);
        // - Redirect
        callback();
      })
      .catch(error =>
        dispatch({
          type: PASSWORD_RESET_FAILURE,
          error: parseError(error)
        })
      );
  };
}

export function logoutUser() {
  localStorage.removeItem("token");
  return { type: LOGOUT_SUCCESS };
}
