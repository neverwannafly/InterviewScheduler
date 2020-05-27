import { UPLOAD_RESUME, UPLOAD_SUCCESS, UPLOAD_FAILURE } from "../../types/profile"

export const uploadResume = () => {
  return {
    type: UPLOAD_RESUME,
  }
}

export const uploadSuccess = () => {
  return {
    type: UPLOAD_SUCCESS,
  }
}

export const uploadFailure = (error) => {
  return {
    type: UPLOAD_FAILURE,
    payload: error,
  }
}