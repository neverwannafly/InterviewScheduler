import attachHeaders from "../../utils/attachHeaders";
import { getProfile, profileFailure, profileSuccess } from "./profile";
import { SERVER_PREFIX, NETWORK_ERROR } from "../../config";
import { uploadResume, uploadFailure, uploadSuccess } from "./upload";
import sendFile from "../../utils/sendFile";

export const retrieveProfile = (user) => {
  return async dispatch => {
    dispatch(getProfile());
    try {
      const url = `${SERVER_PREFIX}/user/${user.id}`;
      const response = await fetch(attachHeaders(url, user));
      const data = await response.json();
      console.log(data);
      if (data.success) {
        dispatch(profileSuccess({
          resume: data.resume,
        }));
      } else {
        dispatch(profileFailure(data.error));
      }
    } catch {
      dispatch(profileFailure(NETWORK_ERROR));
    }
  }
}

export const uploadUserResume = (user, files) => {
  return async dispatch => {
    dispatch(uploadResume());
    try {
      sendFile(user, files, (data) => {
        if (data.success) {
          dispatch(uploadSuccess());
          dispatch(retrieveProfile(user));
        } else {
          dispatch(uploadFailure(data.error));
        }
      });
    } catch {
      dispatch(uploadFailure(NETWORK_ERROR));
    }
  }
}