import { ATTEMPT_REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE } from "../../types/auth"

export const attemptRegister = () => {
  return {
    type: ATTEMPT_REGISTER,
  }
}

export const registerSuccess = user => {
  return {
    type: REGISTER_SUCCESS,
    payload: user,
  }
}

export const registerFailure = errors => {
  return {
    type: REGISTER_FAILURE,
    payload: errors,
  }
}