import { GET_PROFILE, PROFILE_SUCCESS, PROFILE_FAILURE } from "../../types/profile"

export const getProfile = () => {
  return {
    type: GET_PROFILE,
  }
}

export const profileSuccess = profile => {
  return {
    type: PROFILE_SUCCESS,
    payload: profile,
  }
}

export const profileFailure = error => {
  return {
    type: PROFILE_FAILURE,
    payload: error,
  }
}