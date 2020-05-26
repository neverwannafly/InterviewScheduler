import { ATTEMPT_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from "../../types/auth"

export const attemptLogin = () => {
  return {
    type: ATTEMPT_LOGIN,
  }
}

export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  }
}

export const loginFailure = errors => {
  return {
    type: LOGIN_FAILURE,
    payload: errors,
  }
}