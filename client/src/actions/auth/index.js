import { attemptLogin, loginSuccess, loginFailure } from "./login"
import { SERVER_PREFIX, NETWORK_ERROR } from "../../config";
import history from "../../history";
import { attemptRegister, registerSuccess } from "./register";
import { logoutSuccess, logoutFailure } from "./logout";
import attachHeaders from "../../utils/attachHeaders";

export const loginUser = (body) => {
  return dispatch => {
    dispatch(attemptLogin());
    try {
      fetch(`${SERVER_PREFIX}/login`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(response => 
        response.json()
      ).then(data => {
        if (data.success) {
          dispatch(loginSuccess(data.user));
          history.push('/interviews');
        } else {
          dispatch(loginFailure(data.error));
        }
      });
    } catch {
      dispatch(loginFailure(NETWORK_ERROR));
    }
  }
}

export const registerUser = (body) => {
  return dispatch => {
    dispatch(attemptRegister());
    try {
      fetch(`${SERVER_PREFIX}/signup`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(response => 
        response.json
      ).then(data => {
        if (data.success) {
          dispatch(registerSuccess(data.user));
          history.push('/interviews');
        } else {
          dispatch(loginFailure(data.error));
        }
      });
    } catch {
      dispatch(loginFailure(NETWORK_ERROR));
    }
  }
}

export const logoutUser = (userData) => {
  return dispatch => {
    try {
      const url = `${SERVER_PREFIX}/logout`;
      fetch(attachHeaders(url, userData), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(response => 
        response.json()
      ).then(data => {
        if (data.success) {
          dispatch(logoutSuccess());
          history.push('/');
        } else {
          dispatch(logoutFailure(data.errors));
        }
      });
    } catch {
      dispatch(logoutFailure(NETWORK_ERROR));
    }
  }
}