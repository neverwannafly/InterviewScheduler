import { ATTEMPT_LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE } from "../../types/auth"

export const attempLogout = () => {
  return {
    type: ATTEMPT_LOGOUT,
  }
}

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
    payload: {},
  }
}

export const logoutFailure = errors => {
  return {
    type: LOGOUT_FAILURE,
    payload: errors,
  }
}