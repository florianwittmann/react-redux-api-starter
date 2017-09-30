import {
  LOGIN_INPROGRESS,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_INPROGRESS,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT_INPROGRESS,
  LOGOUT_SUCCESS,
  LOGIN_EXISTINGTOKEN
} from "./types";

export default function(state = {}, action) {
  switch (action.type) {
    case LOGIN_INPROGRESS:
    case SIGNUP_INPROGRESS:
    case LOGOUT_INPROGRESS:
      return { ...state, error: "", inProgress: true };
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
    case LOGIN_EXISTINGTOKEN:
      return { ...state, error: "", inProgress: false, authenticated: true };
    case LOGOUT_SUCCESS:
      return { ...state, authenticated: false, inProgress: false };
    case LOGIN_FAILURE:
    case SIGNUP_FAILURE:
      return { ...state, error: action.error, inProgress: false };

    default:
      return state;
  }
}
