import attachHeaders from "../../utils/attachHeaders";
import { getProfile, profileFailure, profileSuccess } from "./profile";
import { SERVER_PREFIX, NETWORK_ERROR } from "../../config";
import { uploadResume, uploadFailure, uploadSuccess } from "./upload";
import sendFile from "../../utils/sendFile";

export const retrieveProfile = (user) => {
  return dispatch => {
    dispatch(getProfile());
    try {
      const userPath = window.location.pathname;
      const url = `${SERVER_PREFIX}/${userPath}`;
      fetch(attachHeaders(url, user)).then(response => 
        response.json()
      ).then(data => {
        if (data.success) {
          dispatch(profileSuccess({
            resume: data.resume,
          }));
        } else {
          dispatch(profileFailure(data.error));
        }
      });
    } catch {
      dispatch(profileFailure(NETWORK_ERROR));
    }
  }
}

export const uploadUserResume = (user, files) => {
  return dispatch => {
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