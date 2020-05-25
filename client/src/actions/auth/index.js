import { attemptLogin, loginSuccess, loginFailure } from "./login"
import { SERVER_PREFIX, NETWORK_ERROR } from "../../config";
import history from "../../history";
import { attemptRegister, registerSuccess } from "./register";

export const loginUser = (body) => {
  return async dispatch => {
    dispatch(attemptLogin());
    try {
      const response = await fetch(`${SERVER_PREFIX}/login`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const data = await response.json();
      if (data.success) {
        dispatch(loginSuccess(data.user));
        history.push('/');
      } else {
        dispatch(loginFailure(data.error));
      }
    } catch {
      dispatch(loginFailure(NETWORK_ERROR));
    }
  }
}

export const registerUser = (body) => {
  return async dispatch => {
    dispatch(attemptRegister());
    try {
      const response = await fetch(`${SERVER_PREFIX}/signup`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const data = await response.json();
      if (data.success) {
        dispatch(registerSuccess(data.user));
        history.push('/');
      } else {
        dispatch(loginFailure(data.error));
      }
    } catch {
      dispatch(loginFailure(NETWORK_ERROR));
    }
  }
}
